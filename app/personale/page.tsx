"use client"
import { useEffect, useState, useCallback } from "react"
import { supabase } from "@/lib/supabase"
import { kr } from "@/lib/site"

type Order = {
  id: string
  order_no: number
  customer_name: string
  customer_phone: string
  items: { name: string; qty: number; price: number }[]
  total_price: number
  pickup_minutes: number | null
  created_at: string
}

const since = (iso: string) => Math.floor((Date.now() - new Date(iso).getTime()) / 60000)

export default function KitchenPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [tick, setTick] = useState(0)
  const [offline, setOffline] = useState(false)

  const load = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("status", "pending")
        .order("created_at")
      if (error) throw error
      setOrders((data ?? []) as Order[])
      setOffline(false)
    } catch {
      // Silence looks identical to "no orders" — the most dangerous confusion
      // in a kitchen, so failure has to be loud.
      setOffline(true)
    }
  }, [])

  useEffect(() => {
    load()
    const poll = setInterval(load, 10000)
    const clock = setInterval(() => setTick((t) => t + 1), 30000)
    return () => { clearInterval(poll); clearInterval(clock) }
  }, [load])

  async function complete(id: string) {
    setOrders((o) => o.filter((x) => x.id !== id))
    await supabase.from("orders").update({ status: "completed" }).eq("id", id)
    load()
  }

  return (
    <div className="min-h-[100svh] bg-sumi text-white p-5">
      <header className="flex items-baseline justify-between mb-6">
        <h1 className="ji-display text-2xl">Køkken</h1>
        <div className="flex items-center gap-5">
          <span className="ji-accent text-sm text-white/70 tabular-nums">
            {orders.length} aktive
          </span>
          <button
            onClick={async () => { await fetch("/api/auth", { method: "DELETE" }); location.href = "/" }}
            className="ji-accent text-[12px] tracking-[0.16em] uppercase text-white/60 hover:text-gold transition-colors"
          >
            Log ud
          </button>
        </div>
      </header>

      {offline && (
        <div role="alert" className="mb-6 border-2 border-gold bg-gold/10 px-5 py-4">
          <p className="ji-accent text-sm font-medium">
            Forbindelse afbrudt — der kan komme ordrer, som ikke vises. Tjek nettet.
          </p>
        </div>
      )}

      {orders.length === 0 && !offline && (
        <p className="ji-body text-white/70 mt-20 text-center text-lg">Ingen ordrer lige nu.</p>
      )}

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map((o) => {
          const mins = since(o.created_at)
          const late = o.pickup_minutes ? mins > o.pickup_minutes : mins > 30
          return (
            <li key={o.id} className={`border-2 p-5 ${late ? "border-gold" : "border-white/20"}`} data-tick={tick}>
              <div className="flex items-baseline justify-between mb-3">
                <span className="ji-display text-3xl tabular-nums">#{o.order_no}</span>
                <span className={`ji-accent text-sm tabular-nums ${late ? "text-gold" : "text-white/70"}`}>
                  {mins} min
                </span>
              </div>
              <p className="ji-body text-lg">{o.customer_name}</p>
              <a href={`tel:${o.customer_phone}`} className="ji-accent text-sm text-white/70 tabular-nums">
                {o.customer_phone}
              </a>
              {o.pickup_minutes ? (
                <p className="ji-accent text-sm text-white/70 mt-1">Ønsket afhentning: {o.pickup_minutes} min</p>
              ) : null}

              <ul className="my-4 border-t border-white/15 pt-3">
                {o.items?.map((it, k) => (
                  <li key={k} className="flex justify-between py-1.5 ji-body">
                    <span><span className="tabular-nums text-gold">{it.qty}×</span> {it.name}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="ji-display text-xl tabular-nums">{kr(Number(o.total_price))} kr</span>
                <button
                  onClick={() => complete(o.id)}
                  className="ji-accent text-[13px] tracking-[0.18em] uppercase bg-gold text-sumi px-6 py-4"
                >
                  Færdig
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
