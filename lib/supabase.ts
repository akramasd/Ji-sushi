import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!url || !anon) {
  // Fail loudly at boot rather than with a confusing runtime error mid-order.
  console.warn('[jisushi] Supabase env vars mangler — bestilling virker ikke uden dem.')
}

export const supabase = createClient(url ?? '', anon ?? '')

/** Server-side client with the service role, for routes that must bypass RLS. */
export function serviceClient() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  return createClient(url ?? '', key || anon || '')
}

export type MenuItem = {
  id: string
  name: string
  description: string | null
  price: number
  category: string
  is_available: boolean
}
