import { NextResponse } from 'next/server'
import { COOKIE, makeToken, roleForPin } from '@/lib/auth'

// Crude in-memory throttle. Enough to stop someone walking a 4-digit PIN by
// hand; it resets on redeploy, which is acceptable for this threat model.
const attempts = new Map<string, { n: number; until: number }>()

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const now = Date.now()
  const rec = attempts.get(ip)

  if (rec && rec.until > now) {
    return NextResponse.json(
      { ok: false, error: 'For mange forsøg. Prøv igen om lidt.' },
      { status: 429 },
    )
  }

  const { pin } = await req.json().catch(() => ({ pin: '' }))
  const role = roleForPin(String(pin ?? '').trim())

  if (!role) {
    const n = (rec?.n ?? 0) + 1
    attempts.set(ip, { n, until: n >= 5 ? now + 60_000 : 0 })
    return NextResponse.json({ ok: false, error: 'Forkert kode.' }, { status: 401 })
  }

  attempts.delete(ip)
  const res = NextResponse.json({ ok: true, role })
  res.cookies.set(COOKIE, await makeToken(role), {
    httpOnly: true,          // unreadable from JavaScript
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 12,    // one shift
  })
  return res
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE, '', { path: '/', maxAge: 0 })
  return res
}
