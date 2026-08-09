'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    const applyMotionPreference = () => {
      const video = videoRef.current
      if (!video) return

      if (media.matches) {
        video.pause()
        setPaused(true)
      }
    }

    applyMotionPreference()
    media.addEventListener('change', applyMotionPreference)
    return () => media.removeEventListener('change', applyMotionPreference)
  }, [])

  function togglePlayback() {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      void video.play()
      setPaused(false)
    } else {
      video.pause()
      setPaused(true)
    }
  }

  return (
    <section className="cinematic-hero" aria-labelledby="home-hero-title">
      <div className="cinematic-hero__media" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/aiow-agent-network-poster.jpg"
        >
          <source src="/media/aiow-agent-network.webm" type="video/webm" />
          <source src="/media/aiow-agent-network.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="cinematic-hero__wash" aria-hidden="true" />

      <div className="cinematic-hero__inner">
        <div className="cinematic-hero__copy">
          <p className="cinematic-hero__kicker">AIOW · praktische AI-systemen</p>
          <h1 id="home-hero-title">Van werkdruk naar werkende AI.</h1>
          <p className="cinematic-hero__intro">
            We vinden één waardevolle workflow, bouwen hem met menselijke goedkeuring en beheren wat
            in de praktijk werkt.
          </p>
          <div className="cinematic-hero__actions">
            <Link href="/workflow-scan" className="cinematic-hero__primary">
              Doe de gratis Workflow Scan
            </Link>
            <Link href="#workflow-proof" className="cinematic-hero__secondary">
              Bekijk de workflow
            </Link>
          </div>
        </div>

        <div className="cinematic-hero__signal" aria-label="Toelichting bij de visualisatie">
          <span className="cinematic-hero__signal-dot" aria-hidden="true" />
          <div>
            <strong>Vier agents. Eén menselijke beslisgate.</strong>
            <span>Visualisatie van gecontroleerde samenwerking</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="cinematic-hero__motion"
        onClick={togglePlayback}
        aria-label={paused ? 'Hero-video afspelen' : 'Hero-video pauzeren'}
      >
        <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
      </button>

      <a href="#home-products" className="cinematic-hero__scroll">
        Ontdek AIOW <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}
