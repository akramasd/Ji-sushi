/**
 * PIN-gate for /admin and /personale.
 *
 * Two rules make this safe enough for a restaurant door-code:
 *  1. The PINs live in server-only env vars. They are NOT prefixed
 *     NEXT_PUBLIC_, so Next never inlines them into the browser bundle.
 *     A PIN checked in client JS is a PIN anyone can read in DevTools.
 *  2. The cookie stores a signed role, never the PIN itself. Signing means a
 *     guest cannot simply set `role=admin` in their own browser.
 *
 * Web Crypto is used rather than node:crypto so this also runs in the Edge
 * middleware, where node built-ins are unavailable.
 */

export type Role = 'admin' | 'staff'
export const COOKIE = 'ji_session'

function secret() {
  // Falls back to the PINs so the gate still works if AUTH_SECRET is unset —
  // but set AUTH_SECRET in production so sessions can be invalidated.
  return (
    process.env.AUTH_SECRET ||
    `${process.env.ADMIN_PIN ?? ''}:${process.env.STAFF_PIN ?? ''}:ji-sushi`
  )
}

async function sign(value: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value))
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function makeToken(role: Role) {
  return `${role}.${await sign(role)}`
}

export async function readToken(token: string | undefined): Promise<Role | null> {
  if (!token) return null
  const [role, sig] = token.split('.')
  if (role !== 'admin' && role !== 'staff') return null
  const expected = await sign(role)
  // Constant-time-ish compare: same length, no early exit on first mismatch.
  if (!sig || sig.length !== expected.length) return null
  let diff = 0
  for (let i = 0; i < sig.length; i++) diff |= sig.charCodeAt(i) ^ expected.charCodeAt(i)
  return diff === 0 ? (role as Role) : null
}

/** Which PIN unlocks which role. Admin also satisfies staff-level pages. */
export function roleForPin(pin: string): Role | null {
  const admin = process.env.ADMIN_PIN
  const staff = process.env.STAFF_PIN
  if (admin && pin === admin) return 'admin'
  if (staff && pin === staff) return 'staff'
  return null
}

export function canAccess(role: Role | null, area: Role) {
  if (!role) return false
  return area === 'staff' ? true : role === 'admin'
}
