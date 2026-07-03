'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.28, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function AnimatedList({ items, className }: { items: string[]; className?: string }) {
  const ref = useRef<HTMLOListElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  const reduce = useReducedMotion()

  return (
    <motion.ol
      ref={ref}
      variants={container}
      initial={reduce ? 'show' : 'hidden'}
      animate={inView || reduce ? 'show' : 'hidden'}
      className={`space-y-2 ${className ?? ''}`}
    >
      {items.map((text, i) => (
        <motion.li key={text} variants={item} className="flex items-baseline gap-2.5 text-sm">
          <span className="font-mono text-[11px] tabular-nums text-terracotta">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-ink/85">{text}</span>
        </motion.li>
      ))}
    </motion.ol>
  )
}
