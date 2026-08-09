'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const LINKS = [
  { href: '/diensten', label: 'Diensten' },
  { href: '/workflows', label: 'Workflows' },
  { href: '/kennisbank', label: 'Kennisbank' },
  { href: '/#bewijs', label: 'Werkwijze' },
  { href: '/over-aiow', label: 'Over AIOW' },
]

export default function SiteNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const overHero = pathname === '/' && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        overHero
          ? 'border-white/15 bg-transparent text-white'
          : 'border-hairline bg-canvas/90 text-ink backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="font-serif text-xl font-semibold tracking-heading">
          AIOW<span className="text-terra">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                overHero ? 'text-white/75 hover:text-white' : 'text-ink-60 hover:text-ink'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/workflow-scan"
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              overHero
                ? 'bg-white text-[#171411] hover:bg-[#ef9c6d]'
                : 'bg-terra text-white hover:bg-terra-deep'
            }`}
          >
            Gratis Workflow Scan
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
          className="flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full transition-transform duration-300 ${
                overHero ? 'bg-white' : 'bg-ink'
              } ${open ? 'translate-y-[5.5px] rotate-45' : ''}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full transition-transform duration-300 ${
                overHero ? 'bg-white' : 'bg-ink'
              } ${open ? '-translate-y-[5.5px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-canvas px-5 pb-6 pt-2 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/workflow-scan"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block rounded-full bg-terra px-6 py-3 text-base font-semibold text-white"
          >
            Gratis Workflow Scan
          </Link>
        </div>
      )}
    </header>
  )
}
