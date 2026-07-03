'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

import GlimpHeroVideo from './GlimpHeroVideo'
import IPhoneFrame from './IPhoneFrame'
import AnimatedList from './AnimatedList'
import DustParticles from './DustParticles'

const EASE = [0.16, 1, 0.3, 1] as const

const MANIFEST_ZINNEN = [
  'Vandaag glimpte ik het ochtendlicht.',
  'Tien dingen die ik wil.',
  'Eén regel voor het slapen.',
]

const OCHTEND_ITEMS = [
  'Rustiger wakker worden',
  'Een eigen werkkamer',
  'Drie maanden buffer',
  'Vaker zelf koken',
  'Een lange wandeling per week',
  'Italiaans leren',
  'Minder scherm na tien uur',
  'Een goed team om me heen',
  'De hypotheek rond',
  'Meer avonden zonder haast',
]

function Typewriter({ lines, className }: { lines: string[]; className?: string }) {
  const reduce = useReducedMotion()
  const [li, setLi] = useState(0)
  const [chars, setChars] = useState(0)

  useEffect(() => {
    if (reduce) return
    const line = lines[li]
    if (chars < line.length) {
      const t = setTimeout(() => setChars(chars + 1), 65)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setChars(0)
      setLi((li + 1) % lines.length)
    }, 2600)
    return () => clearTimeout(t)
  }, [chars, li, lines, reduce])

  if (reduce) return <p className={className}>{lines[0]}</p>
  return (
    <p className={className} aria-label={lines[li]}>
      {lines[li].slice(0, chars)}
      <span className="inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-terracotta" />
    </p>
  )
}

export default function GlimpLanding() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.8, ease: EASE },
  }

  return (
    <div className="bg-cream text-ink">
      {/* HERO */}
      <section className="relative h-svh min-h-[560px] overflow-hidden">
        <GlimpHeroVideo
          src="/glimp/hero.mp4"
          srcWebm="/glimp/hero.webm"
          poster="/glimp/hero-poster.jpg"
          className="cinematic-grade absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />
        <DustParticles className="absolute inset-0 h-full w-full" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.3 }}
            className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            Tien regels &rsquo;s ochtends.
            <br />
            E&eacute;n regel &rsquo;s avonds.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.8 }}
            className="mt-4 max-w-md text-lg text-cream/80"
          >
            Een dagelijks aandacht-anker. Geen magie, geen ruis.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 1.3 }}
            className="blur-behind mt-8 rounded-full px-5 py-2.5"
          >
            <Typewriter lines={MANIFEST_ZINNEN} className="font-mono text-sm text-cream" />
          </motion.div>
          <motion.a
            href="#download"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 1.6 }}
            className="mt-10 rounded-full bg-terracotta px-7 py-3 text-sm font-medium text-cream transition-transform duration-300 hover:scale-[1.03]"
          >
            Download op de App Store
          </motion.a>
        </div>
        <div
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/60 motion-safe:animate-bounce"
          aria-hidden
        >
          ↓
        </div>
      </section>

      {/* SECTIE 1: OCHTEND */}
      <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-24 sm:grid-cols-2 sm:py-32">
        <motion.div {...fadeUp}>
          <p className="text-sm font-medium uppercase tracking-widest text-terracotta">01 · Ochtend</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Drie lijsten van tien. Tekst of stem.
          </h2>
          <p className="mt-4 text-ink/70">
            Tien dingen die je wil. Tien waar je nu dankbaar voor bent. Tien die je graag doet. Vijf
            minuten, klaar.
          </p>
        </motion.div>
        <IPhoneFrame>
          <div className="px-5 pb-6 pt-14">
            <p className="mb-3 font-mono text-xs text-ink/50">Dingen die ik wil</p>
            <AnimatedList items={OCHTEND_ITEMS} />
          </div>
        </IPhoneFrame>
      </section>

      {/* SECTIE 2: AVOND */}
      <section className="bg-dusk py-24 text-cream sm:py-32">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 sm:grid-cols-2">
          <IPhoneFrame dark className="order-2 sm:order-1">
            <div className="flex h-full flex-col justify-center px-5 pt-10">
              <p className="mb-3 font-mono text-xs text-cream/40">21:47</p>
              <motion.div {...fadeUp}>
                <Typewriter
                  lines={['Vandaag glimpte ik: nummer vier van maart is er.']}
                  className="font-mono text-sm leading-relaxed text-cream/90"
                />
              </motion.div>
            </div>
          </IPhoneFrame>
          <motion.div {...fadeUp} className="order-1 sm:order-2">
            <p className="text-sm font-medium uppercase tracking-widest text-terracotta">02 · Avond</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              E&eacute;n regel over wat je zag terugkomen.
            </h2>
            <p className="mt-4 text-cream/60">Geen dagboek. Geen verplichting. E&eacute;n observatie.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTIE 3: LOOP */}
      <section className="px-6 py-24 text-center sm:py-32">
        <motion.div {...fadeUp} className="mx-auto max-w-xl">
          <div className="mb-8 flex items-center justify-center gap-4" aria-hidden>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-3 w-3 rounded-full bg-terracotta"
                animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.25, 1] }}
                transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity, delay: i * 0.45 }}
              />
            ))}
          </div>
          <p className="text-sm font-medium uppercase tracking-widest text-terracotta">03 · Loop</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Wat je glimpt zie je vaker.
          </h2>
          <p className="mt-4 text-ink/70">
            Je brein filtert 99% van wat je tegenkomt weg. Glimp helpt je het deel zien waar je iets
            aan hebt. Je RAS doet de rest.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section id="download" className="px-6 pb-28 text-center">
        <motion.div {...fadeUp} className="mx-auto max-w-md">
          <h2 className="text-2xl font-semibold tracking-tight">Voor wie wil zien wat er al is.</h2>
          <p className="mt-3 text-ink/70">Geen accounts, geen feed, geen score. Alles blijft op je toestel.</p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3.5 text-sm font-medium text-cream motion-safe:animate-glimp-glow"
          >
            Download op de App Store
          </a>
        </motion.div>
      </section>

      <footer className="flex items-center justify-between border-t border-ink/10 px-6 py-8 text-sm text-ink/50">
        <span>© 2026 Glimp</span>
        <span className="flex gap-4">
          <Link href="/glimp/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <Link href="/cases/glimp" className="hover:text-ink">
            Een AIOW product →
          </Link>
        </span>
      </footer>
    </div>
  )
}
