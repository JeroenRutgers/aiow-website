'use client'

import Reveal from './Reveal'

type Step = {
  k: string
  label: string
  detail: string
  role: 'trigger' | 'ai' | 'human' | 'output'
}

const STEPS: Step[] = [
  {
    k: '01',
    label: 'Klant stuurt foto via WhatsApp',
    detail: 'Aanvraag binnen via het zakelijke nummer, met foto en korte vraag.',
    role: 'trigger',
  },
  {
    k: '02',
    label: 'AI vat samen en koppelt project',
    detail: 'Categorisatie, klantkoppeling, projectreferentie en korte samenvatting in 12 sec.',
    role: 'ai',
  },
  {
    k: '03',
    label: 'AI stelt antwoordconcept op',
    detail: 'Eerste antwoord met juiste toon, met relevante bijlage en doorlooptijd-indicatie.',
    role: 'ai',
  },
  {
    k: '04',
    label: 'Mens bekijkt en past aan',
    detail: 'Eén klik akkoord, of kleine bewerking in een paar seconden.',
    role: 'human',
  },
  {
    k: '05',
    label: 'Antwoord verzonden, taak in CRM',
    detail: 'Klant geïnformeerd, taak met deadline aangemaakt bij de juiste medewerker.',
    role: 'output',
  },
]

const METRICS: { value: string; label: string; meta: string }[] = [
  { value: '18 min', label: 'Voor', meta: 'gemiddelde tijd per inkomende vraag' },
  { value: '38 sec', label: 'Na', meta: 'inclusief mens-in-de-loop goedkeuring' },
  { value: '> 20 u', label: 'Per week', meta: 'bespaard bij ~80 vragen per week' },
]

function roleBadge(role: Step['role']) {
  if (role === 'trigger') return 'Trigger'
  if (role === 'ai') return 'AI'
  if (role === 'human') return 'Mens'
  return 'Output'
}

export default function WorkflowCase() {
  return (
    <div>
      {/* Header */}
      <Reveal>
        <div className="max-w-3xl">
          <p
            className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--copper)]"
            style={{ fontFamily: 'var(--font-ui)' }}
          >
            Workflow in beeld
          </p>
          <h2
            className="text-[32px] font-medium leading-[1.15] tracking-tight sm:text-[44px]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Eén concrete flow. Vijf stappen. Geen abstracties.
          </h2>
          <p
            className="mt-6 text-[17px] leading-[1.7] text-[color:var(--muted)] sm:text-[18px]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Dit is hoe één van de eerste flows er in de praktijk uit komt te zien.
            Tijdens de bootcamp ontwerpen we deze flow voor één van uw eigen
            processen, met uw eigen tools en data-afspraken.
          </p>
        </div>
      </Reveal>

      {/* Steps as a horizontal stations strip on desktop, vertical on mobile */}
      <Reveal delay={80}>
        <ol
          className="mt-12 grid gap-6 sm:gap-4 lg:grid-cols-5"
          style={{ fontFamily: 'var(--font-ui)' }}
          aria-label="Stappen in de voorbeeld-workflow"
        >
          {STEPS.map((s) => (
            <li
              key={s.k}
              className="relative rounded-lg border border-[color:var(--rule)] bg-[color:var(--cream)] p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--slate)]">
                  Stap {s.k}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] ${
                    s.role === 'ai'
                      ? 'bg-[color:var(--ink)] text-[color:var(--cream)]'
                      : s.role === 'human'
                      ? 'border border-[color:var(--copper)] text-[color:var(--copper)]'
                      : 'border border-[color:var(--rule)] text-[color:var(--muted)]'
                  }`}
                >
                  {roleBadge(s.role)}
                </span>
              </div>
              <p
                className="mt-3 text-[16px] font-medium leading-[1.35] text-[color:var(--ink)]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {s.label}
              </p>
              <p className="mt-2 text-[13px] leading-[1.55] text-[color:var(--muted)]">
                {s.detail}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Metrics row */}
      <Reveal delay={140}>
        <dl
          className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[color:var(--rule)] bg-[color:var(--rule-soft)] sm:grid-cols-3"
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col bg-[color:var(--cream)] px-6 py-6">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--slate)]">
                {m.label}
              </span>
              <span
                className="mt-2 text-[30px] font-medium tracking-tight text-[color:var(--ink)] sm:text-[34px]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {m.value}
              </span>
              <span className="mt-1 text-[12px] leading-[1.5] text-[color:var(--muted)]">
                {m.meta}
              </span>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Caveat */}
      <Reveal delay={180}>
        <p
          className="mt-6 text-[12px] leading-[1.6] text-[color:var(--muted)] sm:max-w-2xl"
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          Cijfers zijn een representatief voorbeeld uit een vergelijkbare opdracht;
          uw eigen gemiddeldes leggen we tijdens de bootcamp samen vast.
        </p>
      </Reveal>
    </div>
  )
}
