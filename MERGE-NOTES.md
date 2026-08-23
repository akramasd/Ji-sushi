# Hvad der er lagt ind

Designsystemet og takeaway-systemet er sat ind i **jeres** repo. Jeres sider,
tekster og billeder er beholdt — der er ikke slettet indhold.

## Design

Farverne er aflæst fra brand-arket og lagt ind som Tailwind v4-tokens i
`app/globals.css` (`@theme`). Jeres 566 hårdkodede farveværdier er mappet over:

| Før | Efter | Rolle |
|---|---|---|
| `#ff8c00` | `#C1AB7F` gold | accent |
| `#000000` | `#0E0F11` sumi | bund |
| `#323232` | `#313A40` slate | paneler |
| `#d9d9d9` | `#C9C9CA` | sekundær tekst |

**Guldreglen (målt, ikke skønnet):** guld er 8,58:1 på mørk bund — fint som
tekst. På creme er det 1,81:1 — dér må det **kun** være ornament. Alle
tekstfarver er tjekket mod WCAG AA.

Typografi i tre niveauer: **Cormorant Garamond** (overskrifter),
**EB Garamond** (brødtekst), **Inter** (tal, telefon, mikrotekst).
**Shippori Mincho** er kun til kanji — de latinske serifer har ingen
CJK-glyffer, så uden den ville 食べ放題 stå som tomme kasser.

`components/brand/` rummer seigaiha-mønsteret, bølge-dividers, de to lockups
og crest'en. `components/fish-mark.tsx` er logoet tegnet om til SVG direkte
fra det originale PNG — stregbredde, halespidser, ryggens top og øjet er målt.

## Takeaway-systemet

| Rute | Hvad |
|---|---|
| `/takeaway` | **Ny:** live bestilling — kurv, checkout, betal ved afhentning |
| `/menukort` | **Ny:** alle 18 menukort-billeder (flyttet hertil fra den gamle `/takeaway`) |
| `/kitchen` | **Ny:** køkkenskærm — nye ordrer, minuttæller, "Færdig" |
| `/api/checkout` | **Ny:** opretter ordren |

**Priser valideres server-side.** Klientens priser bruges aldrig — ellers kan
hvem som helst sende en sushibox til 1 kr. Udsolgte varer afvises, og der
tages ikke imod ordrer uden for åbningstid (`lib/opening-hours.ts`, regnet i
`Europe/Copenhagen`, fordi serveren kører i UTC).

## Adgang for personalet

| Rute | Hvem | Kode |
|---|---|---|
| `jisushi.dk/admin` | Ejer — salg, omsætning, udsolgt-styring | admin-koden |
| `jisushi.dk/personale` | Køkkenet — nye ordrer, minuttæller, "Færdig" | personale-koden |
| `jisushi.dk/login` | Fælles login | — |

**"Personale"-linket i footeren er fjernet.** Siderne findes kun for dem, der
kender adressen.

### Sådan er koderne gemt

Koderne står **kun** i `.env.local`, som ligger i `.gitignore` og derfor aldrig
kommer med i repoet. De har bevidst **ikke** `NEXT_PUBLIC_`-prefix — variabler
med det prefix lægges ind i browserens JavaScript, hvor hvem som helst kan læse
dem i udviklerværktøjerne.

Tre ting sikrer, at koden ikke kan ses eller omgås:

1. **Koden tjekkes kun på serveren** (`/api/auth`). Browseren får aldrig at vide,
   hvad den rigtige kode er — kun ja eller nej.
2. **Cookien indeholder ikke koden**, men en signeret rolle. Man kan altså ikke
   bare skrive `rolle=admin` i sin egen browser.
3. **Adgangen tjekkes i `middleware.ts`**, altså *før* siden overhovedet
   renderes. Indholdet sendes aldrig til en uautoriseret browser.

Admin-koden åbner begge områder; personale-koden åbner kun `/personale`.
Efter 5 forkerte forsøg spærres i et minut.

⚠️ **Sæt de samme værdier i Vercel → Settings → Environment Variables**
(`ADMIN_PIN`, `STAFF_PIN`, `AUTH_SECRET`), ellers virker login ikke i produktion.
En 4-cifret kode er en dørkode, ikke rigtig sikkerhed — den holder gæster ude,
men brug ikke siderne til noget følsomt.

## Før det kan gå live

1. Kør `schema.sql` i Supabase → menuen og de 3 Super Tilbud-menuer oprettes.
2. Sæt env-variablerne (se `.env.example`) i Vercel.
3. `npm install` (der er tilføjet `@supabase/supabase-js`).
4. Kør `npm run build` én gang lokalt — den er aldrig kørt i dette miljø.
5. Vinlisten på `/vinmenu` er stadig jeres eksisterende indhold.

⚠️ **`next.config.mjs` har `typescript.ignoreBuildErrors: true`.** Buildet
lykkes altså, selv hvis der er typefejl. Det er praktisk for at komme hurtigt
ud, men det betyder også, at et grønt build ikke er nogen garanti. Overvej at
slå det fra, når der er ro på.
