import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy · Glimp',
  description: 'Glimp bewaart alles op je toestel. Geen accounts, geen tracking.',
  alternates: { canonical: 'https://aiow.io/glimp/privacy' },
}

export default function GlimpPrivacy() {
  return (
    <main className="px-6 py-24 pt-32">
      <div className="mx-auto max-w-[560px]">
        <p className="kicker">Privacy</p>
        <h1 className="mt-6 font-serif text-3xl font-light tracking-heading text-ink md:text-4xl">
          Alles blijft op je toestel.
        </h1>
        <div className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-ink-60">
          <p>
            Glimp heeft geen accounts, geen server en geen backend. Wat je invoert blijft op je
            iPhone staan. Wij zien het niet.
          </p>
          <p>
            Zet je iCloud-synchronisatie aan, dan gaat je data naar jouw eigen privé-database in
            iCloud (CloudKit) — onder jouw Apple-account, versleuteld door Apple, onbereikbaar voor
            ons. Uitzetten kan altijd in Instellingen.
          </p>
          <p>
            Inspreken gebeurt met spraakherkenning op je toestel waar dat kan. Microfoon en spraak
            zijn optioneel; de app werkt volledig zonder.
          </p>
          <p>
            Geen tracking pixels, geen analytics, geen cookies, geen advertenties. Er valt niets te
            verzamelen omdat we niets verzamelen.
          </p>
          <p>
            Meld je je aan voor bericht bij de release, dan bewaren we alleen je e-mailadres om je
            één keer te laten weten dat de app er is. Verder niets.
          </p>
          <p>
            Verwijder je de app (en staat synchronisatie uit), dan is je data weg. Met
            synchronisatie aan blijft hij in jouw iCloud staan tot jij hem daar verwijdert.
          </p>
        </div>
        <Link
          href="/glimp"
          className="mt-12 inline-block text-[17px] text-ink-60 transition-colors hover:text-ink"
        >
          ← Terug
        </Link>
      </div>
    </main>
  )
}
