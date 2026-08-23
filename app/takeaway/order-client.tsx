"use client"
import { useMemo, useState } from "react"
import type { MenuItem } from "@/lib/supabase"
import type { OpenState } from "@/lib/opening-hours"
import { kr } from "@/lib/site"
import FishMark from "@/components/fish-mark"

type Cart = Record<string, number>

export default function OrderClient({
  items,
  categories,
  openState,
}: {
  items: MenuItem[]
  categories: string[]
  openState: OpenState
}) {
  const [cart, setCart] = useState<Cart>({})
  const [sheet, setSheet] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [pickup, setPickup] = useState(30)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState<{ orderNo: number; total: number } | null>(null)

  const closed = !openState.open || openState.lastOrderPassed

  const lines = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => ({ item: items.find((i) => i.id === id)!, qty }))
        .filter((l) => l.item && l.qty > 0),
    [cart, items],
  )
  const total = lines.reduce((s, l) => s + Number(l.item.price) * l.qty, 0)
  const count = lines.reduce((s, l) => s + l.qty, 0)

  const add = (id: string, d: number) =>
    setCart((c) => {
      const next = Math.max(0, (c[id] ?? 0) + d)
      const copy = { ...c }
      if (next === 0) delete copy[id]
      else copy[id] = next
      return copy
    })

  async function submit() {
    setBusy(true)
    setError(null)
    try {
      if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        setError("E-mailadressen ser ikke rigtigt ud.")
        setBusy(false)
        return
      }
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: lines.map((l) => ({ id: l.item.id, qty: l.qty })),
          name,
          phone,
          email: email.trim(),
          pickupMinutes: pickup,
        }),
      })
      const data = await res.json()
      if (!data.ok) {
        setError(data.error ?? "Noget gik galt.")
        return
      }
      setDone({ orderNo: data.orderNo, total: data.total })
      setCart({})
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch {
      setError("Kunne ikke få forbindelse. Prøv igen, eller ring til os.")
    } finally {
      setBusy(false)
    }
  }

  if (done) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <FishMark draw className="w-28 h-14 mx-auto text-gold mb-10" strokeWidth={18} />
        <p className="ji-eyebrow text-white/70">Tak for din bestilling</p>
        <h2 className="ji-display text-[clamp(2rem,6vw,3.2rem)] mt-4">Ordre #{done.orderNo}</h2>
        <p className="ji-body text-[18px] text-white/75 mt-6 max-w-md mx-auto leading-[1.85]">
          Køkkenet er i gang. Du betaler {kr(done.total)} kr ved afhentning på {""}
          Lodsgade 10. Er der noget, ringer vi til dig.
        </p>
      </section>
    )
  }

  return (
    <>
      {closed && (
        <div role="status" className="bg-slate-ink border-b border-white/10 px-6 py-4 text-center">
          <p className="ji-eyebrow text-white/70 mb-1">
            {openState.open ? "Køkkenet lukker snart" : "Vi har lukket lige nu"}
          </p>
          <p className="ji-body text-sm text-white/75">
            {openState.open
              ? `Vi tager ikke flere online bestillinger i aften (vi lukker kl. ${openState.closesAt}).`
              : `Du kan se menukortet, men bestilling åbner igen kl. ${openState.opensAt}.`}{" "}
            <a href="tel:+4531334486" className="text-gold ji-link">Ring 31 33 44 86</a>
          </p>
        </div>
      )}

      {/* Category rail */}
      <nav aria-label="Kategorier" className="sticky top-[72px] z-30 bg-sumi/95 backdrop-blur border-b border-white/10">
        <ul className="max-w-6xl mx-auto px-6 flex gap-6 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((c) => (
            <li key={c}>
              <a
                href={`#kat-${c.replace(/\s+/g, "-")}`}
                className="ji-accent text-[12px] tracking-[0.16em] uppercase whitespace-nowrap text-white/70 hover:text-gold transition-colors"
              >
                {c}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pb-40">
        {categories.map((cat) => (
          <section key={cat} id={`kat-${cat.replace(/\s+/g, "-")}`} className="pt-14 scroll-mt-[9rem]">
            <h2 className="ji-display text-[clamp(1.5rem,3.5vw,2.2rem)] pb-4 border-b border-white/15">
              {cat}
            </h2>
            <ul>
              {items
                .filter((i) => i.category === cat)
                .map((i) => {
                  const qty = cart[i.id] ?? 0
                  return (
                    <li key={i.id} className="flex items-start gap-5 py-5 border-b border-white/10">
                      <div className="flex-1 min-w-0">
                        <p className="ji-body text-[17px]">{i.name}</p>
                        {i.description && (
                          <p className="ji-body text-[14px] leading-[1.7] text-white/70 mt-1">
                            {i.description}
                          </p>
                        )}
                        {!i.is_available && (
                          <p className="ji-eyebrow text-white/70 mt-2">Udsolgt</p>
                        )}
                      </div>
                      <p className="ji-display text-[19px] tabular-nums shrink-0">
                        {kr(Number(i.price))}<span className="text-xs text-white/70 ml-1">kr</span>
                      </p>
                      {i.is_available && !closed && (
                        <div className="flex items-center gap-3 shrink-0">
                          {qty > 0 && (
                            <>
                              <button
                                onClick={() => add(i.id, -1)}
                                aria-label={`Fjern én ${i.name}`}
                                className="w-11 h-11 border border-white/30 text-white hover:border-gold hover:text-gold transition-colors"
                              >
                                −
                              </button>
                              <span className="ji-accent tabular-nums w-5 text-center">{qty}</span>
                            </>
                          )}
                          <button
                            onClick={() => add(i.id, 1)}
                            aria-label={`Tilføj ${i.name}`}
                            className="w-11 h-11 border border-white/30 text-white hover:border-gold hover:text-gold transition-colors"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </li>
                  )
                })}
            </ul>
          </section>
        ))}
      </div>

      {/* Cart bar */}
      {count > 0 && !sheet && (
        <div
          className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-40"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <button
            onClick={() => setSheet(true)}
            className="w-full sm:w-auto flex items-center justify-between gap-6 bg-gold text-sumi px-6 py-4 rounded-full shadow-[0_12px_40px_-8px_rgba(193,171,127,0.55)] hover:bg-gold-lit transition-colors"
          >
            <span className="ji-accent text-[13px] tracking-[0.16em] uppercase">
              {count} {count === 1 ? "vare" : "varer"}
            </span>
            <span className="ji-display text-lg tabular-nums">
              {kr(total)}<span className="text-xs opacity-70 ml-1">kr</span>
            </span>
            <span className="ji-accent text-[13px] tracking-[0.2em] uppercase border-l border-sumi/25 pl-6">
              Gå til bestilling
            </span>
          </button>
        </div>
      )}

      {sheet && (
        <div className="fixed inset-0 z-50 bg-sumi/95 overflow-y-auto" role="dialog" aria-modal="true" aria-label="Din bestilling">
          <div className="max-w-lg mx-auto px-6 py-12">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="ji-display text-2xl">Din bestilling</h2>
              <button onClick={() => setSheet(false)} className="ji-accent text-[12px] tracking-[0.2em] uppercase text-white/70 hover:text-white">
                Luk
              </button>
            </div>

            <ul className="border-t border-white/15 mb-8">
              {lines.map((l) => (
                <li key={l.item.id} className="flex items-center gap-4 py-4 border-b border-white/10">
                  <span className="ji-body flex-1">{l.item.name}</span>
                  <button onClick={() => add(l.item.id, -1)} aria-label="Færre" className="w-10 h-10 border border-white/30 hover:border-gold hover:text-gold">−</button>
                  <span className="ji-accent tabular-nums w-5 text-center">{l.qty}</span>
                  <button onClick={() => add(l.item.id, 1)} aria-label="Flere" className="w-10 h-10 border border-white/30 hover:border-gold hover:text-gold">+</button>
                  <span className="ji-display tabular-nums w-20 text-right">{kr(Number(l.item.price) * l.qty)} kr</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-baseline mb-10">
              <span className="ji-eyebrow text-white/70">I alt</span>
              <span className="ji-display text-3xl tabular-nums">{kr(total)}<span className="text-sm text-white/70 ml-1">kr</span></span>
            </div>

            <label className="block mb-5">
              <span className="ji-eyebrow text-white/70 block mb-2">Navn</span>
              <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name"
                className="w-full bg-transparent border border-white/25 px-4 py-3 ji-body focus:border-gold outline-none" />
            </label>
            <label className="block mb-5">
              <span className="ji-eyebrow text-white/70 block mb-2">Telefon</span>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" autoComplete="tel"
                className="w-full bg-transparent border border-white/25 px-4 py-3 ji-accent tabular-nums focus:border-gold outline-none" />
            </label>

            <fieldset className="mb-8">
              <legend className="ji-eyebrow text-white/70 mb-3">Afhentning om</legend>
              <div className="flex flex-wrap gap-2">
                {[15, 30, 45, 60].map((m) => (
                  <button key={m} onClick={() => setPickup(m)}
                    className={`ji-accent text-[13px] px-5 py-3 border transition-colors ${
                      pickup === m ? "border-gold text-gold" : "border-white/25 text-white/70 hover:border-white/50"
                    }`}>
                    {m} min
                  </button>
                ))}
              </div>
            </fieldset>

            {error && (
              <p role="alert" className="ji-body text-[15px] border-l-2 border-gold pl-4 py-2 mb-6 text-white/85">
                {error}
              </p>
            )}

            <button onClick={submit} disabled={busy || closed}
              className="w-full ji-accent text-[13px] tracking-[0.22em] uppercase bg-gold text-sumi py-5 disabled:opacity-40 hover:bg-gold-lit transition-colors">
              {busy ? "Sender…" : "Send bestilling"}
            </button>
            <p className="ji-body text-[13px] text-white/70 text-center mt-4">
              Du betaler ved afhentning — kontant eller kort i butikken.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
