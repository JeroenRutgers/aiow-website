'use client'

import { useEffect, useRef, useState } from 'react'

type GlimpHeroVideoProps = {
  src: string
  poster: string
  className?: string
  srcWebm?: string
}

export default function GlimpHeroVideo({ src, poster, className, srcWebm }: GlimpHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || reducedMotion !== false) return
    const attempt = video.play()
    if (attempt) attempt.catch(() => setFailed(true))
  }, [reducedMotion])

  // Reduced motion of autoplay geblokkeerd: statische poster
  if (reducedMotion || failed) {
    /* eslint-disable-next-line @next/next/no-img-element */
    return <img src={poster} alt="" aria-hidden="true" className={className} />
  }

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay
      muted
      playsInline
      loop
      preload="metadata"
      aria-hidden="true"
      onError={() => setFailed(true)}
    >
      {/* MP4 EERST: iOS Safari pakt de eerste bruikbare source */}
      <source src={src} type="video/mp4" />
      {srcWebm && <source src={srcWebm} type="video/webm" />}
    </video>
  )
}
