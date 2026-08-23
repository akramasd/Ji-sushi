import { NextResponse } from 'next/server'
import { serviceClient } from '@/lib/supabase'
import { canAcceptTakeaway } from '@/lib/opening-hours'

type IncomingItem = { id: string; qty: number }

/**
 * Creates a takeaway order.
 *
 * Every line is re-priced server-side from the database. The client's prices
 * are never trusted — otherwise anyone can post a 1 kr sushi box.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const items: IncomingItem[] = Array.isArray(body?.items) ? body.items : []
    const name = String(body?.name ?? '').trim()
    const phone = String(body?.phone ?? '').trim()
    const pickupMinutes = Number(body?.pickupMinutes ?? 0)

    if (items.length === 0) {
      return NextResponse.json({ ok: false, error: 'Din kurv er tom.' }, { status: 400 })
    }
    if (name.length < 2) {
      return NextResponse.json({ ok: false, error: 'Skriv venligst dit navn.' }, { status: 400 })
    }
    // Danish mobile numbers are 8 digits; allow +45 and spaces.
    const digits = phone.replace(/[^\d]/g, '').replace(/^45/, '')
    if (digits.length !== 8) {
      return NextResponse.json({ ok: false, error: 'Telefonnummeret ser ikke rigtigt ud.' }, { status: 400 })
    }

    // Opening hours are checked on the server because a client clock can be
    // wrong or deliberately changed.
    const hours = canAcceptTakeaway()
    if (!hours.ok) {
      return NextResponse.json({ ok: false, error: hours.reason, closed: true }, { status: 409 })
    }

    const db = serviceClient()
    const ids = items.map((i) => i.id)
    const { data: menu, error: menuErr } = await db
      .from('menu_items')
      .select('id,name,price,is_available')
      .in('id', ids)

    if (menuErr) {
      return NextResponse.json({ ok: false, error: 'En vare findes ikke længere.' }, { status: 409 })
    }

    const soldOut = (menu ?? []).filter((m) => !m.is_available).map((m) => m.name)
    if (soldOut.length > 0) {
      return NextResponse.json(
        { ok: false, error: `Desværre udsolgt: ${soldOut.join(', ')}. Fjern dem og prøv igen.` },
        { status: 409 },
      )
    }

    const lines = items
      .map((i) => {
        const m = (menu ?? []).find((x) => x.id === i.id)
        if (!m) return null
        const qty = Math.max(1, Math.min(99, Math.floor(i.qty)))
        return { id: m.id, name: m.name, qty, price: Number(m.price), sum: Number(m.price) * qty }
      })
      .filter(Boolean) as { id: string; name: string; qty: number; price: number; sum: number }[]

    if (lines.length !== items.length) {
      return NextResponse.json({ ok: false, error: 'En vare findes ikke længere.' }, { status: 409 })
    }

    const total = lines.reduce((s, l) => s + l.sum, 0)

    const { data: order, error } = await db
      .from('orders')
      .insert({
        customer_name: name,
        customer_phone: phone,
        items: lines,
        total_price: total,
        status: 'pending',
        pickup_minutes: Number.isFinite(pickupMinutes) ? pickupMinutes : 0,
      })
      .select('id,order_no')
      .single()

    // Legacy-fallback: hvis DB'en ikke har pickup_minutes-kolonnen endnu,
    // prøv uden den i stedet for at afvise bestillingen.
    if (error && String(error.message ?? '').includes('pickup_minutes')) {
      const { data: legacy, error: legacyErr } = await db
        .from('orders')
        .insert({
          customer_name: name,
          customer_phone: phone,
          items: lines,
          total_price: total,
          status: 'pending',
        })
        .select('id,order_no')
        .single()
      if (!legacyErr) {
        return NextResponse.json({ ok: true, orderNo: legacy?.order_no, total })
      }
    }

    if (error) {
      return NextResponse.json({ ok: false, error: 'Bestillingen kunne ikke gemmes.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true, orderNo: order?.order_no, total })
  } catch {
    return NextResponse.json({ ok: false, error: 'Uventet fejl. Prøv igen.' }, { status: 500 })
  }
}
