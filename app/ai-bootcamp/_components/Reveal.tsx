'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'span' | 'li'
}

/**
 * Fade + lift in 200ms when the element scrolls into view.
 * Honours `prefers-reduced-motion`: in that case the content
 * renders immediately, with no transform or opacity animation.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  if (prefersReducedMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1], delay: delay / 1000 }}
    >
      {children}
    </MotionTag>
  )
}
