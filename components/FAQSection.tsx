const FAQ: { q: string; a: string }[] = [
  {
    q: 'Wat als AI verkeerd advies geeft?',
    a: 'We bouwen AI die voorstelt en mensen die beslissen. Bij klantcontact controleert u de toon vooraf; bij planning houdt uw planner het laatste woord. En we monitoren live wat het systeem doet.',
  },
  {
    q: 'Blijft mijn data van mij?',
    a: 'Ja. Uw data staat in uw omgeving, u bent eigenaar, en we trainen er geen modellen van derden mee. Bij vertrek neemt u alles mee.',
  },
  {
    q: 'Past dit bij mijn bestaande systemen?',
    a: 'Dat is het uitgangspunt. We sluiten aan op wat u al gebruikt: WhatsApp, uw agenda, uw boekhoudpakket, uw website. U hoeft niet over op iets nieuws.',
  },
  {
    q: 'Ik heb geen IT-afdeling. Is dat een probleem?',
    a: 'Dat hoeft niet. We richten eigenaarschap, techniek, hosting en onderhoud zo in dat een klein MKB-team ermee kan werken. Eén medewerker moet wel beschikbaar zijn voor inhoudelijke keuzes en acceptatie.',
  },
  {
    q: 'AVG en de EU AI Act: wat betekent dat voor mij?',
    a: 'Wij bouwen er standaard op: dataminimalisatie, menselijke controle waar de wet erom vraagt, en documentatie die u kunt laten zien als iemand ernaar vraagt.',
  },
  {
    q: 'Wat als jullie er morgen mee stoppen?',
    a: 'U krijgt eigendom van code en data, draaiend op standaard bouwstenen die elke ontwikkelaar kan overnemen. Continuïteitsafspraken leggen we vast in het contract.',
  },
  {
    q: 'Hoe snel zie ik resultaat?',
    a: 'Een Startmodule / Pilot duurt meestal 4 tot 6 weken. Aan het einde staat één afgebakende workflow die met afgesproken bronnen en representatieve scenario’s is getest. Productiedata of klantcontact wordt alleen gebruikt wanneer scope, privacy en goedkeuring dat toelaten.',
  },
  {
    q: 'Wat kost het als het groter wordt?',
    a: 'Uitbreiden gebeurt in dezelfde stijl: afgebakend, vaste prijs vooraf, per stap beslissen. U zit nergens aan vast.',
  },
  {
    q: 'Vervangt dit mijn mensen?',
    a: 'Nee. Het haalt het herhaalwerk weg zodat uw mensen toekomen aan het werk waarvoor klanten u bellen.',
  },
]

export { FAQ }

/**
 * FAQ als native <details>/<summary>: werkt zonder JS, één tegelijk open via name-attribuut.
 */
export default function FAQSection() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-hairline border-y border-hairline">
      {FAQ.map((item) => (
        <details key={item.q} name="faq" className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium marker:hidden [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="text-ink-40 transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-[60ch] leading-relaxed text-ink-60">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
