type DustParticlesProps = { className?: string }

const PARTICLES = [
  { cx: 12, cy: 30, r: 0.5, d: 14, delay: 0 },
  { cx: 28, cy: 55, r: 0.35, d: 18, delay: 2 },
  { cx: 41, cy: 22, r: 0.55, d: 16, delay: 5 },
  { cx: 55, cy: 68, r: 0.3, d: 20, delay: 1 },
  { cx: 63, cy: 38, r: 0.5, d: 15, delay: 7 },
  { cx: 74, cy: 60, r: 0.4, d: 19, delay: 3 },
  { cx: 85, cy: 28, r: 0.55, d: 17, delay: 9 },
  { cx: 92, cy: 50, r: 0.3, d: 21, delay: 4 },
]

export default function DustParticles({ className }: DustParticlesProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {PARTICLES.map((p, i) => (
        <circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r={p.r}
          fill="#faf7f2"
          opacity="0"
          className="dust-particle"
          style={{ animationDuration: `${p.d}s`, animationDelay: `${p.delay}s` }}
        />
      ))}
    </svg>
  )
}
