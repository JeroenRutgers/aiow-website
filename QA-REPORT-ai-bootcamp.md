# QA-rapport — /ai-bootcamp (pitch-readiness)

**Doel:** beoordelen of `https://aiow-website-aiow.vercel.app/ai-bootcamp` voldoet aan de
`premium-website-quality-standard` en `website-inspiration-patterns` voor de pitch.

**Datum:** 2026-05-31

---

## Samenvatting standaard

### Premium Website Quality Standard (essentie)

1. Eerste viewport voelt premium binnen 5 sec; geen template, geen stock-AI.
2. De pagina **bewijst de claim** — als we agents zeggen, laat een workflow zien.
3. Eén primaire CTA per sectie, secundaire CTA visueel zachter, action-based copy.
4. Product-first: dienst als productmodule (naam, one-line promise, specs, CTA-paar, visueel).
5. Visuele QA is verplicht: browser load, mobiel checken, console schoon, geen horizontale overflow, geen contrast-/cropbugs.
6. Direct Nederlands, geen "AI-transformatie", "ontzorgen", "cutting-edge".
7. Specs = vertrouwen (setup-tijd, doorlooptijd, workflows, prijs).
8. Restraint in animatie; alleen 3D/motion als het bewijst of verheldert.
9. Mobile QA met echte screenshot, niet alleen DOM.
10. Done = built + opened + checked + fixed.

### Website Inspiration Patterns (essentie)

- **Remix:** "idee → werkend resultaat", momentum zichtbaar maken.
- **Lusion:** premium = craft (motion, ruimte, art direction, vlotte interacties).
- **Bruno Simon:** de site is het bewijs van de capaciteit.
- **Tesla:** product-first, focused sections, directe CTAs, specs.
- **Apple:** repeatable section-grammar, whitespace = vertrouwen.
- **PageFlows:** verkoop flows, geen features (trigger → AI → mens → output → resultaat).
- Specs = setup-tijd, workflows, tooling, approval-momenten, manuele stappen weg, prijs.
- Directe NL-copy: "minder handmatig overtypen", "klantvraag → offerteconcept in 30 sec".

---

## QA tegen live URL — bevindingen

URL onder test: `https://aiow-website-aiow.vercel.app/ai-bootcamp`
Methode: Chrome MCP, headless inspectie, `getComputedStyle()` validatie tegen DOM.

| # | Criterium | Status | Bewijs / notitie |
|---|---|---|---|
| 1 | Hero ziet er premium uit binnen 5 sec | **FAIL** | Hero is **niet gecentreerd**, content tegen linkerrand geplakt. Eerste paint laat lange leegte zien voordat content tevoorschijn komt. |
| 2 | Bewijst de claim (agent/workflow visual) | **NEEDS WORK** | Geen hero proof-visual aanwezig. `AgentFlow.tsx` is wel klaargezet maar niet gewired. |
| 3 | Eén primaire CTA per sectie, action-based | PASS | "Plan een intake" / "Bekijk het programma" zijn juiste paren. |
| 4 | Product-first storytelling | PASS | Bootcamp als productmodule, specs in pakketten (€/dag/deelnemers/levering). |
| 5 | Desktop layout | **FAIL** | `mx-auto`/`px-*`/`gap-*`/`mb-*`/`py-*` doen **niets** door CSS cascade-bug. Sectie-grammar (whitespace, ritmes) ingestort. |
| 6 | Mobiel layout | **FAIL** | Zelfde root-cause als 5; mobile valt over op linker-rand omdat utilities niet werken. |
| 7 | Browser console schoon | PASS | 0 errors/warnings tijdens load. |
| 8 | Network: failed requests | PASS | Geen failed requests. |
| 9 | Geen horizontale overflow | PASS | `documentElement.scrollWidth ≤ window.innerWidth`. |
| 10 | Tap targets ≥ 44 px | **FAIL** | Nav-links Programma/Locaties/Pakketten/Intake gemeten op **21 px hoog**. |
| 11 | Focus-visible op alle interactieven | PASS (na fix) | Aanwezig op CTAs/inputs; nu ook toegevoegd aan nav-links. |
| 12 | Form labels gekoppeld | PASS | 8/8 inputs hebben `label[for]`. |
| 13 | Skip-link aanwezig | PASS | `<a href="#main">` zichtbaar bij focus. |
| 14 | `html[lang]` gezet | PASS | `lang="nl"`. |
| 15 | Eén H1, juiste hiërarchie | PASS | 1× H1, 5× H2, gestructureerd. |
| 16 | Reduced-motion respect | PASS | `Reveal` component checkt `useReducedMotion`; SVG-animaties in `AgentFlow` ook via `@media (prefers-reduced-motion: reduce)`. |
| 17 | Scroll-into-view animaties vlot | PASS | Framer-motion `Reveal` 200ms fade+12px lift, ease `cubic-bezier(0.22,0.61,0.36,1)`. |
| 18 | Eyebrow-contrast (`#8a6d3b` op `#faf9f5`) | PASS (knap) | ~4.55:1 — AA-normaal grens, voldoet voor 12 px uppercase. |
| 19 | Decoratief op cream-pagina passend | **FAIL** | Paars-blauwe gradient-scrollbar van globals.css verschijnt op het cream-paneel. |
| 20 | Copy is direct NL, geen filler | PASS | Geen "ontzorgen"/"transformatie"; concrete uitkomsten en tijdsindicaties. |

---

## Root cause

**Eén bug verklaart bevindingen 1, 5, 6:** `app/globals.css` had

```css
* { margin: 0; padding: 0; box-sizing: border-box; }
```

als **unlayered** regel direct na `@import "tailwindcss"`. Tailwind v4 wikkelt alle utilities in
`@layer utilities`, en CSS Cascade Layers stellen dat **unlayered regels van layered regels winnen**,
ongeacht specificity. Resultaat: elke margin/padding-utility (`mx-auto`, `px-5`, `mb-6`, `gap-*`,
`py-20`, `pt-16` …) werd geneutraliseerd.

Verificatie via probe in de live pagina:

```js
const p=document.createElement('div'); p.className='mx-auto px-6 mb-6'; document.body.appendChild(p);
getComputedStyle(p); // {marginLeft:'0px', marginRight:'0px', paddingLeft:'0px', marginBottom:'0px'}
```

Dit verklaart ook waarom de homepage (`/`) op dezelfde deploy een leeg donker scherm liet zien.

---

## Fixes toegepast in `~/.openclaw/workspace/projects/aiow-website/`

| Bestand | Wijziging |
|---|---|
| `app/globals.css` | Reset in `@layer base` gezet, `margin:0; padding:0` verwijderd (Tailwind preflight regelt dit). Decoratieve gradient-scrollbar gescoped op `:root:not([data-theme="light"])`. |
| `app/ai-bootcamp/page.tsx` | `<script>` toegevoegd die `data-theme=light` op `<html>` zet → cream pagina krijgt native scrollbar. Desktop nav-links: `min-h-[44px] inline-flex items-center px-3` + focus-visible outline. |

Lokale `tsc --noEmit`: groen. `next build` lokaal niet mogelijk (sandbox kan SWC-binary niet ophalen).

---

## Wat nog niet gedaan / aanbevelingen voor pitch

1. **AgentFlow proof-visual wiren in hero** — `AgentFlow.tsx` staat klaar in `app/ai-bootcamp/_components/` maar wordt nog niet gerenderd. Voor de pitch is dit dé claim-bewijs-visual (Tesla/Bruno-principe). Voorstel: 2-koloms hero op `lg+`, AgentFlow rechts.
2. **Hero subline scherper** — overweeg Remix-frame: "Eén werkdag scherp. Twee weken werkende flow." (matcht time-to-value uit Bootcamp + Sprint pakket).
3. **Live verificatie** — kan pas na deploy. Vooral mobile (393 px) en de cascade-fix zelf moeten met echte screenshot getoetst.

---

## Verzendinstructie

Sandbox heeft geen GitHub-credentials, dus geen autonome push mogelijk. In Terminal:

```bash
cd ~/.openclaw/workspace/projects/aiow-website
rm -f .git/index.lock .git/HEAD.lock
git add app/globals.css app/ai-bootcamp/page.tsx
git commit -m "fix(ai-bootcamp): repair Tailwind cascade, nav tap-targets, light-theme scrollbar"
git push origin main
```

Vercel deployt automatisch.

Optioneel — voor de proof-visual:

```bash
git add app/ai-bootcamp/_components/AgentFlow.tsx
# wire <AgentFlow /> in hero, dan committen
```

---

## Eindstatus

Pitch-ready: **nee, nog niet** — fixes zijn toegepast in de codebase maar niet gedeployd. Na push +
Vercel auto-deploy moet de live URL nogmaals visueel gecheckt: hero centered, sectie-ritme intact,
tap-targets, mobiel.
