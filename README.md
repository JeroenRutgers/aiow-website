# AIOW.io

Publieke AIOW-website voor praktische AI-diensten, workflowvoorbeelden, AI-lessen en een evidence-first commerciële funnel.

## Productmodel

1. **Gratis kennisbank** voor vindbaarheid en vertrouwen.
2. **Gratis Workflow Scan** zonder persoonsgegevens of verzending.
3. **AI Workflow Lab** voor €950 excl. btw.
4. **AI Intake & Blueprint** voor €2.950 excl. btw.
5. **AI Bootcamp** vanaf €2.950 excl. btw.
6. **Startmodule / Pilot** voor €7.500 tot €12.500 excl. btw.
7. **Managed AI Workflow** vanaf €950 per maand excl. btw.

Het Workflow Lab wordt éénmalig volledig verrekend met een Intake & Blueprint die binnen 30 dagen start. Hardware, licenties, providergebruik en omvangrijke koppelingen staan altijd apart in de scope.

## Belangrijkste routes

- `/` · homepage en revenue narrative
- `/workflow-scan` · lokale gratis zelfscan
- `/ai-workflow-lab` · eerste betaalde product
- `/diensten` · volledige commerciële ladder
- `/workflows` · filterbare workflowbibliotheek
- `/kennisbank` · lessen en leerpaden
- `/kennisbank/[slug]` · statische lespagina's met structured data
- `/privacy` · privacyverklaring
- `/llms.txt` · machineleesbaar overzicht

## Techniek

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vitest
- Statische contentlaag in `lib/ai-platform.ts`

## Lokaal draaien

```bash
npm ci
npm run dev
```

De standaard development-URL is `http://localhost:3000`.

## Verificatie

```bash
npm run verify
```

Dit draait achtereenvolgens:

1. ESLint
2. TypeScript typecheck
3. Vitest
4. Productiebouw

Aanvullend vóór productie:

- desktop- en mobiele browser-QA
- formulierlevering controleren met productievariabelen
- privacytekst controleren tegen werkelijk actieve leveranciers
- prijs- en scopeapproval door Jeroen
- stagingreview door een onafhankelijke reviewer

## Omgevingsvariabelen voor de legacy intake

De huidige intake-route ondersteunt optioneel:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `RESEND_API_KEY`

In productie geeft de route een foutmelding wanneer geen aflevermethode beschikbaar is. De gratis Workflow Scan gebruikt deze route niet en stuurt niets naar de server.

## Opslag en branches

AIOW-werk gebeurt in een eigen branch en NVMe-worktree. Productiepublicatie volgt pas na review en expliciete approval.
