import { NextResponse, type NextRequest } from 'next/server'
import { COOKIE, readToken, canAccess } from '@/lib/auth'

/**
 * Guards the staff areas before any page renders. Doing it here rather than
 * inside the pages means the protected content is never sent to the browser
 * at all — not even briefly.
 */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const area: 'admin' | 'staff' = pathname.startsWith('/admin') ? 'admin' : 'staff'

  const role = await readToken(req.cookies.get(COOKIE)?.value)
  if (canAccess(role, area)) return NextResponse.next()

  const url = req.nextUrl.clone()
  url.pathname = '/login'
  url.search = `?next=${encodeURIComponent(pathname)}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/admin/:path*', '/personale/:path*'],
}
