import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface-sunken">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <p className="font-serif text-xl font-semibold">
              AIOW<span className="text-terra">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-60">
              AI dat vandaag werkt, voor het Nederlandse MKB. Gebouwd in Nederland, live bij echte
              klanten.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-16 gap-y-2 text-sm">
            <Link href="/#cases" className="py-1 text-ink-60 hover:text-ink">
              Cases
            </Link>
            <Link href="/voor-mkb" className="py-1 text-ink-60 hover:text-ink">
              Voor MKB
            </Link>
            <Link href="/ai-bootcamp" className="py-1 text-ink-60 hover:text-ink">
              AI Bootcamp
            </Link>
            <Link href="/over-aiow" className="py-1 text-ink-60 hover:text-ink">
              Over AIOW
            </Link>
            <Link href="/#contact" className="py-1 text-ink-60 hover:text-ink">
              Contact
            </Link>
            <a href="mailto:jeroen@aiow.io" className="py-1 text-ink-60 hover:text-ink">
              jeroen@aiow.io
            </a>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-hairline pt-6 text-xs text-ink-40 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} AIOW · Nederland</p>
          <p>AI voor het MKB · werkend in 4 tot 6 weken</p>
        </div>
      </div>
    </footer>
  )
}
