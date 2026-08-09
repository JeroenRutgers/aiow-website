'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'

type ScanState = {
  process: string
  frequency: string
  repeatability: string
  sources: string
  owner: string
  risk: string
}

type Choice = { value: string; label: string; help?: string }

type ScanQuestion = {
  key: keyof ScanState
  legend: string
  choices: Choice[]
}

const initialState: ScanState = {
  process: '',
  frequency: '',
  repeatability: '',
  sources: '',
  owner: '',
  risk: '',
}

const questions: ScanQuestion[] = [
  {
    key: 'process',
    legend: 'Welk soort werk wilt u verbeteren?',
    choices: [
      { value: 'aanvragen', label: 'Aanvragen en verkoop' },
      { value: 'service', label: 'Klantvragen en service' },
      { value: 'documenten', label: 'Documenten en dossiers' },
      { value: 'planning', label: 'Planning en operatie' },
      { value: 'kennis', label: 'Kennis en interne antwoorden' },
    ],
  },
  {
    key: 'frequency',
    legend: 'Hoe vaak komt dit werk terug?',
    choices: [
      { value: 'laag', label: '1 tot 5 keer per week' },
      { value: 'middel', label: '6 tot 20 keer per week' },
      { value: 'hoog', label: 'Meer dan 20 keer per week' },
    ],
  },
  {
    key: 'repeatability',
    legend: 'Lijkt de aanpak meestal op elkaar?',
    choices: [
      { value: 'laag', label: 'Iedere keer wezenlijk anders' },
      { value: 'middel', label: 'Een vaste kern met uitzonderingen' },
      { value: 'hoog', label: 'Vrijwel altijd dezelfde stappen' },
    ],
  },
  {
    key: 'sources',
    legend: 'Hoeveel bronnen of systemen zijn nodig?',
    choices: [
      { value: 'een', label: 'Eén duidelijke bron' },
      { value: 'enkele', label: 'Twee of drie bronnen' },
      { value: 'veel', label: 'Vier of meer bronnen' },
    ],
  },
  {
    key: 'owner',
    legend: 'Is er iemand die de uitkomst kan beoordelen?',
    choices: [
      { value: 'ja', label: 'Ja, de proceseigenaar is duidelijk' },
      { value: 'nee', label: 'Nog niet' },
    ],
  },
  {
    key: 'risk',
    legend: 'Wat gebeurt er als de uitkomst niet klopt?',
    choices: [
      { value: 'intern', label: 'Alleen intern voorwerk moet worden hersteld' },
      { value: 'extern', label: 'Een klant of leverancier merkt het' },
      { value: 'hoog', label: 'Er zijn financiële, juridische of veiligheidsgevolgen' },
    ],
  },
]

const points: Record<keyof ScanState, Record<string, number>> = {
  process: { aanvragen: 2, service: 2, documenten: 2, planning: 2, kennis: 2 },
  frequency: { laag: 1, middel: 3, hoog: 5 },
  repeatability: { laag: 0, middel: 2, hoog: 4 },
  sources: { een: 1, enkele: 3, veel: 4 },
  owner: { ja: 4, nee: 0 },
  risk: { intern: 3, extern: 1, hoog: 0 },
}

function recommendation(state: ScanState, score: number) {
  if (state.owner === 'nee') {
    return {
      level: 'Eerst eigenaarschap regelen',
      title: 'Benoem wie bepaalt of de workflow goed werkt.',
      body: 'Een AI-workflow heeft een eigenaar nodig die bronnen, uitzonderingen en acceptatie kan beoordelen. Leg dat eerst vast en herhaal daarna de scan.',
      href: '/kennisbank/eerste-ai-workflow-kiezen',
      cta: 'Lees de keuzehulp',
    }
  }

  if (state.risk === 'hoog' || state.sources === 'veel') {
    return {
      level: 'Blueprint past het best',
      title: 'Breng proces, bronnen en risico’s eerst volledig in kaart.',
      body: 'Uw workflow heeft meerdere afhankelijkheden of een hoog gevolg bij fouten. Een Intake & Blueprint maakt de grens, nulmeting en pilotscope vooraf toetsbaar.',
      href: '/diensten#ai-intake-blueprint',
      cta: 'Bekijk de Blueprint',
    }
  }

  if (score >= 12) {
    return {
      level: 'Kansrijke eerste workflow',
      title: 'Dit proces is geschikt voor een live Workflow Lab.',
      body: 'De taak komt vaak terug, heeft herkenbare stappen en er is een menselijke beoordelaar. In het Lab ontleden we de flow en maken we een actiekaart voor 30 dagen.',
      href: '/ai-workflow-lab',
      cta: 'Bekijk het Workflow Lab',
    }
  }

  return {
    level: 'Begin met leren en meten',
    title: 'Maak de herhaling en pijn eerst zichtbaar.',
    body: 'Meet twee weken lang volume, wachttijd, correcties en uitzonderingen. Daarmee ziet u of automatisering waardevol is en welke stap als eerste past.',
    href: '/kennisbank/eerste-ai-workflow-kiezen',
    cta: 'Open de gratis les',
  }
}

export default function WorkflowScan() {
  const [state, setState] = useState<ScanState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const resultRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!submitted) return
    const frame = requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(frame)
  }, [submitted])

  const complete = questions.every((question) => Boolean(state[question.key]))
  const score = useMemo(
    () => questions.reduce((total, question) => total + (points[question.key][state[question.key]] ?? 0), 0),
    [state],
  )
  const result = recommendation(state, score)

  function reset() {
    setState(initialState)
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <section ref={resultRef} className="scan-result" aria-live="polite">
        <div className="scan-score" aria-label={`Workflow score ${score} van 22`}>
          <span>{score}</span>
          <small>/ 22</small>
        </div>
        <div>
          <p className="kicker">{result.level}</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-heading md:text-4xl">{result.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink/68">{result.body}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={result.href} className="button-primary">{result.cta}</Link>
            <button type="button" onClick={reset} className="button-secondary">Scan opnieuw</button>
          </div>
          <p className="mt-6 text-xs leading-5 text-ink/45">
            Deze score is een zelfdiagnose op basis van uw antwoorden. Het is een keuzehulp en geen adviesrapport of resultaatgarantie.
          </p>
        </div>
      </section>
    )
  }

  return (
    <form
      className="space-y-8"
      onSubmit={(event) => {
        event.preventDefault()
        if (complete) setSubmitted(true)
      }}
    >
      {questions.map((question, index) => (
        <fieldset key={question.key} className="scan-question">
          <legend>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {question.legend}
          </legend>
          <div className="scan-options">
            {question.choices.map((choice) => {
              const id = `${question.key}-${choice.value}`
              return (
                <label key={choice.value} htmlFor={id} className="scan-option">
                  <input
                    id={id}
                    type="radio"
                    name={question.key}
                    value={choice.value}
                    checked={state[question.key] === choice.value}
                    onChange={() => setState((current) => ({ ...current, [question.key]: choice.value }))}
                  />
                  <span>{choice.label}</span>
                </label>
              )
            })}
          </div>
        </fieldset>
      ))}

      <div className="flex flex-col items-start gap-3 border-t border-ink/10 pt-8 sm:flex-row sm:items-center">
        <button type="submit" disabled={!complete} className="button-primary disabled:cursor-not-allowed disabled:opacity-40">
          Toon mijn route
        </button>
        <p className="text-sm text-ink/50">Uw antwoorden blijven in deze browser en worden niet verzonden.</p>
      </div>
    </form>
  )
}
