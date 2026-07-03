export type Case = {
  slug: string
  client: string
  industry: string
  short: string
  built: string
  result: string
  metrics: string[]
  problem: string
  approach: { fase: string; text: string; duur: string }[]
  details: { title: string; text: string }[]
  related: string[]
  ctaLine: string
}

export const cases: Case[] = [
  {
    slug: 'decostone',
    client: 'DecoStone',
    industry: 'Natuursteen · Ambacht',
    short: 'Kennisbank, Steenpaspoort en foto-intake via WhatsApp voor een natuursteenspecialist.',
    built:
      'Kennisbank met 60+ adviesartikelen, Steenpaspoort als levend onderhoudsdossier, foto-intake via WhatsApp en klantportaal met projectstatus.',
    result:
      'Aanvragen komen compleet binnen met foto’s en materiaal; klanten blijven na oplevering verbonden via het Steenpaspoort.',
    metrics: ['60+ adviesartikelen', 'Foto-intake via WhatsApp', 'Levend onderhoudsdossier'],
    problem:
      'Vakkennis zat in het hoofd van de specialist, aanvragen kwamen incompleet binnen en na oplevering verdween het klantcontact.',
    approach: [
      { fase: 'Verkennen', text: 'Meegekeken met echte aanvragen: wat mist er, waar gaat tijd verloren.', duur: 'Week 1' },
      { fase: 'Bouwen', text: 'Kennisbank en foto-intake gebouwd op de bestaande workflow, niet ernaast.', duur: 'Week 2-4' },
      { fase: 'Live', text: 'Klantportaal en Steenpaspoort live met echte projecten en klanten.', duur: 'Week 5' },
      { fase: 'Doorontwikkelen', text: 'Nieuwe artikelen en functies op basis van wat klanten daadwerkelijk vragen.', duur: 'Doorlopend' },
    ],
    details: [
      { title: 'Kennisbank die verkoopt', text: 'Zestig-plus adviesartikelen beantwoorden de vragen die klanten ’s avonds googelen. Wie het antwoord vindt, vraagt daar offerte aan.' },
      { title: 'Foto-intake via WhatsApp', text: 'Klanten sturen foto’s van hun blad of vloer via WhatsApp. AI herkent materiaal en schade-type en zet de aanvraag compleet klaar.' },
      { title: 'Steenpaspoort', text: 'Elk opgeleverd project krijgt een levend dossier: materiaal, behandeling, onderhoudsadvies. De klant blijft verbonden, de vervolgopdracht komt vanzelf.' },
    ],
    related: ['kleanup', 'doorz'],
    ctaLine: 'Ook uw vakkennis vindbaar en uw intake compleet?',
  },
  {
    slug: 'doorz',
    client: 'DOORZ Real Estate',
    industry: 'Makelaardij',
    short: 'AI-intake die elke lead in één minuut kwalificeert en opvolgt.',
    built:
      'AI-intake die kopers, verkopers en investeerders in één minuut samenvat, gekoppeld aan agenda-booking en directe leadmelding in Telegram.',
    result:
      'Elke lead krijgt binnen een minuut opvolging; de makelaar start elk gesprek met een klare briefing.',
    metrics: ['Opvolging < 1 minuut', 'Briefing per lead', 'Directe agenda-booking'],
    problem:
      'Bezichtigingsaanvragen kwamen ’s avonds binnen en ’s ochtends was de lead koud. Opvolging hing af van wie er toevallig tijd had.',
    approach: [
      { fase: 'Verkennen', text: 'Leadstroom in kaart gebracht: waar vallen kopers en verkopers uit het proces.', duur: 'Week 1' },
      { fase: 'Bouwen', text: 'Intake-flow gebouwd die vraagt wat een makelaar zou vragen, in gewone taal.', duur: 'Week 2-4' },
      { fase: 'Live', text: 'Gekoppeld aan agenda en Telegram: lead binnen, briefing eruit, afspraak staat.', duur: 'Week 5' },
      { fase: 'Doorontwikkelen', text: 'Investeerders-flow en Engelstalige intake toegevoegd op basis van gebruik.', duur: 'Doorlopend' },
    ],
    details: [
      { title: 'Intake die doorvraagt', text: 'De AI vraagt budget, timing en wensen uit zoals een goede makelaar dat doet, en vat het samen in een briefing van vijf regels.' },
      { title: 'Direct in de agenda', text: 'Gekwalificeerde leads boeken zelf een bezichtiging of belafspraak. Geen heen-en-weer gemail.' },
      { title: 'Melding waar de makelaar leeft', text: 'Elke nieuwe lead komt direct binnen in Telegram, met briefing en telefoonnummer erbij.' },
    ],
    related: ['decostone', 'roostercopilot'],
    ctaLine: 'Ook elke lead binnen een minuut opgevolgd?',
  },
  {
    slug: 'roostercopilot',
    client: 'RoosterCopilot',
    industry: 'Zorg',
    short: 'Roosterhulp voor ziekenhuisafdelingen: AI stelt voor, de planner beslist.',
    built:
      'Roosterhulp voor ziekenhuisafdelingen: AI stelt voor, de planner beslist. Gebouwd op EU AI Act-uitgangspunten, geen zwarte doos.',
    result:
      'Planners toetsen scenario’s in minuten in plaats van avonden; compliance-verantwoording zit ingebouwd.',
    metrics: ['Scenario’s in minuten', 'Planner houdt regie', 'EU AI Act-proof'],
    problem:
      'Roosteren kostte planners avonden, en elke wijziging betekende opnieuw puzzelen met CAO-regels, bezetting en voorkeuren.',
    approach: [
      { fase: 'Verkennen', text: 'Meegelopen met planners: welke regels zijn hard, welke voorkeuren tellen.', duur: 'Week 1' },
      { fase: 'Bouwen', text: 'Scenario-engine gebouwd die voorstelt en uitlegt waarom, nooit zelf beslist.', duur: 'Week 2-4' },
      { fase: 'Live', text: 'Pilot op één afdeling met echte roosters en echte diensten.', duur: 'Week 5-6' },
      { fase: 'Doorontwikkelen', text: 'Compliance-rapportage en scenario-vergelijking uitgebreid.', duur: 'Doorlopend' },
    ],
    details: [
      { title: 'AI die voorstelt, mensen die beslissen', text: 'Elk roostervoorstel komt met uitleg: waarom deze verdeling, welke regels zijn gewogen. De planner houdt het laatste woord.' },
      { title: 'Compliance ingebouwd', text: 'EU AI Act-uitgangspunten zitten in het ontwerp: menselijk toezicht, uitlegbaarheid en documentatie die u kunt laten zien.' },
      { title: 'Scenario’s vergelijken', text: 'Wat gebeurt er bij ziekte, vakantie of een extra dienst? Doorrekenen in minuten in plaats van avonden.' },
    ],
    related: ['doorz', 'kleanup'],
    ctaLine: 'Ook uw planning in minuten in plaats van avonden?',
  },
  {
    slug: 'kleanup',
    client: 'Klean Up',
    industry: 'Gemeente · Beheer',
    short: 'Van losse afvalmelding naar bestuurbaar ticket met AI-triage en fotobewijs.',
    built:
      'Meldingen via web en WhatsApp, AI-triage met menselijke check, dispatch naar wijkteams en fotobewijs vóór en na.',
    result:
      'Van losse appfoto naar bestuurbaar ticket met servicevenster en rapportage voor bewoners en bestuur.',
    metrics: ['3 meldkanalen', 'AI-triage + menselijke check', 'Bewijs vóór en na'],
    problem:
      'Meldingen over zwerfafval en dumpingen kwamen versnipperd binnen en verdwenen in mailboxen. Bewoners hoorden nooit iets terug.',
    approach: [
      { fase: 'Verkennen', text: 'Meldstromen in kaart: waar komen meldingen binnen, waar lopen ze vast.', duur: 'Week 1' },
      { fase: 'Bouwen', text: 'Meldflow met AI-classificatie gebouwd, altijd met menselijke check.', duur: 'Week 2-4' },
      { fase: 'Live', text: 'Dispatch naar wijkteams met fotobewijs en terugkoppeling naar de melder.', duur: 'Week 5' },
      { fase: 'Doorontwikkelen', text: 'Rapportage voor bestuur en pilotvoorstel voor gemeentezones.', duur: 'Doorlopend' },
    ],
    details: [
      { title: 'Melden zoals bewoners al appen', text: 'Foto via WhatsApp of web, AI herkent het type melding en de locatie, en maakt er een compleet ticket van.' },
      { title: 'Triage met menselijke check', text: 'AI classificeert, een mens keurt goed. Snelheid zonder dat er ooit iets geks naar een wijkteam gaat.' },
      { title: 'Zichtbaar resultaat', text: 'Foto vóór en na de afhandeling, servicevenster voor de melder, rapportage voor het bestuur.' },
    ],
    related: ['roostercopilot', 'decostone'],
    ctaLine: 'Ook van losse meldingen naar bestuurbare respons?',
  },
  {
    slug: 'reload-hub',
    client: 'Reload Hub',
    industry: 'Horeca · Mobiliteit',
    short: 'E-bike laadkluizen voor cafés en werkgevers, met AI-gedreven locatiematching.',
    built:
      'E-bike laadkluizen voor cafés en werkgevers, met AI-gedreven matching van locaties, partners en bezetting.',
    result:
      'Compleet pilotpakket van hardware-spec tot partnerselectie, klaar voor de eerste locatie.',
    metrics: ['Hardware-spec compleet', 'AI-locatiematching', 'Pilotpakket klaar'],
    problem:
      'E-bike rijders willen veilig laden onderweg, horeca wil terrasgasten langer vasthouden. Het matchen van locaties, partners en bezetting was handwerk.',
    approach: [
      { fase: 'Verkennen', text: 'Marktverkenning: welke locaties, welke partners, welke businesscase.', duur: 'Week 1-2' },
      { fase: 'Bouwen', text: 'Locatiematching en pilotpakket: van hardware-spec tot partnerselectie.', duur: 'Week 3-5' },
      { fase: 'Live', text: 'Pilotpakket klaar voor de eerste locatie, inclusief technische tekening.', duur: 'Week 6' },
      { fase: 'Doorontwikkelen', text: 'Bezettingsdata terugvoeren in de matching zodra locaties draaien.', duur: 'Doorlopend' },
    ],
    details: [
      { title: 'AI-locatiematching', text: 'Welk café heeft de juiste ligging, het juiste publiek en ruimte voor een kluis? De matching rekent het door.' },
      { title: 'Compleet pilotpakket', text: 'Hardware-specificatie, partnerselectie, plaatsingstekening en businesscase in één pakket.' },
    ],
    related: ['kleanup', 'glimp'],
    ctaLine: 'Ook een nieuw concept doorgerekend en pilotklaar?',
  },
  {
    slug: 'glimp',
    client: 'Glimp',
    industry: 'Consumer · iOS',
    short: 'Aandacht-app met on-device intelligence: alles blijft op het toestel.',
    built:
      'Aandacht-app rond drie lijsten van tien, met on-device intelligence. Alles blijft op het toestel, geen account, geen feed.',
    result:
      'Toont hoe AIOW privacy-first bouwt: intelligentie zonder dat data het apparaat verlaat.',
    metrics: ['100% on-device', 'Geen account nodig', 'Geen feed, geen tracking'],
    problem:
      'Aandacht-apps sturen data naar de cloud en trekken je een feed in. Het kan ook anders: intelligentie op het toestel zelf.',
    approach: [
      { fase: 'Verkennen', text: 'Concept: drie lijsten van tien, on-device, geen account.', duur: 'Week 1' },
      { fase: 'Bouwen', text: 'iOS-app met on-device intelligence, geen server-afhankelijkheid.', duur: 'Week 2-5' },
      { fase: 'Live', text: 'App Store release met landing page.', duur: 'Week 6' },
      { fase: 'Doorontwikkelen', text: 'Iteraties op basis van gebruik, altijd privacy-first.', duur: 'Doorlopend' },
    ],
    details: [
      { title: 'Privacy als ontwerpkeuze', text: 'Geen account, geen cloud, geen feed. De intelligentie draait op het toestel en de data blijft daar.' },
      { title: 'Bewijs voor MKB', text: 'Wie privacy-gevoelige processen heeft, ziet hier hoe AIOW intelligentie bouwt zonder dat data het pand verlaat.' },
    ],
    related: ['reload-hub', 'decostone'],
    ctaLine: 'Ook intelligentie zonder dat uw data het pand verlaat?',
  },
]

export function getCase(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug)
}
