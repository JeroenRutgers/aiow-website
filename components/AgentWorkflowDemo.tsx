'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const demoSteps = [
  {
    label: 'Vraag',
    title: 'Nieuwe aanvraag komt binnen',
    detail: 'Website · 08:42 · onderhoudsbedrijf',
  },
  {
    label: 'Context',
    title: 'Agent leest klant en dossier',
    detail: '3 bronnen gecontroleerd · 1 vraag ontbreekt',
  },
  {
    label: 'Concept',
    title: 'Antwoord en taak staan klaar',
    detail: 'Samenvatting · vervolgvraag · eigenaar',
  },
  {
    label: 'Akkoord',
    title: 'Mens controleert de externe actie',
    detail: 'Verzending blijft geblokkeerd tot goedkeuring',
  },
]

export default function AgentWorkflowDemo() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return

    const timer = window.setInterval(() => {
      setActive((current) => {
        if (current >= demoSteps.length - 1) {
          window.clearInterval(timer)
          setPlaying(false)
          return current
        }
        return current + 1
      })
    }, 950)

    return () => window.clearInterval(timer)
  }, [playing])

  function startDemo() {
    setActive(0)
    setPlaying(true)
  }

  return (
    <div className="agent-demo" aria-label="Interactieve demonstratie van een AI-workflow">
      <div className="agent-demo__topbar">
        <div>
          <p className="agent-demo__eyebrow">AIOW workflow · voorbeelddata</p>
          <p className="agent-demo__title">Leadopvolging met menselijke controle</p>
        </div>
        <span className="agent-demo__status">
          <span aria-hidden="true" /> gecontroleerd
        </span>
      </div>

      <div className="agent-demo__grid">
        {demoSteps.map((step, index) => {
          const state = index < active ? 'done' : index === active ? 'active' : 'pending'
          return (
            <button
              key={step.label}
              type="button"
              className={`agent-demo__step agent-demo__step--${state}`}
              onClick={() => {
                setPlaying(false)
                setActive(index)
              }}
              aria-pressed={index === active}
            >
              <span className="agent-demo__index">0{index + 1}</span>
              <span className="agent-demo__label">{step.label}</span>
              <strong>{step.title}</strong>
              <small>{step.detail}</small>
            </button>
          )
        })}
      </div>

      <div className="agent-demo__footer">
        <p>
          <span className="agent-demo__pulse" aria-hidden="true" />
          {active === demoSteps.length - 1
            ? 'Klaar voor besluit. Er is nog niets verzonden.'
            : `Stap ${active + 1} van ${demoSteps.length} is zichtbaar.`}
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="agent-demo__play" onClick={startDemo} disabled={playing}>
            {playing ? 'Workflow loopt…' : 'Speel workflow af'}
          </button>
          <Link href="/workflows" className="agent-demo__link">
            Bekijk alle workflows
          </Link>
        </div>
      </div>
    </div>
  )
}
