import { describe, expect, it } from 'vitest'

import { parseIntakePayload } from '../lib/intake-validation'

const validPayload = {
  name: 'Test Gebruiker',
  email: 'TEST@EXAMPLE.COM',
  answers: {
    branche: 'Bouw / Vastgoed',
    pijnpunt: 'Offertes en intake',
    teamgrootte: '5-15',
    timing: 'Dit kwartaal',
  },
}

describe('intake payload validation', () => {
  it('accepts and normalizes a valid payload', () => {
    const result = parseIntakePayload(validPayload)
    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.value.email).toBe('test@example.com')
      expect(result.value.answers.branche).toBe('Bouw / Vastgoed')
    }
  })

  it('rejects values outside the allowlists', () => {
    const result = parseIntakePayload({
      ...validPayload,
      answers: { ...validPayload.answers, branche: '<script>alert(1)</script>' },
    })
    expect(result).toEqual({ ok: false, error: 'Kies een geldige branche.' })
  })

  it('rejects malformed email addresses', () => {
    const result = parseIntakePayload({ ...validPayload, email: 'invalid' })
    expect(result).toEqual({ ok: false, error: 'Vul een geldig e-mailadres in.' })
  })

  it('silently accepts a filled honeypot so bots receive no signal', () => {
    const result = parseIntakePayload({ website: 'https://spam.example' })
    expect(result.ok).toBe(true)
    if (result.ok) expect(result.value.website).toBe('https://spam.example')
  })
})
