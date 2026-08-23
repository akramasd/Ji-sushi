# Produktions-tjekliste — Ji Sushi

## 1. Supabase database-migration (VIGTIGT)

Kør denne SQL én gang i Supabase Dashboard → SQL Editor, så `pickup_minutes` findes på orders:

```sql
ALTER TABLE orders ADD COLUMN IF NOT EXISTS pickup_minutes INT;
```

Checkout har et legacy-fallback, så ordrer også gemmes uden kolonnen — men kør migrationen alligevel for fuld funktionalitet.

## 2. Miljøvariabler i Netlify (Site settings → Environment variables)

Påkrævet:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_PIN` — kode til /admin (skift fra standard)
- `STAFF_PIN` — kode til /personale
- `AUTH_SECRET` — tilfældig lang streng (fx `openssl rand -hex 32`)

Valgfri:
- `NEXT_PUBLIC_SITE_URL` — din endelige URL

Sæt ALDRIG `ORDER_ANYTIME` i produktion — den slår åbningstiderne fra.

## 3. Deploy på Netlify

Next.js App Router understøttes automatisk af Netlify (@netlify/plugin-nextjs).
Byg-indstillinger: build command `pnpm build`, publish `.next`.
Eller link GitHub-repoet og lad Netlify deploye automatisk ved push.

## 4. DNS

Peg dit domæne på Netlify (A-record → Netlify, eller CNAME til dit-site.netlify.app).
Tilføj domænet under Domain management, og lad Netlify udstede SSL-certifikat.

## 5. Efter deploy — test

- [ ] /takeaway: læg varer i kurven og gennemfør en bestilling → tjek at ordren dukker op i Supabase `orders` og i /admin
- [ ] /admin: log ind med ADMIN_PIN, slå en ret fra (Udsolgt) og tjek at den vises som udsolgt i /takeaway
- [ ] Åbningstider: bestilling burde blive afvist uden for åbningstid (ORDER_ANYTIME er slået fra)
- [ ] Kontakt/booking-sider: billeder vises
