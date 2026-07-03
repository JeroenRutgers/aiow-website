import type { Metadata } from 'next'

import GlimpLanding from './_components/GlimpLanding'

export const metadata: Metadata = {
  title: 'Glimp · Tien regels ’s ochtends. Eén regel ’s avonds.',
  description:
    'Glimp is een dagelijks aandacht-anker voor iOS. Drie lijsten van tien, één regel per avond. Geen accounts, geen feed, alles blijft op je toestel.',
  alternates: { canonical: 'https://aiow.io/glimp' },
  openGraph: {
    title: 'Glimp · dagelijks aandacht-anker',
    description:
      'Tien regels ’s ochtends. Eén regel ’s avonds. Geen accounts, geen feed, alles blijft op je toestel.',
    url: 'https://aiow.io/glimp',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function GlimpPage() {
  return <GlimpLanding />
}
