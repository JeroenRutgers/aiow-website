'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const LINKS = [
  { href: '/#cases', label: 'Cases' },
  { href: '/voor-mkb', label: 'Voor MKB' },
  { href: '/ai-bootcamp', label: 'AI Bootcamp' },
  { href: '/over-aiow', label: 'Over AIOW' },
]

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-500 ${
        scrolled || open ? 'border-hairline bg-canvas/90' : 'border-transparent bg-canvas/75'
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
              className="text-sm font-medium text-ink-60 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full bg-terra px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-terra-deep"
          >
            Plan kennismaking
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
              className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-300 ${open ? 'translate-y-[5.5px] rotate-45' : ''}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-ink transition-transform duration-300 ${open ? '-translate-y-[5.5px] -rotate-45' : ''}`}
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
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block rounded-full bg-terra px-6 py-3 text-base font-semibold text-white"
          >
            Plan kennismaking
          </Link>
        </div>
      )}
    </header>
  )
}
