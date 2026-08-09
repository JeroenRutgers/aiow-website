import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Hoe AIOW persoonsgegevens verwerkt bij websitebezoek, contact en opdrachten.',
  alternates: { canonical: 'https://aiow.io/privacy' },
}

const sections = [
  {
    title: '1. Wie is verantwoordelijk?',
    paragraphs: [
      'AIOW B.V. is verantwoordelijk voor de verwerking van persoonsgegevens via deze website en tijdens een eerste contact. Voor privacyvragen, inzage of verwijdering kunt u schrijven naar jeroen@aiow.io.',
    ],
  },
  {
    title: '2. Welke gegevens verwerken we?',
    paragraphs: [
      'De openbare kennisbank en gratis Workflow Scan vragen geen naam, e-mailadres of bedrijfsgegevens. Antwoorden in de Workflow Scan blijven in uw browser en worden niet naar AIOW verzonden.',
      'Wanneer u zelf contact opneemt, kunnen we uw naam, zakelijke contactgegevens, bedrijfsnaam, bericht, afspraakgegevens en de informatie die u vrijwillig over een proces deelt verwerken.',
    ],
  },
  {
    title: '3. Waarom gebruiken we die gegevens?',
    paragraphs: [
      'We gebruiken contactgegevens om uw vraag te beantwoorden, een afspraak uit te voeren, een voorstel te maken, een opdracht te leveren en onze zakelijke administratie bij te houden. De grondslag is uw verzoek, de voorbereiding of uitvoering van een overeenkomst en waar nodig een wettelijke verplichting.',
    ],
  },
  {
    title: '4. Delen met dienstverleners',
    paragraphs: [
      'AIOW gebruikt leveranciers voor hosting, e-mail, agenda en zakelijke communicatie. Zij ontvangen alleen gegevens die nodig zijn voor hun taak en werken onder hun eigen voorwaarden of een verwerkersafspraak waar dat van toepassing is.',
      'De knoppen voor WhatsApp en Calendly openen een externe dienst nadat u daarop klikt. Vanaf dat moment gelden ook de privacyvoorwaarden van die dienst.',
    ],
  },
  {
    title: '5. Bewaartermijnen',
    paragraphs: [
      'Een niet-geconverteerde zakelijke aanvraag bewaren we maximaal twaalf maanden na het laatste inhoudelijke contact. Contracten, facturen en andere administratieve gegevens bewaren we zolang de wet dat verplicht. Projectdata krijgt per opdracht een afgesproken bewaartermijn en verwijderroute.',
    ],
  },
  {
    title: '6. Beveiliging en uw rechten',
    paragraphs: [
      'We beperken toegang tot systemen en accounts, gebruiken passende beveiligingsmaatregelen en richten klantprojecten in met zichtbare goedkeuringspunten. U kunt vragen om inzage, correctie, verwijdering, beperking, overdracht of bezwaar. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.',
    ],
  },
  {
    title: '7. Cookies en wijzigingen',
    paragraphs: [
      'Deze versie van de website plaatst zelf geen advertentie- of marketingcookies. Technisch noodzakelijke gegevens van hosting- of beveiligingsdiensten kunnen wel worden verwerkt. Wanneer we analytics of nieuwe formulieren toevoegen, werken we deze verklaring en eventuele toestemmingslaag eerst bij.',
      'Versie: 9 augustus 2026. Bij nieuwe formulieren, analytics of leveranciers werken we deze verklaring en de relevante toestemmingslaag bij.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <section className="platform-subhero">
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
          <p className="platform-kicker">Privacy</p>
          <h1 className="platform-title mt-5">Duidelijk over gegevens.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            Deze verklaring beschrijft de website en het eerste zakelijke contact. Een klantproject krijgt daarnaast eigen afspraken over toegang, opslag, bewaartermijn en verwijdering.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-2xl font-semibold tracking-heading md:text-3xl">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-ink/66">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}
