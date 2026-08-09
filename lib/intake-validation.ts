import {
  BRANCHES,
  PIJNPUNTEN,
  TEAMGROOTTES,
  TIMINGS,
  type IntakeAnswers,
} from './intake-advies'

type IntakeContact = {
  name: string
  email: string
  website: string
  answers: IntakeAnswers
}

type ParseResult =
  | { ok: true; value: IntakeContact }
  | { ok: false; error: string }

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function cleanText(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function inList(value: string, values: readonly string[]) {
  return values.includes(value)
}

export function parseIntakePayload(payload: unknown): ParseResult {
  if (!isRecord(payload)) return { ok: false, error: 'Ongeldig verzoek.' }

  const name = cleanText(payload.name, 80)
  const email = cleanText(payload.email, 254).toLowerCase()
  const website = cleanText(payload.website, 200)
  const answersRaw = isRecord(payload.answers) ? payload.answers : {}

  const answers: IntakeAnswers = {
    branche: cleanText(answersRaw.branche, 60),
    pijnpunt: cleanText(answersRaw.pijnpunt, 80),
    teamgrootte: cleanText(answersRaw.teamgrootte, 20),
    timing: cleanText(answersRaw.timing, 40),
  }

  if (website) {
    return { ok: true, value: { name, email, website, answers } }
  }

  if (name.length < 2) return { ok: false, error: 'Vul uw naam in.' }
  if (!/^\S+@\S+\.\S+$/.test(email)) return { ok: false, error: 'Vul een geldig e-mailadres in.' }
  if (!inList(answers.branche, BRANCHES)) return { ok: false, error: 'Kies een geldige branche.' }
  if (!inList(answers.pijnpunt, PIJNPUNTEN)) return { ok: false, error: 'Kies een geldig proces.' }
  if (!inList(answers.teamgrootte, TEAMGROOTTES)) return { ok: false, error: 'Kies een geldige teamgrootte.' }
  if (!inList(answers.timing, TIMINGS)) return { ok: false, error: 'Kies een geldige timing.' }

  return { ok: true, value: { name, email, website, answers } }
}
