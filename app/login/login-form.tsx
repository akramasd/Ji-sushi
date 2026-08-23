'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import FishMark from '@/components/fish-mark'

function Form() {
  const router = useRouter()
  const params = useSearchParams()
  const next = params.get('next') || '/personale'
  const [pin, setPin] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError(null)
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin }),
      })
      const data = await res.json()
      if (!data.ok) {
        setError(data.error ?? 'Forkert kode.')
        setPin('')
        return
      }
      // Admin code opens both areas; a staff code only opens /personale.
      router.replace(data.role === 'admin' ? next : '/personale')
      router.refresh()
    } catch {
      setError('Ingen forbindelse. Prøv igen.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="min-h-[100svh] bg-sumi text-white flex items-center justify-center px-6">
      <form onSubmit={submit} className="w-full max-w-xs text-center">
        <FishMark className="w-20 h-10 mx-auto text-gold mb-10" strokeWidth={18} />
        <h1 className="ji-display text-3xl mb-2">Log ind</h1>
        <p className="ji-body text-sm text-white/70 mb-10">Indtast personalekoden.</p>

        <input
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 8))}
          type="password"
          inputMode="numeric"
          autoComplete="one-time-code"
          aria-label="Kode"
          autoFocus
          className="w-full bg-transparent border border-white/30 focus:border-gold outline-none px-4 py-4 text-center ji-accent text-2xl tracking-[0.5em] tabular-nums"
        />

        {error && (
          <p role="alert" className="ji-body text-sm text-gold mt-4">{error}</p>
        )}

        <button
          type="submit"
          disabled={busy || pin.length < 4}
          className="w-full mt-8 ji-accent text-[13px] tracking-[0.22em] uppercase bg-gold text-sumi py-4 disabled:opacity-40 hover:bg-gold-lit transition-colors"
        >
          {busy ? 'Tjekker…' : 'Log ind'}
        </button>
      </form>
    </main>
  )
}

export default function LoginForm() {
  return (
    <Suspense fallback={<div className="min-h-[100svh] bg-sumi" />}>
      <Form />
    </Suspense>
  )
}
