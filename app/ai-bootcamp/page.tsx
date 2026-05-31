import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'AI Bootcamp boeken',
  description:
    'Boek een praktische AI Bootcamp voor uw bedrijf. Op de boot, bij AIOW of op kantoor. Werk in één dag aan concrete AI-kansen, workflows en agent-roadmap.',
  openGraph: {
    title: 'AI Bootcamp voor bedrijven | AIOW',
    description:
      'Een praktische AI-dag voor MKB-teams die AI willen toepassen op echte processen. Op de boot, bij AIOW of op kantoor.',
    url: 'https://aiow.io/ai-bootcamp',
  },
}

const whatsappText = encodeURIComponent(
  'Hoi Jeroen, ik wil graag een AI Bootcamp bespreken voor ons bedrijf. We willen weten welk format past: boot, AIOW kantoor of bij ons op locatie.'
)

const mailSubject = encodeURIComponent('Aanvraag AI Bootcamp')
const mailBody = encodeURIComponent(`Hoi Jeroen,

We willen graag een AI Bootcamp bespreken.

Bedrijf:
Naam:
Telefoon:
Aantal deelnemers:
Voorkeur locatie: boot / AIOW kantoor / eigen kantoor
Gewenste periode:
Belangrijkste doel:

Groet,`)

const outcomes = [
  'Top 5 AI-kansen binnen jullie bedrijf',
  'Concrete quick wins voor teams en processen',
  'Prompt- en workflowformats voor eigen werk',
  'Kansenmatrix: impact, risico, haalbaarheid',
  'Eerste agent-roadmap voor 30/60/90 dagen',
  'Heldere afspraken over veilig AI-gebruik',
]

const dayPlan = [
  {
    time: '09:30',
    title: 'AI in gewone taal',
    text: 'Wat kan AI vandaag echt, waar gaat het mis, en welke keuzes moet een bedrijf nu maken?',
  },
  {
    time: '10:30',
    title: 'Jullie processen onder de loep',
    text: 'We halen de tijdvreters boven water in sales, administratie, planning, klantcontact, marketing en operatie.',
  },
  {
    time: '12:00',
    title: 'Kansenmatrix',
    text: 'Elke kans krijgt een score op impact, complexiteit, risico en haalbaarheid binnen 30 dagen.',
  },
  {
    time: '13:30',
    title: 'Werken aan echte cases',
    text: 'Geen nepvoorbeelden. Het team bouwt prompts, workflows en eerste automatiseringsconcepten voor eigen taken.',
  },
  {
    time: '15:30',
    title: 'Agents en implementatiepad',
    text: 'Waar is een AI-agent zinvol, waar is een simpele workflow genoeg, en wat moet AIOW eventueel bouwen?',
  },
  {
    time: '16:30',
    title: 'Actieplan',
    text: 'We sluiten af met quick wins, risico’s, eigenaarschap en een concreet vervolg voor de komende 30/60/90 dagen.',
  },
]

const useCases = [
  ['Sales', 'Lead research, voorstelteksten, CRM-samenvattingen, follow-up mails.'],
  ['Operations', 'Procesdocumentatie, planningschecks, werkinstructies en kwaliteitscontrole.'],
  ['Marketing', 'Contentformats, campagne-ideeën, SEO-briefings en doelgroepanalyse.'],
  ['Klantcontact', 'Antwoordconcepten, ticketclassificatie, kennisbankartikelen en escalatievoorstellen.'],
  ['Administratie', 'Documentanalyse, e-mailtriage, rapportageconcepten en interne samenvattingen.'],
  ['Management', 'Besluitvorming, kansenprioritering, risico’s en implementatie-roadmap.'],
]

const packages = [
  {
    name: 'Compact',
    price: '€2.950',
    tag: 'Halve dag',
    bestFor: 'Voor teams die snel richting willen.',
    items: ['3 tot 4 uur', 'Tot 8 deelnemers', 'AI-intro + 2 bedrijfscases', 'Quick-win overzicht', 'Korte samenvatting'],
  },
  {
    name: 'Business',
    price: '€5.950',
    tag: 'Populair',
    bestFor: 'Voor teams die AI echt willen toepassen.',
    items: ['Volledige dag', 'Tot 12 deelnemers', 'Boot, AIOW kantoor of eigen locatie', 'Use-case mapping', '30/60/90-dagen actieplan'],
    featured: true,
  },
  {
    name: 'Premium',
    price: '€9.950',
    tag: 'Directie + team',
    bestFor: 'Voor bedrijven die na de dag willen doorpakken.',
    items: ['Volledige dag maatwerk', 'Tot 16 deelnemers', 'Promptbibliotheek op maat', 'Agent-roadmap', '2 weken nazorg + follow-up call'],
  },
  {
    name: 'Bootcamp + Sprint',
    price: 'vanaf €14.950',
    tag: 'Implementatie',
    bestFor: 'Voor bedrijven die een eerste AI-workflow gebouwd willen hebben.',
    items: ['Alles uit Premium', '2 tot 4 weken implementatie', 'Eerste workflow of agent', 'Key-user training', 'Documentatie en overdracht'],
  },
]

const faqs = [
  ['Moeten deelnemers al ervaring hebben met AI?', 'Nee. Beginners leren de basis, gevorderde gebruikers werken aan betere toepassingen voor hun eigen werk.'],
  ['Is dit vooral theorie?', 'Nee. De bootcamp draait om jullie processen, taken, data-risico’s en concrete kansen.'],
  ['Kan de bootcamp ook op kantoor?', 'Ja. Het kan op de boot, bij AIOW of bij jullie op locatie. Voor grotere groepen is kantoor vaak praktischer.'],
  ['Wat is het ideale aantal deelnemers?', 'Tussen 6 en 12 werkt het beste. Voor grotere teams maken we een aangepast programma.'],
  ['Kunnen jullie ook implementeren?', 'Ja. AIOW kan na de bootcamp workflows, agents, dashboards en interne AI-processen bouwen.'],
]


function StaticCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-colors ${className}`}>
      {children}
    </div>
  )
}

function CheckIcon() {
  return <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-xs text-cyan-200">✓</span>
}

export default function AIBootcampPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#05060a] text-white selection:bg-cyan-500/30">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-15%] top-[-20%] h-[720px] w-[720px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute right-[-20%] top-[12%] h-[860px] w-[860px] rounded-full bg-indigo-500/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[25%] h-[620px] w-[620px] rounded-full bg-emerald-400/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_top,black,transparent_68%)]" />
      </div>

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05060a]/78 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2" aria-label="AIOW home">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[11px] font-black tracking-tighter text-black">AI</div>
            <span className="font-bold tracking-wider">AIOW.io</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
            <a href="#programma" className="transition hover:text-white">Programma</a>
            <a href="#locaties" className="transition hover:text-white">Locaties</a>
            <a href="#pakketten" className="transition hover:text-white">Pakketten</a>
            <a href="#intake" className="transition hover:text-white">Intake</a>
          </div>
          <a href={`https://wa.me/31621898039?text=${whatsappText}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90">
            Plan intake
          </a>
        </div>
      </nav>

      <main className="relative z-10 pt-24">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.04fr_0.96fr] lg:py-28">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1.5 text-sm text-cyan-100 shadow-[0_0_32px_rgba(34,211,238,0.16)]">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              AI Bootcamp voor bedrijven
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Een dag op de boot. Een concreet AI-plan voor je bedrijf.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/66 sm:text-xl">
              Breng je team in één dag van losse AI-interesse naar praktische toepassingen, betere workflows en eerste agent-kansen. Op de boot, bij AIOW of bij jullie op kantoor.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={`https://wa.me/31621898039?text=${whatsappText}`} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-8 py-4 text-center font-semibold text-black shadow-[0_0_42px_rgba(255,255,255,0.18)] transition hover:scale-[1.02] hover:bg-white/90">
                Boek een intake
              </a>
              <a href="#programma" className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10">
                Bekijk de opbouw
              </a>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm text-white/60 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><strong className="block text-2xl text-white">1 dag</strong>praktisch programma</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><strong className="block text-2xl text-white">6-16</strong>deelnemers</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><strong className="block text-2xl text-white">30/60/90</strong>actieplan</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.2rem] bg-gradient-to-br from-cyan-400/20 via-indigo-500/10 to-transparent blur-2xl" />
            <StaticCard className="relative overflow-hidden p-0">
              <div className="border-b border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between text-sm text-white/55">
                  <span>AIOW Bootcamp cockpit</span>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-200">Boekbaar</span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="rounded-3xl border border-white/10 bg-[#060b12] p-6 shadow-2xl">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">Locatie</p>
                      <h2 className="mt-2 text-2xl font-semibold">Boot · Kantoor · On-site</h2>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-3xl">⛵</div>
                  </div>
                  <div className="space-y-3">
                    {['Processen scannen', 'AI-kansen prioriteren', 'Workflows ontwerpen', 'Agent-roadmap maken'].map((item, index) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-sm text-white/70">{index + 1}</span>
                        <span className="font-medium text-white/86">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="text-white/45">Eindproduct</span>
                    <strong className="mt-1 block text-white">AI-kansenrapport</strong>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="text-white/45">Vervolg</span>
                    <strong className="mt-1 block text-white">Sprint mogelijk</strong>
                  </div>
                </div>
              </div>
            </StaticCard>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/70">Waarom nu</p>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Iedereen gebruikt inmiddels AI. Bijna niemand heeft het goed georganiseerd.</h2>
            </div>
            <StaticCard className="text-lg leading-8 text-white/68">
              In veel bedrijven gebeurt AI versnipperd: losse prompts, losse tools, geen afspraken over data, en geen zicht op de processen waar AI echt geld of tijd oplevert. De bootcamp brengt structuur. We kijken naar het werk zelf en bepalen wat je team morgen anders kan doen.
            </StaticCard>
          </div>
        </section>

        <section id="programma" className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-indigo-200/70">Programma</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Een werkdag met resultaat, geen inspiratiesessie zonder vervolg.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dayPlan.map((step) => (
              <StaticCard key={step.time} className="min-h-[230px]">
                <span className="text-sm font-mono text-cyan-200/70">{step.time}</span>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{step.text}</p>
              </StaticCard>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/70">Resultaat</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em]">Wat je team aan het einde van de dag heeft.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                  <CheckIcon />
                  <span className="text-white/76">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="locaties" className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200/70">Locaties</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Kies de setting die het beste werkt voor je team.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ['Op de boot', 'Voor directiedagen, innovatiedagen en teams die uit de dagelijkse drukte moeten stappen. Besloten, scherp en memorabel.', '⛵'],
              ['Bij AIOW op kantoor', 'Voor teams die een praktische werksessie willen met focus, schermen en directe technische verdieping.', '🏢'],
              ['Bij jullie op locatie', 'Voor grotere groepen, eigen systemen en teams die de bootcamp willen koppelen aan een interne werkdag.', '📍'],
            ].map(([title, text, icon]) => (
              <StaticCard key={title} className="min-h-[260px]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/8 text-3xl">{icon}</div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-white/62">{text}</p>
              </StaticCard>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/70">Use-cases</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">We werken aan taken die jullie team herkent.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/20 hover:bg-white/[0.065]">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pakketten" className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-indigo-200/70">Pakketten</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Van eerste richting tot werkende AI-workflow.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/55">Indicatieve prijzen excl. btw. Na de intake maken we het format passend op team, locatie en gewenste output.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {packages.map((pkg) => (
              <StaticCard key={pkg.name} className={`relative flex min-h-[440px] flex-col ${pkg.featured ? 'border-cyan-300/35 bg-cyan-300/[0.08]' : ''}`}>
                <span className="mb-5 w-fit rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold text-white/70">{pkg.tag}</span>
                <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/58">{pkg.bestFor}</p>
                <div className="mt-6 text-3xl font-semibold tracking-[-0.035em]">{pkg.price}</div>
                <ul className="mt-7 space-y-3 text-sm text-white/66">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex gap-2"><CheckIcon /> <span>{item}</span></li>
                  ))}
                </ul>
                <a href={`mailto:jeroen@aiow.io?subject=${mailSubject}&body=${mailBody}`} className="mt-auto rounded-xl border border-white/15 bg-white/8 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-black">
                  Vraag voorstel aan
                </a>
              </StaticCard>
            ))}
          </div>
        </section>

        <section id="intake" className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/70">Boeken</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Plan eerst een korte intake.</h2>
              <p className="mt-6 text-lg leading-8 text-white/62">In 20 minuten bepalen we welk format past: boot, kantoor, halve dag, volledige dag of bootcamp met implementatiesprint.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`https://wa.me/31621898039?text=${whatsappText}`} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-6 py-4 text-center font-semibold text-black transition hover:bg-white/90">WhatsApp Jeroen</a>
                <a href={`mailto:jeroen@aiow.io?subject=${mailSubject}&body=${mailBody}`} className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold transition hover:bg-white/10">Stuur e-mail</a>
              </div>
            </div>
            <StaticCard className="p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <h3 className="text-2xl font-semibold">Intakegegevens</h3>
                  <p className="mt-2 text-sm text-white/50">Deze velden sturen we in de aanvraag mee.</p>
                </div>
                <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/60">2 min</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {['Bedrijfsnaam', 'Naam contactpersoon', 'E-mail', 'Telefoon', 'Aantal deelnemers', 'Gewenste periode'].map((field) => (
                  <label key={field} className="block">
                    <span className="mb-2 block text-sm text-white/55">{field}</span>
                    <input className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/50" placeholder={field} />
                  </label>
                ))}
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm text-white/55">Voorkeur locatie</span>
                  <select className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50" defaultValue="">
                    <option value="" disabled>Maak een keuze</option>
                    <option>Op de boot</option>
                    <option>Bij AIOW op kantoor</option>
                    <option>Bij ons op locatie</option>
                    <option>Nog niet zeker</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm text-white/55">Wat moet de bootcamp opleveren?</span>
                  <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/50" placeholder="Bijvoorbeeld: AI-kansen vinden, sales versnellen, administratie automatiseren, team trainen, eerste agent-roadmap." />
                </label>
              </div>
              <p className="mt-5 text-xs leading-5 text-white/38">Formulier is klaar als intake-UI. Voor directe boekingen gebruiken de knoppen nu WhatsApp en e-mail, zodat leads vandaag al binnenkomen.</p>
            </StaticCard>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <StaticCard key={question}>
                <h3 className="text-xl font-semibold">{question}</h3>
                <p className="mt-4 leading-7 text-white/60">{answer}</p>
              </StaticCard>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <StaticCard className="relative overflow-hidden py-14 sm:py-18">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Laat je team één dag scherp werken aan AI die morgen bruikbaar is.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">Stuur een bericht. Dan plannen we de intake en prikken we de juiste locatie: boot, AIOW kantoor of bij jullie.</p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a href={`https://wa.me/31621898039?text=${whatsappText}`} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90">Plan intake via WhatsApp</a>
              <a href={`mailto:jeroen@aiow.io?subject=${mailSubject}&body=${mailBody}`} className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold transition hover:bg-white/10">Mail aanvraag</a>
            </div>
          </StaticCard>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#020205] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-sm text-white/45 md:flex-row">
          <Link href="/" className="font-bold text-white/70">AIOW.io</Link>
          <span>© {new Date().getFullYear()} AIOW BV · AI Bootcamp voor bedrijven</span>
        </div>
      </footer>
    </div>
  )
}
