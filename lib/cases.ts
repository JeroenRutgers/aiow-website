export type Case = {
  slug: string
  client: string
  status: string
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
    status: 'Live praktijkomgeving',
    industry: 'Natuursteen · Ambacht',
    short: 'Kennisbank, Steenpaspoort en foto-intake via WhatsApp voor een natuursteenspecialist.',
    built:
      'Kennisbank met 60+ adviesartikelen, Steenpaspoort als levend onderhoudsdossier, foto-intake via WhatsApp en klantportaal met projectstatus.',
    result:
      'De live omgeving verbindt kennis, intake, projectinformatie en klantdossiers. Effect op omzet of doorlooptijd wordt nog niet als causale claim gepubliceerd.',
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
      { title: 'Kennisbank voor vindbaarheid en service', text: 'Zestig-plus adviesartikelen beantwoorden veelgestelde vragen en leiden bezoekers door naar een passende intake of contactroute.' },
      { title: 'Foto-intake via WhatsApp', text: 'Klanten kunnen foto’s van hun blad of vloer delen. De intake structureert materiaal, locatie, type vraag en ontbrekende informatie.' },
      { title: 'Steenpaspoort', text: 'Een opgeleverd project kan een levend dossier krijgen met materiaal, behandeling en onderhoudsadvies.' },
    ],
    related: ['kleanup', 'doorz'],
    ctaLine: 'Ook uw vakkennis vindbaar en uw intake compleet?',
  },
  {
    slug: 'doorz',
    client: 'DOORZ Real Estate',
    status: 'Klikbaar concept',
    industry: 'Makelaardij',
    short: 'Klikbaar concept voor AI-intake, leadbriefing en agenda-handoff met voorbeelddata.',
    built:
      'Klikbaar intakeconcept dat laat zien hoe kopers, verkopers en investeerders kunnen worden samengevat en doorgezet naar agenda en leadbriefing.',
    result:
      'Het concept demonstreert de volledige gebruikersflow met voorbeelddata. Productiekoppelingen en gemeten klantresultaten horen bij een aparte implementatie.',
    metrics: ['Voorbeelddata', 'Leadbriefing-flow', 'Agenda-handoff'],
    problem:
      'Bezichtigingsaanvragen kwamen ’s avonds binnen en ’s ochtends was de lead koud. Opvolging hing af van wie er toevallig tijd had.',
    approach: [
      { fase: 'Verkennen', text: 'Leadstroom in kaart gebracht: waar vallen kopers en verkopers uit het proces.', duur: 'Week 1' },
      { fase: 'Bouwen', text: 'Intake-flow gebouwd die vraagt wat een makelaar zou vragen, in gewone taal.', duur: 'Week 2-4' },
      { fase: 'Concept', text: 'De intake, briefing, agenda-handoff en melding zijn als klikbare keten uitgewerkt.', duur: 'Week 5' },
      { fase: 'Vervolg', text: 'Productiekoppelingen, databronnen en meetplan worden pas na vaste scope ingericht.', duur: 'Na akkoord' },
    ],
    details: [
      { title: 'Intake die doorvraagt', text: 'De AI vraagt budget, timing en wensen uit zoals een goede makelaar dat doet, en vat het samen in een briefing van vijf regels.' },
      { title: 'Agenda-handoff', text: 'Het concept toont hoe een gekwalificeerde lead naar een beschikbare afspraakroute kan worden geleid.' },
      { title: 'Leadmelding', text: 'De demoflow laat zien welke briefing en contactgegevens een melding kan bevatten.' },
    ],
    related: ['decostone', 'roostercopilot'],
    ctaLine: 'Ook iedere aanvraag gestructureerd laten opvolgen?',
  },
  {
    slug: 'roostercopilot',
    client: 'RoosterCopilot',
    status: 'Werkend prototype',
    industry: 'Zorg',
    short: 'Werkend roosterprototype: het systeem stelt voor en de planner beslist.',
    built:
      'Werkend roosterprototype waarin het systeem voorstellen uitlegt en de planner beslist. Ontworpen rond menselijk toezicht en traceerbare regels.',
    result:
      'Het prototype bewijst de scenario- en uitlegflow op veilige voorbeelddata. Productiegebruik, compliance-validatie en tijdwinst zijn nog niet gemeten.',
    metrics: ['Prototype-scenario’s', 'Planner houdt regie', 'Traceerbare uitleg'],
    problem:
      'Roosteren kostte planners avonden, en elke wijziging betekende opnieuw puzzelen met CAO-regels, bezetting en voorkeuren.',
    approach: [
      { fase: 'Verkennen', text: 'Meegelopen met planners: welke regels zijn hard, welke voorkeuren tellen.', duur: 'Week 1' },
      { fase: 'Bouwen', text: 'Scenario-engine gebouwd die voorstelt en uitlegt waarom, nooit zelf beslist.', duur: 'Week 2-4' },
      { fase: 'Testen', text: 'Prototype getest met veilige roostervoorbeelden en expliciete plannerbeslissingen.', duur: 'Week 5-6' },
      { fase: 'Vervolg', text: 'Regelvalidatie, integraties en een gecontroleerde afdelingspilot vragen aparte scope.', duur: 'Na akkoord' },
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
    status: 'Pilotconcept',
    industry: 'Gemeente · Beheer',
    short: 'Pilotconcept van losse afvalmelding naar bestuurbaar ticket met triage en fotobewijs.',
    built:
      'Pilotconcept voor meldingen via web en WhatsApp, triage met menselijke check, voorgestelde dispatch en fotobewijs vóór en na.',
    result:
      'Het concept maakt de beoogde keten en bestuurlijke rapportage zichtbaar. Er draait nog geen gemeentelijke productiepilot.',
    metrics: ['3 voorgestelde kanalen', 'Menselijke triagegate', 'Bewijsflow ontworpen'],
    problem:
      'Meldingen over zwerfafval en dumpingen kwamen versnipperd binnen en verdwenen in mailboxen. Bewoners hoorden nooit iets terug.',
    approach: [
      { fase: 'Verkennen', text: 'Meldstromen in kaart: waar komen meldingen binnen, waar lopen ze vast.', duur: 'Week 1' },
      { fase: 'Bouwen', text: 'Meldflow met AI-classificatie gebouwd, altijd met menselijke check.', duur: 'Week 2-4' },
      { fase: 'Concept', text: 'Dispatch, fotobewijs en terugkoppeling als volledige demonstratieflow uitgewerkt.', duur: 'Week 5' },
      { fase: 'Vervolg', text: 'Een echte gemeentezone, operationele partner en meetplan vragen aparte pilotafspraken.', duur: 'Na akkoord' },
    ],
    details: [
      { title: 'Melden via bekende kanalen', text: 'Het concept toont hoe een foto via WhatsApp of web kan worden omgezet in een voorgesteld ticket met type en locatie.' },
      { title: 'Triage met menselijke check', text: 'Het systeem stelt een classificatie voor en een mens keurt de dispatch goed.' },
      { title: 'Zichtbare bewijsflow', text: 'De demonstratie bevat foto vóór en na, een servicevenster en een rapportage-opzet.' },
    ],
    related: ['roostercopilot', 'decostone'],
    ctaLine: 'Ook van losse meldingen naar bestuurbare respons?',
  },
  {
    slug: 'reload-hub',
    client: 'Reload Hub',
    status: 'Pilotdossier',
    industry: 'Horeca · Mobiliteit',
    short: 'Pilotdossier voor e-bike laadkluizen, locatieselectie en partnerselectie.',
    built:
      'E-bike laadkluizen voor cafés en werkgevers, met AI-gedreven matching van locaties, partners en bezetting.',
    result:
      'Een onderbouwd pilotdossier van hardware-specificatie tot partnerselectie. Een live locatie en bezettingsresultaten zijn nog niet gerealiseerd.',
    metrics: ['Hardware-spec compleet', 'AI-locatiematching', 'Pilotpakket klaar'],
    problem:
      'E-bike rijders willen veilig laden onderweg, horeca wil terrasgasten langer vasthouden. Het matchen van locaties, partners en bezetting was handwerk.',
    approach: [
      { fase: 'Verkennen', text: 'Marktverkenning: welke locaties, welke partners, welke businesscase.', duur: 'Week 1-2' },
      { fase: 'Bouwen', text: 'Locatiematching en pilotpakket: van hardware-spec tot partnerselectie.', duur: 'Week 3-5' },
      { fase: 'Dossier', text: 'Pilotpakket uitgewerkt voor besluitvorming, inclusief technische tekening.', duur: 'Week 6' },
      { fase: 'Vervolg', text: 'Bezettingsdata en locatiematching worden pas gevalideerd zodra een echte pilot draait.', duur: 'Na akkoord' },
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
    status: 'Productconcept',
    industry: 'Consumer · iOS',
    short: 'Productconcept voor een aandacht-app met een privacygerichte on-device architectuur.',
    built:
      'Aandacht-app rond drie lijsten van tien, met on-device intelligence. Alles blijft op het toestel, geen account, geen feed.',
    result:
      'Het productconcept toont een privacygerichte on-device richting. Publieke release en gebruiksresultaten zijn nog niet als bewijs beschikbaar.',
    metrics: ['100% on-device', 'Geen account nodig', 'Geen feed, geen tracking'],
    problem:
      'Aandacht-apps sturen data naar de cloud en trekken je een feed in. Het kan ook anders: intelligentie op het toestel zelf.',
    approach: [
      { fase: 'Verkennen', text: 'Concept: drie lijsten van tien, on-device, geen account.', duur: 'Week 1' },
      { fase: 'Bouwen', text: 'iOS-app met on-device intelligence, geen server-afhankelijkheid.', duur: 'Week 2-5' },
      { fase: 'Concept', text: 'Productroute en landing page uitgewerkt als demonstratie van de on-device richting.', duur: 'Week 6' },
      { fase: 'Vervolg', text: 'Release, privacyvalidatie en gebruiksmetingen volgen pas na productbesluit.', duur: 'Na akkoord' },
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
