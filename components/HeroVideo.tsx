'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type HeroVideoProps = {
  mp4Src: string
  webmSrc?: string
  poster: string
  className?: string
  children?: ReactNode
}

/**
 * Fullbleed video met poster-fallback.
 * - MP4 als EERSTE source (iOS Safari pakt de eerste bruikbare source)
 * - Bij prefers-reduced-motion of save-data: alleen poster, video laadt niet
 * - Fade-in vanaf poster zodra de video kan spelen (geen zwart frame)
 */
export default function HeroVideo({ mp4Src, webmSrc, poster, className, children }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showVideo, setShowVideo] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const connection = (navigator as unknown as { connection?: { saveData?: boolean } }).connection
    const update = () => setShowVideo(!media.matches && !connection?.saveData)
    const timer = window.setTimeout(update, 0)
    media.addEventListener('change', update)
    return () => {
      window.clearTimeout(timer)
      media.removeEventListener('change', update)
    }
  }, [])

  return (
    <div className={`relative overflow-hidden ${className ?? ''}`}>
      {/* Poster is altijd aanwezig als onderlaag */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: ready ? 1 : 0 }}
        >
          <source src={mp4Src} type="video/mp4" />
          {webmSrc && <source src={webmSrc} type="video/webm" />}
        </video>
      )}
      {/* Gradient onderaan voor leesbaarheid, geen zwarte overlay over het hele beeld */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
        style={{ background: 'linear-gradient(to top, rgb(33 28 22 / 0.55), transparent)' }}
        aria-hidden="true"
      />
      {children && <div className="relative z-10 h-full">{children}</div>}
    </div>
  )
}
