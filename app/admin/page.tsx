"use client"
import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { supabase, type MenuItem } from "@/lib/supabase"
import { kr } from "@/lib/site"

type Order = {
  id: string
  order_no: number
  customer_name: string
  customer_phone: string
  items: { name: string; qty: number; price: number }[]
  total_price: number
  status: string
  created_at: string
}

export default function AdminPage() {
  const [tab, setTab] = useState<"salg" | "menu">("salg")
  const [orders, setOrders] = useState<Order[]>([])
  const [items, setItems] = useState<MenuItem[]>([])
  const [error, setError] = useState(false)

  const load = useCallback(async () => {
    try {
      const [o, m] = await Promise.all([
        supabase.from("orders").select("*").order("created_at", { ascending: false }).limit(200),
        supabase.from("menu_items").select("*").order("category").order("name"),
      ])
      if (o.error || m.error) throw new Error()
      setOrders((o.data ?? []) as Order[])
      setItems((m.data ?? []) as MenuItem[])
      setError(false)
    } catch {
      setError(true)
    }
  }, [])

  useEffect(() => { load() }, [load])

  async function toggle(item: MenuItem) {
    setItems((list) => list.map((i) => (i.id === item.id ? { ...i, is_available: !i.is_available } : i)))
    await supabase.from("menu_items").update({ is_available: !item.is_available }).eq("id", item.id)
  }

  const today = new Date().toDateString()
  const todays = orders.filter((o) => new Date(o.created_at).toDateString() === today)
  const revenue = todays
    .filter((o) => o.status === "completed")
    .reduce((s, o) => s + Number(o.total_price), 0)

  return (
    <div className="min-h-[100svh] bg-sumi text-white">
      <header className="border-b border-gold/25 px-5 py-4 flex items-center justify-between gap-4">
        <h1 className="ji-display text-2xl">Admin</h1>
        <div className="flex items-center gap-5">
          <Link href="/personale" className="ji-accent text-[12px] tracking-[0.16em] uppercase text-white/70 hover:text-gold">
            Køkken
          </Link>
          <button
            onClick={async () => { await fetch("/api/auth", { method: "DELETE" }); location.href = "/" }}
            className="ji-accent text-[12px] tracking-[0.16em] uppercase text-white/60 hover:text-gold"
          >
            Log ud
          </button>
        </div>
      </header>

      <nav className="flex border-b border-white/10">
        {(["salg", "menu"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-4 ji-accent text-[13px] tracking-[0.18em] uppercase border-b-2 transition-colors ${
              tab === t ? "text-gold border-gold" : "text-white/60 border-transparent hover:text-white"
            }`}
          >
            {t === "salg" ? "Salg" : "Menu"}
          </button>
        ))}
      </nav>

      {error && (
        <p role="alert" className="m-5 border-2 border-gold bg-gold/10 px-5 py-4 ji-accent text-sm">
          Kunne ikke hente data. Tjek forbindelsen.
        </p>
      )}

      {tab === "salg" && (
        <section className="p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/15 border border-white/15 mb-8">
            {[
              ["Ordrer i dag", String(todays.length)],
              ["Omsætning i dag", `${kr(revenue)} kr`],
              ["Aktive nu", String(orders.filter((o) => o.status === "pending").length)],
            ].map(([label, value]) => (
              <div key={label} className="bg-sumi p-5">
                <p className="ji-eyebrow text-white/70">{label}</p>
                <p className="ji-display text-3xl mt-3 tabular-nums">{value}</p>
              </div>
            ))}
          </div>

          <ul className="border-t border-white/15">
            {orders.slice(0, 50).map((o) => (
              <li key={o.id} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 border-b border-white/10">
                <span className="ji-display text-lg tabular-nums w-14">#{o.order_no}</span>
                <span className="ji-body flex-1 min-w-[8rem]">{o.customer_name}</span>
                <span className="ji-accent text-xs text-white/60 tabular-nums">
                  {new Date(o.created_at).toLocaleString("da-DK", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}
                </span>
                <span className={`ji-accent text-[11px] tracking-[0.16em] uppercase ${o.status === "completed" ? "text-white/60" : "text-gold"}`}>
                  {o.status === "completed" ? "Færdig" : "Aktiv"}
                </span>
                <span className="ji-display tabular-nums w-24 text-right">{kr(Number(o.total_price))} kr</span>
              </li>
            ))}
          </ul>
          {orders.length === 0 && !error && (
            <p className="ji-body text-white/70 text-center py-16">Ingen ordrer endnu.</p>
          )}
        </section>
      )}

      {tab === "menu" && (
        <section className="p-5">
          <p className="ji-body text-sm text-white/70 mb-6">
            Slå en vare fra, når den er udsolgt — den forsvinder straks fra bestillingssiden.
          </p>
          <ul className="border-t border-white/15">
            {items.map((i) => (
              <li key={i.id} className="flex items-center gap-4 py-3 border-b border-white/10">
                <span className="ji-accent text-[11px] text-white/50 w-28 shrink-0 truncate">{i.category}</span>
                <span className={`ji-body flex-1 ${i.is_available ? "" : "text-white/40 line-through"}`}>{i.name}</span>
                <span className="ji-display tabular-nums w-20 text-right">{kr(Number(i.price))} kr</span>
                <button
                  onClick={() => toggle(i)}
                  className={`ji-accent text-[11px] tracking-[0.14em] uppercase px-4 py-3 border transition-colors ${
                    i.is_available ? "border-white/25 text-white/70 hover:border-gold hover:text-gold" : "border-gold text-gold"
                  }`}
                >
                  {i.is_available ? "Slå fra" : "Udsolgt"}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
