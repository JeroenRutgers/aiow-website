'use client'

import { useState, type FormEvent } from 'react'

const MAIL = 'jeroen@aiow.io'

type FieldKey =
  | 'bedrijf'
  | 'naam'
  | 'email'
  | 'tel'
  | 'deelnemers'
  | 'periode'
  | 'locatie'
  | 'doel'

const FIELDS: {
  id: FieldKey
  label: string
  type: 'text' | 'email' | 'tel' | 'number'
  placeholder?: string
  required?: boolean
  autoComplete?: string
}[] = [
  {
    id: 'bedrijf',
    label: 'Bedrijfsnaam',
    type: 'text',
    placeholder: 'Bv. AIOW B.V.',
    required: true,
    autoComplete: 'organization',
  },
  {
    id: 'naam',
    label: 'Naam contactpersoon',
    type: 'text',
    placeholder: 'Voor- en achternaam',
    required: true,
    autoComplete: 'name',
  },
  {
    id: 'email',
    label: 'E-mail',
    type: 'email',
    placeholder: 'naam@bedrijf.nl',
    required: true,
    autoComplete: 'email',
  },
  {
    id: 'tel',
    label: 'Telefoon',
    type: 'tel',
    placeholder: '+31 6 …',
    autoComplete: 'tel',
  },
  {
    id: 'deelnemers',
    label: 'Aantal deelnemers',
    type: 'number',
    placeholder: '6 — 16',
  },
  {
    id: 'periode',
    label: 'Gewenste periode',
    type: 'text',
    placeholder: 'Bv. eerste twee weken van juli',
  },
]

const LOC_OPTIONS = [
  'Op de boot (Amsterdam)',
  'Bij AIOW op kantoor',
  'Bij ons op locatie',
  'Nog niet zeker',
]

export default function IntakeForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({})

  function validate(data: Record<FieldKey, string>): Partial<Record<FieldKey, string>> {
    const e: Partial<Record<FieldKey, string>> = {}
    if (!data.bedrijf?.trim()) e.bedrijf = 'Vul uw bedrijfsnaam in.'
    if (!data.naam?.trim()) e.naam = 'Vul uw naam in.'
    if (!data.email?.trim()) {
      e.email = 'Vul een e-mailadres in.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      e.email = 'Controleer het e-mailadres.'
    }
    return e
  }

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const fd = new FormData(ev.currentTarget)
    const data: Record<FieldKey, string> = {
      bedrijf: String(fd.get('bedrijf') ?? ''),
      naam: String(fd.get('naam') ?? ''),
      email: String(fd.get('email') ?? ''),
      tel: String(fd.get('tel') ?? ''),
      deelnemers: String(fd.get('deelnemers') ?? ''),
      periode: String(fd.get('periode') ?? ''),
      locatie: String(fd.get('locatie') ?? ''),
      doel: String(fd.get('doel') ?? ''),
    }

    const v = validate(data)
    setErrors(v)
    if (Object.keys(v).length > 0) {
      return
    }

    const body = [
      'Hoi Jeroen,',
      '',
      'We willen graag een AI Bootcamp bespreken.',
      '',
      `Bedrijf:           ${data.bedrijf}`,
      `Contactpersoon:    ${data.naam}`,
      `E-mail:            ${data.email}`,
      `Telefoon:          ${data.tel}`,
      `Aantal deelnemers: ${data.deelnemers}`,
      `Gewenste periode:  ${data.periode}`,
      `Voorkeur locatie:  ${data.locatie}`,
      '',
      'Wat moet de bootcamp opleveren:',
      data.doel || '(open gelaten)',
      '',
      'Groet,',
      `${data.naam}`,
    ].join('\n')

    const href = `mailto:${MAIL}?subject=${encodeURIComponent(
      'Aanvraag AI Bootcamp'
    )}&body=${encodeURIComponent(body)}`

    // Try to launch the mail client. We still confirm in-UI so the
    // user always has clear feedback, even if the mail handler is blocked.
    if (typeof window !== 'undefined') {
      window.location.href = href
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg border border-[color:var(--rule)] bg-[color:var(--cream)] p-8 sm:p-10"
        style={{ fontFamily: 'var(--font-ui)' }}
        role="status"
        aria-live="polite"
      >
        <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--copper)]">
          Aanvraag klaar
        </p>
        <h3
          className="mt-3 text-[24px] font-medium tracking-tight"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Bedankt. Uw e-mailprogramma opent met de aanvraag.
        </h3>
        <p
          className="mt-3 text-[15px] leading-[1.65] text-[color:var(--muted)]"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Verstuur de e-mail. Jeroen reageert doorgaans binnen één werkdag. Lukt
          het openen niet, gebruik dan WhatsApp of bel direct.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://wa.me/31621898039"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[color:var(--ink)] px-5 text-[14px] font-medium text-[color:var(--cream)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--slate)]"
          >
            WhatsApp Jeroen
          </a>
          <a
            href="tel:+31621898039"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[color:var(--rule)] px-5 text-[14px] font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--ink)]/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--slate)]"
          >
            Bel +31 6 21898039
          </a>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-[color:var(--rule)] bg-[color:var(--cream)] p-7 sm:p-9"
      aria-label="Intake-formulier AI Bootcamp"
      style={{ fontFamily: 'var(--font-ui)' }}
    >
      <div className="mb-7 flex items-end justify-between border-b border-[color:var(--rule-soft)] pb-5">
        <h3
          className="text-[22px] font-medium tracking-tight"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Intakegegevens
        </h3>
        <span className="text-[12px] uppercase tracking-[0.14em] text-[color:var(--slate)]">
          ± 2 minuten
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((f) => {
          const err = errors[f.id]
          return (
            <label key={f.id} htmlFor={f.id} className="block">
              <span className="mb-2 block text-[13px] text-[color:var(--muted)]">
                {f.label}
                {f.required && (
                  <span aria-hidden="true" className="ml-1 text-[color:var(--copper)]">
                    *
                  </span>
                )}
              </span>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                placeholder={f.placeholder}
                autoComplete={f.autoComplete}
                required={f.required}
                aria-required={f.required ? 'true' : 'false'}
                aria-invalid={err ? 'true' : 'false'}
                aria-describedby={err ? `${f.id}-err` : undefined}
                className={`block min-h-[44px] w-full rounded-md border bg-[color:var(--cream)] px-3 text-[15px] text-[color:var(--ink)] placeholder:text-[color:var(--ink)]/30 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-[color:var(--slate)] ${
                  err
                    ? 'border-[color:var(--copper)]'
                    : 'border-[color:var(--rule)] focus:border-[color:var(--slate)]'
                }`}
              />
              {err && (
                <span
                  id={`${f.id}-err`}
                  className="mt-1 block text-[12px] text-[color:var(--copper)]"
                >
                  {err}
                </span>
              )}
            </label>
          )
        })}

        <label htmlFor="locatie" className="block sm:col-span-2">
          <span className="mb-2 block text-[13px] text-[color:var(--muted)]">
            Voorkeur locatie
          </span>
          <select
            id="locatie"
            name="locatie"
            defaultValue=""
            className="block min-h-[44px] w-full rounded-md border border-[color:var(--rule)] bg-[color:var(--cream)] px-3 text-[15px] text-[color:var(--ink)] focus:border-[color:var(--slate)] focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-[color:var(--slate)]"
          >
            <option value="" disabled>
              Maak een keuze
            </option>
            {LOC_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>

        <label htmlFor="doel" className="block sm:col-span-2">
          <span className="mb-2 block text-[13px] text-[color:var(--muted)]">
            Wat moet de bootcamp opleveren?
          </span>
          <textarea
            id="doel"
            name="doel"
            rows={4}
            className="block w-full rounded-md border border-[color:var(--rule)] bg-[color:var(--cream)] px-3 py-3 text-[15px] text-[color:var(--ink)] placeholder:text-[color:var(--ink)]/30 focus:border-[color:var(--slate)] focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-[color:var(--slate)]"
            placeholder="Bijvoorbeeld: kansen in kaart, sales versnellen, administratie automatiseren, eerste agent-roadmap."
          />
        </label>
      </div>

      <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="max-w-md text-[12px] leading-[1.55] text-[color:var(--muted)]">
          We sturen niets door, slaan niets op buiten uw mailprogramma. De aanvraag
          komt direct bij Jeroen binnen.
        </p>
        <button
          type="submit"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[color:var(--ink)] px-6 text-[14px] font-medium text-[color:var(--cream)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--slate)]"
        >
          Verstuur aanvraag
        </button>
      </div>
    </form>
  )
}
