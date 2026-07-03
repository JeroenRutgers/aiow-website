'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'span' | 'li' | 'section'
}

/**
 * Fade + lift bij scroll-intersectie, cinematic ease.
 * Bij prefers-reduced-motion rendert de content direct, zonder transform.
 */
export default function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  if (prefersReducedMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: delay / 1000 }}
    >
      {children}
    </MotionTag>
  )
}
