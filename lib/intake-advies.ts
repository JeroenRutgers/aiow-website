export type IntakeAnswers = {
  branche: string
  pijnpunt: string
  teamgrootte: string
  timing: string
}

export const BRANCHES = [
  'Makelaardij',
  'Zorg',
  'Retail / Horeca',
  'Bouw / Vastgoed',
  'Diensten',
  'Anders',
] as const

export const PIJNPUNTEN = [
  'Klantvragen beantwoorden',
  'Offertes en intake',
  'Planning en roosters',
  'Opvolging van leads',
  'Kennis vindbaar houden',
] as const

export const TEAMGROOTTES = ['1-5', '5-15', '15-50', '50+'] as const

export const TIMINGS = ['Deze maand', 'Dit kwartaal', 'Oriënterend'] as const

type Advies = { oplossing: string; caseSlug: string; caseNaam: string }

const PIJN_MAP: Record<string, Advies> = {
  'Klantvragen beantwoorden': {
    oplossing: 'een AI-assistent die klantvragen direct beantwoordt met een menselijke check',
    caseSlug: 'kleanup',
    caseNaam: 'Klean Up',
  },
  'Offertes en intake': {
    oplossing: 'een AI-intake die aanvragen compleet en gekwalificeerd binnenbrengt',
    caseSlug: 'doorz',
    caseNaam: 'DOORZ',
  },
  'Planning en roosters': {
    oplossing: 'een planningshulp die scenario’s doorrekent terwijl uw planner beslist',
    caseSlug: 'roostercopilot',
    caseNaam: 'RoosterCopilot',
  },
  'Opvolging van leads': {
    oplossing: 'leadopvolging die binnen een minuut reageert en direct een afspraak boekt',
    caseSlug: 'doorz',
    caseNaam: 'DOORZ',
  },
  'Kennis vindbaar houden': {
    oplossing: 'een doorzoekbare kennisbank die uw vakkennis vindbaar maakt voor klanten en team',
    caseSlug: 'decostone',
    caseNaam: 'DecoStone',
  },
}

const BRANCHE_CASE: Record<string, { slug: string; naam: string }> = {
  Makelaardij: { slug: 'doorz', naam: 'DOORZ' },
  Zorg: { slug: 'roostercopilot', naam: 'RoosterCopilot' },
  'Retail / Horeca': { slug: 'reload-hub', naam: 'Reload Hub' },
  'Bouw / Vastgoed': { slug: 'decostone', naam: 'DecoStone' },
  Diensten: { slug: 'decostone', naam: 'DecoStone' },
}

export function genereerAdvies(a: IntakeAnswers): {
  tekst: string
  caseSlug: string
  caseNaam: string
} {
  const pijn = PIJN_MAP[a.pijnpunt] ?? PIJN_MAP['Offertes en intake']
  const brancheCase = BRANCHE_CASE[a.branche]
  // Als de branche een sterkere case-match heeft dan het pijnpunt, noem die
  const kies = brancheCase && brancheCase.slug !== pijn.caseSlug && (a.pijnpunt === 'Klantvragen beantwoorden' || a.pijnpunt === 'Offertes en intake')
    ? brancheCase
    : { slug: pijn.caseSlug, naam: pijn.caseNaam }

  const tempo =
    a.timing === 'Deze maand'
      ? 'We kunnen binnen twee weken starten met een afgebakende pilot.'
      : a.timing === 'Dit kwartaal'
        ? 'Een pilot van 4 tot 6 weken past ruim binnen dit kwartaal.'
        : 'Een vrijblijvend gesprek van 30 minuten geeft u een concreet beeld en een prijsindicatie.'

  return {
    tekst: `Voor een ${a.branche.toLowerCase()}-bedrijf met ${a.teamgrootte} medewerkers is ${pijn.oplossing} meestal de snelste winst. Vergelijkbaar met wat we voor ${kies.naam} bouwden. ${tempo}`,
    caseSlug: kies.slug,
    caseNaam: kies.naam,
  }
}
