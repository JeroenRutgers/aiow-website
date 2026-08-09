export type WorkflowCategory = 'Sales' | 'Service' | 'Operatie' | 'Kennis' | 'Directie'

export type Workflow = {
  slug: string
  category: WorkflowCategory
  title: string
  promise: string
  trigger: string
  aiAction: string
  humanGate: string
  output: string
  result: string
  delivery: string
}

export const workflowCategories: Array<'Alles' | WorkflowCategory> = [
  'Alles',
  'Sales',
  'Service',
  'Operatie',
  'Kennis',
  'Directie',
]

export const workflows: Workflow[] = [
  {
    slug: 'lead-naar-afspraak',
    category: 'Sales',
    title: 'Van nieuwe lead naar voorbereide afspraak',
    promise: 'Elke serieuze aanvraag krijgt snel een inhoudelijke eerste opvolging.',
    trigger: 'Een aanvraag komt binnen via website, e-mail of WhatsApp.',
    aiAction: 'De agent haalt intentie, timing, budget en ontbrekende informatie uit de aanvraag.',
    humanGate: 'Een medewerker controleert het antwoord en bepaalt of de afspraak wordt aangeboden.',
    output: 'Een antwoordconcept, korte leadbriefing en voorgestelde vervolgstap.',
    result: 'Minder wachttijd, completere gesprekken en zicht op iedere open lead.',
    delivery: 'Vaak geschikt als eerste workflow in 3 tot 5 weken.',
  },
  {
    slug: 'offerte-voorwerk',
    category: 'Sales',
    title: 'Offertevoorwerk uit intake en dossier',
    promise: 'Van losse notities naar een controleerbaar offerteconcept.',
    trigger: 'Een opname, telefoongesprek, voicenote of intake is afgerond.',
    aiAction: 'De agent structureert scope, aannames, uitsluitingen, vragen en prijsinput.',
    humanGate: 'De vakspecialist controleert scope, prijs en voorwaarden vóór extern gebruik.',
    output: 'Een intern offerteconcept met bronverwijzingen en open beslispunten.',
    result: 'Minder overtypen en een consistenter overdrachtsmoment naar de klant.',
    delivery: 'Past bij bouw, advies, onderhoud en andere offertegedreven bedrijven.',
  },
  {
    slug: 'klantvraag-naar-antwoord',
    category: 'Service',
    title: 'Klantvraag naar veilig antwoordconcept',
    promise: 'Vaste antwoorden blijven actueel en uitzonderingen blijven zichtbaar.',
    trigger: 'Een klant stelt een vraag via e-mail, portal of chat.',
    aiAction: 'De agent zoekt in goedgekeurde bronnen en maakt een antwoord met relevante context.',
    humanGate: 'Een medewerker keurt gevoelige, commerciële of uitzonderlijke antwoorden goed.',
    output: 'Een antwoordconcept plus de gebruikte interne bronnen.',
    result: 'Snellere service met behoud van menselijke controle en vakkennis.',
    delivery: 'Sterk wanneer dezelfde vragen vaak terugkomen.',
  },
  {
    slug: 'projectdossier-bijwerken',
    category: 'Operatie',
    title: 'Projectdossier automatisch bijwerken',
    promise: 'Besluiten, foto’s en afspraken komen op één vaste plek terecht.',
    trigger: 'Een projectupdate, bestand, foto, e-mail of voicenote wordt toegevoegd.',
    aiAction: 'De agent koppelt informatie aan het juiste project en stelt taken en besluiten voor.',
    humanGate: 'De projectverantwoordelijke controleert wijzigingen met financiële of externe gevolgen.',
    output: 'Een bijgewerkt dossier, taakvoorstellen en een compacte status.',
    result: 'Minder zoekwerk en een bruikbare overdracht tussen kantoor en uitvoering.',
    delivery: 'Goed te koppelen aan een bestaand klantportaal of documentstructuur.',
  },
  {
    slug: 'documenten-en-fotos',
    category: 'Operatie',
    title: 'Documenten en foto’s met bronnen analyseren',
    promise: 'Grote dossiers worden doorzoekbaar zonder de bewijslaag kwijt te raken.',
    trigger: 'Een rapport, map met foto’s, spreadsheet of PDF-dossier komt binnen.',
    aiAction: 'De agent inventariseert, extraheert, groepeert en verwijst naar pagina’s en bestanden.',
    humanGate: 'Een specialist bevestigt interpretaties die niet rechtstreeks uit de bron volgen.',
    output: 'Een brongebonden samenvatting, vragenlijst en issue-overzicht.',
    result: 'Sneller van bronpakket naar besluit, begroting of voorstel.',
    delivery: 'Geschikt voor vastgoed, inspecties, claims en technische projecten.',
  },
  {
    slug: 'kennisbank-uit-praktijk',
    category: 'Kennis',
    title: 'Praktijkkennis naar vindbare kennisbank',
    promise: 'Vakkennis wordt een verkoop- en servicemiddel dat blijft groeien.',
    trigger: 'Nieuwe klantvragen, projectlessen of specialistische uitleg worden vastgelegd.',
    aiAction: 'De agent maakt een conceptartikel, FAQ en interne links op basis van goedgekeurde kennis.',
    humanGate: 'De specialist controleert inhoud, claims en publicatiestatus.',
    output: 'Een publiceerbaar artikelconcept en updatevoorstel voor bestaande pagina’s.',
    result: 'Meer vindbaarheid, betere intake en minder herhaalde uitleg.',
    delivery: 'De eerste contentstructuur kan binnen 2 tot 4 weken staan.',
  },
  {
    slug: 'weekstart-managementbriefing',
    category: 'Directie',
    title: 'Weekstart met managementbriefing',
    promise: 'Open werk, risico’s en beslissingen staan vóór de weekstart op één pagina.',
    trigger: 'Een vaste wekelijkse run leest goedgekeurde project- en operationele bronnen.',
    aiAction: 'De agent groepeert voortgang, blokkades, deadlines en besluiten per eigenaar.',
    humanGate: 'De verantwoordelijke controleert prioriteiten en commerciële conclusies.',
    output: 'Een compacte briefing met beslisvragen en concrete volgende acties.',
    result: 'Kortere overleggen en duidelijker eigenaarschap.',
    delivery: 'Start klein met één team en een beperkt aantal databronnen.',
  },
  {
    slug: 'ai-team-op-eigen-mac',
    category: 'Directie',
    title: 'Een beheerd AI-team op eigen hardware',
    promise: 'Een vaste bedrijfsagent met gecontroleerde skills, toegang en herstelpad.',
    trigger: 'Medewerkers geven opdrachten via een afgesproken chatkanaal of dashboard.',
    aiAction: 'De agent werkt binnen vaste tools, budgetten, databronnen en goedkeuringsgrenzen.',
    humanGate: 'Verzenden, publiceren, kopen en andere externe acties vragen expliciet akkoord.',
    output: 'Een bruikbare productieagent, auditspoor en aparte experimenteeromgeving.',
    result: 'Eigen regie over data en accounts, met technisch beheer door AIOW.',
    delivery: 'Setup vanaf één activatieweekend plus een stabilisatie- en acceptatiefase.',
  },
]

export type Service = {
  slug: string
  eyebrow: string
  name: string
  promise: string
  price: string
  tax: string
  timeframe: string
  forWho: string
  deliverables: string[]
  cta: string
  href: string
  featured?: boolean
}

export const services: Service[] = [
  {
    slug: 'ai-workflow-lab',
    eyebrow: 'Betaalde start',
    name: 'AI Workflow Lab',
    promise: 'Ontleed één werkstroom en kies de beste eerste AI-kans.',
    price: '€950',
    tax: 'excl. btw',
    timeframe: '90 tot 120 minuten',
    forWho: 'Voor teams met één concreet terugkerend proces en een interne eigenaar.',
    deliverables: [
      'Live procesontleding',
      'Risico- en databroncheck',
      'Top drie kansen',
      'Actiekaart voor 30 dagen',
    ],
    cta: 'Bekijk het Workflow Lab',
    href: '/ai-workflow-lab',
    featured: true,
  },
  {
    slug: 'ai-intake-blueprint',
    eyebrow: 'Beslissen',
    name: 'AI Intake & Blueprint',
    promise: 'Koop besliszekerheid vóór er software wordt gebouwd.',
    price: '€2.950',
    tax: 'excl. btw',
    timeframe: '1 tot 2 weken',
    forWho: 'Voor bedrijven die proces, systemen, privacy, nulmeting en pilotscope vooraf willen vastleggen.',
    deliverables: [
      'Huidige-staat procesmap',
      'Bron- en systeeminventaris',
      'Risico- en securitynotities',
      'Moduleplan en vaste MVP-offerte',
    ],
    cta: 'Bekijk de Blueprint',
    href: '/diensten#ai-intake-blueprint',
  },
  {
    slug: 'ai-bootcamp',
    eyebrow: 'Leren',
    name: 'AI Bootcamp',
    promise: 'Eén werkdag waarin uw team leert met de eigen processen en documenten.',
    price: 'vanaf €2.950',
    tax: 'excl. btw',
    timeframe: '1 werkdag',
    forWho: 'Voor teams die snel een gedeelde werkwijze, veilige spelregels en een actieplan nodig hebben.',
    deliverables: [
      'Praktische AI-basis',
      'Oefenen op eigen werk',
      'Kansenmatrix',
      '30/60/90-dagenplan',
    ],
    cta: 'Bekijk de Bootcamp',
    href: '/ai-bootcamp',
  },
  {
    slug: 'startmodule-pilot',
    eyebrow: 'Bouwen',
    name: 'Startmodule / Pilot',
    promise: 'Eén afgebakend proces werkend maken met een meetbaar acceptatiemoment.',
    price: '€7.500 – €12.500',
    tax: 'excl. btw',
    timeframe: '4 tot 6 weken',
    forWho: 'Voor bedrijven met een terugkerend proces, duidelijke eigenaar en toegang tot de benodigde bronnen.',
    deliverables: [
      'Werkende workflow',
      'Menselijke goedkeuringspunten',
      'Test- en acceptatieplan',
      'Onboarding en overdracht',
    ],
    cta: 'Bekijk workflows',
    href: '/workflows',
  },
  {
    slug: 'managed-ai-workflow',
    eyebrow: 'Opschalen',
    name: 'Managed AI Workflow',
    promise: 'Een vaste eigenaar voor monitoring, incidenten, adoptie en verbetering.',
    price: 'vanaf €950 p/m',
    tax: 'excl. btw · gebruik en licenties apart',
    timeframe: 'maandelijkse servicecyclus',
    forWho: 'Voor bedrijven die een bewezen eerste module betrouwbaar willen blijven gebruiken en verbeteren.',
    deliverables: [
      'Monitoring en incidenttriage',
      'Maandelijkse gebruiksreview',
      'Kleine optimalisaties binnen bundel',
      'Onboarding en roltraining',
    ],
    cta: 'Bekijk het managed model',
    href: '/diensten#managed-ai-workflow',
  },
]

export type KnowledgeSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type KnowledgeArticle = {
  slug: string
  category: 'Basis' | 'Werken' | 'Agents' | 'Veiligheid' | 'Kopen'
  level: 'Start' | 'Praktijk' | 'Verdieping'
  title: string
  description: string
  shortAnswer: string
  readTime: string
  updated: string
  outcome: string
  sections: KnowledgeSection[]
  relatedWorkflow?: string
  sources?: { label: string; url: string }[]
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: 'wat-is-generatieve-ai',
    category: 'Basis',
    level: 'Start',
    title: 'Wat is generatieve AI en waar is het goed in?',
    description: 'Een praktische uitleg van taalmodellen, sterke toepassingen en de grenzen die ieder bedrijf moet kennen.',
    shortAnswer: 'Generatieve AI maakt nieuwe tekst, beelden, audio of code op basis van patronen uit trainingsdata en de context die u meegeeft. Het is sterk in taal- en informatiewerk. Feiten, uitzonderingen en beslissingen met gevolgen vragen controle.',
    readTime: '7 min',
    updated: '2026-08-09',
    outcome: 'U herkent geschikte taken en weet waar menselijke controle nodig blijft.',
    sections: [
      {
        heading: 'Wat het systeem feitelijk doet',
        paragraphs: [
          'Een taalmodel voorspelt stap voor stap welke woorden waarschijnlijk volgen. Met goede context kan dat verrassend bruikbare analyses, concepten en samenvattingen opleveren.',
          'Het model heeft geen eigen begrip van uw bedrijf. Dat ontstaat pas wanneer u betrouwbare bronnen, duidelijke instructies en vaste grenzen toevoegt.',
        ],
      },
      {
        heading: 'Taken die vaak goed passen',
        paragraphs: ['Begin bij werk met veel taal, herhaling en duidelijke kwaliteitscriteria.'],
        bullets: [
          'Samenvatten en structureren van documenten',
          'Eerste concepten voor communicatie en offertes',
          'Zoeken in een goedgekeurde kennisbank',
          'Classificeren van aanvragen en dossiers',
          'Voorbereiden van rapportages en vergaderingen',
        ],
      },
      {
        heading: 'De belangrijkste grens',
        paragraphs: [
          'Een overtuigend antwoord kan onjuist zijn. Richt daarom een controlepunt in vóór verzenden, publiceren, betalen of andere acties met gevolgen.',
        ],
      },
    ],
  },
  {
    slug: 'chatgpt-api-en-ai-agent-verschil',
    category: 'Agents',
    level: 'Start',
    title: 'ChatGPT, een API en een AI-agent: wat is het verschil?',
    description: 'Drie begrippen die vaak door elkaar lopen, uitgelegd vanuit de dagelijkse bedrijfspraktijk.',
    shortAnswer: 'ChatGPT is een applicatie voor mensen. Een API laat software een model aanroepen. Een AI-agent combineert een model met instructies, bronnen, tools, geheugen en goedkeuringsregels om een taakstroom uit te voeren.',
    readTime: '6 min',
    updated: '2026-08-09',
    outcome: 'U kunt leveranciersvragen en interne plannen scherper beoordelen.',
    sections: [
      {
        heading: 'ChatGPT als persoonlijke werkplek',
        paragraphs: [
          'Een medewerker voert een gesprek, uploadt informatie en beoordeelt het antwoord. Dit is vaak de snelste manier om te leren waar AI helpt.',
        ],
      },
      {
        heading: 'Een API als bouwblok',
        paragraphs: [
          'Via een API kan uw website, CRM of eigen software een model gebruiken. Kosten, logging, beveiliging en datastromen moeten dan expliciet worden ingericht.',
        ],
      },
      {
        heading: 'Een agent als beheerde werkstroom',
        paragraphs: [
          'Een agent krijgt een beperkte rol, vaste bronnen en toegestane tools. De beste bedrijfsagenten hebben duidelijke stopcondities en menselijke goedkeuring voor externe acties.',
        ],
      },
    ],
    relatedWorkflow: 'ai-team-op-eigen-mac',
  },
  {
    slug: 'eerste-ai-workflow-kiezen',
    category: 'Werken',
    level: 'Praktijk',
    title: 'Hoe kiest u de eerste AI-workflow?',
    description: 'Een beslismodel voor een eerste implementatie die klein genoeg is om te leveren en belangrijk genoeg om te meten.',
    shortAnswer: 'Kies werk dat vaak terugkomt, nu zichtbaar tijd kost, een duidelijke eigenaar heeft en met menselijke controle veilig uitgevoerd kan worden. Vermijd een eerste project dat meteen alle systemen en afdelingen raakt.',
    readTime: '8 min',
    updated: '2026-08-09',
    outcome: 'U kunt vijf ideeën terugbrengen naar één kansrijke eerste workflow.',
    sections: [
      {
        heading: 'Score op vijf punten',
        paragraphs: ['Geef iedere kandidaat een score van één tot vijf.'],
        bullets: [
          'Frequentie: hoe vaak komt de taak voor?',
          'Pijn: hoeveel tijd, wachttijd of fouten veroorzaakt het?',
          'Bronkwaliteit: zijn de benodigde gegevens beschikbaar?',
          'Eigenaarschap: wie beslist of de uitkomst goed is?',
          'Veiligheid: kan een mens de uitkomst controleren vóór er gevolgen zijn?',
        ],
      },
      {
        heading: 'Maak succes meetbaar',
        paragraphs: [
          'Leg vóór de bouw vast wat sneller, vollediger of consistenter moet worden. Denk aan doorlooptijd, ontbrekende velden, correctierondes of openstaande aanvragen.',
        ],
      },
      {
        heading: 'Stop ook bewust',
        paragraphs: [
          'Wanneer bronnen ontbreken, de eigenaar geen tijd heeft of het proces iedere week anders loopt, is eerst proceswerk nodig. Dat is een bruikbare uitkomst van een scan.',
        ],
      },
    ],
    relatedWorkflow: 'lead-naar-afspraak',
  },
  {
    slug: 'veilig-ai-gebruiken-met-klantdata',
    category: 'Veiligheid',
    level: 'Praktijk',
    title: 'Veilig werken met AI en klantdata',
    description: 'Een compacte basis voor accounts, dataminimalisatie, logging, toegangsbeheer en menselijke goedkeuring.',
    shortAnswer: 'Gebruik zakelijke accounts en goedgekeurde instellingen, deel alleen noodzakelijke gegevens, beperk toegang per rol, leg gevoelige acties vast en zorg dat een mens externe output controleert.',
    readTime: '9 min',
    updated: '2026-08-09',
    outcome: 'U heeft een praktische checklist voor veilig dagelijks gebruik.',
    sections: [
      {
        heading: 'Begin bij dataminimalisatie',
        paragraphs: [
          'Een model heeft zelden het volledige klantdossier nodig. Stuur alleen de velden die nodig zijn voor de concrete taak en verwijder identificerende details waar dat kan.',
        ],
      },
      {
        heading: 'Scheid experiment en productie',
        paragraphs: [
          'Nieuwe prompts, tools en skills horen eerst in een testomgeving met veilige voorbeelddata. Een wijziging gaat pas naar productie na controle en een terugvalmogelijkheid.',
        ],
      },
      {
        heading: 'Minimale bedrijfsafspraken',
        paragraphs: ['Leg de volgende punten schriftelijk vast.'],
        bullets: [
          'Welke tools en accounts zijn toegestaan?',
          'Welke gegevens mogen wel en niet worden gedeeld?',
          'Welke acties vragen menselijke goedkeuring?',
          'Waar worden logs, exports en back-ups bewaard?',
          'Wie kan toegang intrekken bij vertrek of incident?',
        ],
      },
    ],
    relatedWorkflow: 'klantvraag-naar-antwoord',
    sources: [
      {
        label: 'Autoriteit Persoonsgegevens · AI en algoritmes',
        url: 'https://www.autoriteitpersoonsgegevens.nl/themas/algoritmes-ai',
      },
    ],
  },
  {
    slug: 'menselijke-controle-ai-workflow',
    category: 'Werken',
    level: 'Praktijk',
    title: 'Waar hoort menselijke controle in een AI-workflow?',
    description: 'Ontwerp goedkeuringspunten op basis van impact, herstelbaarheid en externe gevolgen.',
    shortAnswer: 'Plaats een menselijke gate vóór acties die extern zichtbaar, financieel, juridisch of moeilijk terug te draaien zijn. Routineus intern voorwerk kan vaker automatisch lopen zolang logging en stopcondities werken.',
    readTime: '7 min',
    updated: '2026-08-09',
    outcome: 'U kunt per stap bepalen wat automatisch mag en wat goedkeuring vraagt.',
    sections: [
      {
        heading: 'Vier signalen voor verplichte goedkeuring',
        paragraphs: ['Hoe hoger de mogelijke impact, hoe explicieter de gate.'],
        bullets: [
          'De klant of buitenwereld ziet het resultaat',
          'Er wordt geld uitgegeven of een prijs toegezegd',
          'Het resultaat raakt rechten, planning of veiligheid',
          'Herstel is lastig of reputatieschade is mogelijk',
        ],
      },
      {
        heading: 'Wat wel vooraf kan lopen',
        paragraphs: [
          'Zoeken, samenvatten, structureren, vergelijken en concepten maken zijn vaak goede automatische stappen. De agent bereidt voor, de verantwoordelijke beslist.',
        ],
      },
      {
        heading: 'Een gate moet bruikbaar zijn',
        paragraphs: [
          'Toon de beslisser wat er verandert, welke bron is gebruikt, wat het risico is en hoe de actie kan worden teruggedraaid. Een losse knop zonder context is geen goede controle.',
        ],
      },
    ],
    relatedWorkflow: 'offerte-voorwerk',
  },
  {
    slug: 'wat-kost-ai-voor-een-mkb-bedrijf',
    category: 'Kopen',
    level: 'Start',
    title: 'Wat kost AI voor een MKB-bedrijf?',
    description: 'Een eerlijk kostenmodel voor licenties, API-gebruik, implementatie, beheer en interne tijd.',
    shortAnswer: 'De modelkosten zijn vaak maar één deel. Reken ook op procesanalyse, integratie, beveiliging, testen, onboarding, monitoring en verbetering. Een kleine eerste workflow is beter te begroten dan een brede bedrijfsassistent.',
    readTime: '8 min',
    updated: '2026-08-09',
    outcome: 'U kunt offertes vergelijken op totale eigendomskosten en leveringsscope.',
    sections: [
      {
        heading: 'De vijf kostenlagen',
        paragraphs: ['Vraag leveranciers om deze lagen afzonderlijk te tonen.'],
        bullets: [
          'Accounts, modellen en variabel API-gebruik',
          'Eenmalige procesanalyse en inrichting',
          'Koppelingen, data-opruiming en beveiliging',
          'Testen, acceptatie en training',
          'Doorlopend beheer, support en verbeteringen',
        ],
      },
      {
        heading: 'Waarom goedkoop bouwen duur kan worden',
        paragraphs: [
          'Een demo kan snel klaar zijn. Productie vraagt logging, toegangsbeheer, foutafhandeling, back-up en iemand die verantwoordelijk blijft wanneer een leverancier iets wijzigt.',
        ],
      },
      {
        heading: 'Vergelijk op resultaat en grens',
        paragraphs: [
          'Laat vastleggen welke workflow live gaat, welke bronnen inbegrepen zijn, wie goedkeurt, hoe acceptatie werkt en wat buiten de prijs valt.',
        ],
      },
    ],
  },
  {
    slug: 'eigen-ai-agent-op-eigen-hardware',
    category: 'Agents',
    level: 'Verdieping',
    title: 'Een AI-agent op eigen hardware: wanneer is dat zinvol?',
    description: 'Eigendom, privacy, beschikbaarheid en beheer afwegen voor een lokaal of hybride AI-team.',
    shortAnswer: 'Eigen hardware is interessant wanneer u controle wilt over opslag, accounts en bedrijfsconfiguratie. Het vraagt wel om beveiliging, een apart back-updoel, updates, monitoring en een duidelijk herstelpad.',
    readTime: '9 min',
    updated: '2026-08-09',
    outcome: 'U kunt bepalen of een beheerde lokale agent bij uw bedrijf past.',
    sections: [
      {
        heading: 'Wat u zelf bezit',
        paragraphs: [
          'De computer, opslag, provideraccounts, projectdata en bedrijfsspecifieke configuratie kunnen op naam van uw bedrijf staan. Dat maakt vertrek en toegangsintrekking duidelijker.',
        ],
      },
      {
        heading: 'Wat beheer blijft vragen',
        paragraphs: [
          'Lokale hardware verwijdert de operationele verantwoordelijkheid niet. Updates, skillintegriteit, back-ups, hersteltests en toegangsbeheer blijven nodig.',
        ],
      },
      {
        heading: 'Kies lokaal, cloud of hybride per taak',
        paragraphs: [
          'Gevoelige opslag en vaste bedrijfslogica kunnen lokaal blijven, terwijl krachtige modellen via een zakelijk provideraccount worden gebruikt. De juiste keuze volgt uit de dataflow en het risicoprofiel.',
        ],
      },
    ],
    relatedWorkflow: 'ai-team-op-eigen-mac',
  },
  {
    slug: 'ai-geletterdheid-voor-teams',
    category: 'Veiligheid',
    level: 'Start',
    title: 'AI-geletterdheid voor teams: wat moet iedereen weten?',
    description: 'De minimale kennis en werkafspraken om AI bewust, veilig en effectief te gebruiken.',
    shortAnswer: 'Medewerkers moeten begrijpen wat het systeem kan, welke fouten mogelijk zijn, welke dataregels gelden en wanneer menselijke controle verplicht is. Oefenen met eigen werk maakt die afspraken bruikbaar.',
    readTime: '6 min',
    updated: '2026-08-09',
    outcome: 'U heeft een basisagenda voor teamtraining en interne spelregels.',
    sections: [
      {
        heading: 'De gezamenlijke basis',
        paragraphs: [
          'Een team hoeft geen modelbouwer te worden. Iedereen moet wel herkennen welke taken passen, hoe een goede opdracht eruitziet en waarom een overtuigend antwoord nog gecontroleerd moet worden.',
        ],
      },
      {
        heading: 'Leer met eigen voorbeelden',
        paragraphs: [
          'Een training wordt waardevol wanneer medewerkers werken met echte, vooraf veilig gemaakte voorbeelden uit verkoop, planning, service en administratie.',
        ],
      },
      {
        heading: 'Van training naar routine',
        paragraphs: [
          'Sluit af met toegestane tools, dataregels, eigenaarschap en één concrete workflow die het team de volgende maand gebruikt en evalueert.',
        ],
      },
    ],
    sources: [
      {
        label: 'Autoriteit Persoonsgegevens · AI-geletterdheid',
        url: 'https://www.autoriteitpersoonsgegevens.nl/themas/algoritmes-ai/ai-verordening/ai-geletterdheid',
      },
      {
        label: 'Europese Commissie · regelgevend kader voor AI',
        url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
      },
    ],
  },
]

export function getWorkflow(slug: string) {
  return workflows.find((workflow) => workflow.slug === slug)
}

export function getKnowledgeArticle(slug: string) {
  return knowledgeArticles.find((article) => article.slug === slug)
}
