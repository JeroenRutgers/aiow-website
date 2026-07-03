'use client'

import Link from 'next/link'
import { useState, type ReactNode } from 'react'

type GlowPulseButtonProps = {
  href: string
  children: ReactNode
  className?: string
}

/**
 * Primaire CTA: terracotta fill, witte semibold 18px tekst (AA large text),
 * zachte radiale glow-pulse via ::after — stopt na eerste interactie.
 */
export default function GlowPulseButton({ href, children, className }: GlowPulseButtonProps) {
  const [interacted, setInteracted] = useState(false)

  return (
    <Link
      href={href}
      onMouseEnter={() => setInteracted(true)}
      onFocus={() => setInteracted(true)}
      className={`group relative inline-flex items-center justify-center rounded-full bg-terra px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-terra-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra ${className ?? ''}`}
    >
      {!interacted && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-full bg-terra blur-xl"
          style={{ animation: 'glow-pulse 3s ease-in-out infinite' }}
        />
      )}
      {children}
    </Link>
  )
}
