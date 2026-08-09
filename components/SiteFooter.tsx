import Link from 'next/link'

const columns = [
  {
    title: 'Aanbod',
    links: [
      ['/workflow-scan', 'Gratis Workflow Scan'],
      ['/ai-workflow-lab', 'AI Workflow Lab'],
      ['/ai-bootcamp', 'AI Bootcamp'],
      ['/workflows', 'Startmodule / Pilot'],
      ['/diensten#managed-ai-workflow', 'Managed AI Workflow'],
    ],
  },
  {
    title: 'Leren',
    links: [
      ['/kennisbank', 'Kennisbank'],
      ['/kennisbank/wat-is-generatieve-ai', 'AI-basis'],
      ['/kennisbank/eerste-ai-workflow-kiezen', 'Eerste workflow kiezen'],
      ['/kennisbank/veilig-ai-gebruiken-met-klantdata', 'Veilig AI-gebruik'],
    ],
  },
  {
    title: 'AIOW',
    links: [
      ['/over-aiow', 'Over AIOW'],
      ['/#bewijs', 'Werkwijze'],
      ['/#contact', 'Contact'],
      ['mailto:jeroen@aiow.io', 'jeroen@aiow.io'],
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-[#171411] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr]">
          <div className="max-w-sm">
            <p className="font-serif text-3xl font-semibold tracking-heading">
              AIOW<span className="text-[#ef9c6d]">.</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Leer AI. Bouw wat werkt. Schaal met controle. Voor Nederlandse bedrijven die van
              losse ideeën naar een betrouwbaar systeem willen.
            </p>
            <Link href="/workflow-scan" className="button-primary button-primary--light mt-7">
              Doe de gratis Workflow Scan
            </Link>
          </div>
          <nav className="grid gap-8 sm:grid-cols-3" aria-label="Footer navigatie">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/35">{column.title}</p>
                <div className="mt-4 grid gap-3">
                  {column.links.map(([href, label]) => (
                    <Link key={href} href={href} className="text-sm text-white/62 transition-colors hover:text-white">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} AIOW BV · Hoofddorp · Nederland</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
            <Link href="/en" className="transition-colors hover:text-white">English overview</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
