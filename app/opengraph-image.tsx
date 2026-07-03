import { ImageResponse } from 'next/og'

export const alt = 'AIOW · AI voor het MKB, werkend in 4 tot 6 weken'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// OG-banner in huisstijl: canvas-achtergrond, ink-typografie, terracotta accent.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FAF7F2',
          color: '#211C16',
          padding: '72px 80px',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ fontSize: 40, fontWeight: 700, display: 'flex' }}>
            AIOW<span style={{ color: '#D97D4A' }}>.</span>
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: 'rgba(33, 28, 22, 0.6)',
              display: 'flex',
            }}
          >
            AI voor het MKB
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              fontWeight: 600,
              maxWidth: 980,
              display: 'flex',
            }}
          >
            AI dat vandaag werkt. Voor de ondernemer die vandaag klanten heeft.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 56, height: 5, background: '#D97D4A', display: 'flex' }} />
            <div style={{ fontSize: 28, color: 'rgba(33, 28, 22, 0.6)', display: 'flex' }}>
              Werkend in 4 tot 6 weken · vaste pilotprijs · live bij 6+ klanten
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            color: 'rgba(33, 28, 22, 0.4)',
          }}
        >
          <div style={{ display: 'flex' }}>aiow.io</div>
          <div style={{ display: 'flex' }}>Gebouwd in Nederland</div>
        </div>
      </div>
    ),
    size
  )
}
