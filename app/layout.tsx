import type { Metadata } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import './globals.css'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const ui = Inter({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
})

const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aiow.io'),
  title: {
    default: 'AIOW · Leer AI. Bouw wat werkt. Schaal met controle.',
    template: '%s | AIOW',
  },
  description:
    'AIOW helpt Nederlandse bedrijven AI begrijpen, één waardevolle workflow bouwen en doorgroeien naar een beheerd AI-team.',
  applicationName: 'AIOW',
  authors: [{ name: 'AIOW BV', url: 'https://aiow.io' }],
  creator: 'AIOW BV',
  publisher: 'AIOW BV',
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" data-theme="light" className={`${ui.variable} ${serif.variable}`}>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
