'use client'

import { useReducedMotion } from 'framer-motion'

/**
 * AgentFlow — hero proof visual.
 *
 * Custom SVG line drawing of an agentic workflow:
 * Trigger → AI agent → Human approval → Output.
 *
 * No external libraries, no stock imagery. Editorial palette
 * (ink, slate, copper, cream). Subtle motion via CSS keyframes,
 * disabled when prefers-reduced-motion is set.
 */
export default function AgentFlow() {
  const reduce = useReducedMotion()

  return (
    <figure
      role="img"
      aria-label="Voorbeeld van een AI-workflow: klantvraag binnen, AI agent stelt antwoord op, mens keurt goed, antwoord verstuurd"
      className="relative w-full"
    >
      <div className="rounded-2xl border border-[color:var(--rule)] bg-[color:var(--cream)] p-5 sm:p-7">
        {/* meta header */}
        <div
          className="mb-5 flex items-center justify-between"
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={`block h-2 w-2 rounded-full bg-[color:var(--copper)] ${
                reduce ? '' : 'agentflow-pulse'
              }`}
            />
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--slate)]">
              Workflow · live
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
            Voorbeeld
          </span>
        </div>

        {/* diagram */}
        <svg
          viewBox="0 0 520 220"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
          className="block w-full"
          style={{ maxHeight: 280 }}
        >
          <defs>
            <marker
              id="af-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path
                d="M1,1 L9,5 L1,9"
                fill="none"
                stroke="rgba(20,20,19,0.55)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>

          {/* connectors */}
          {[
            { x1: 96, x2: 176, y: 110 },
            { x1: 264, x2: 344, y: 110 },
            { x1: 432, x2: 500, y: 110 },
          ].map((c, i) => (
            <line
              key={i}
              x1={c.x1}
              x2={c.x2}
              y1={c.y}
              y2={c.y}
              stroke="rgba(20,20,19,0.30)"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              markerEnd="url(#af-arrow)"
              className={reduce ? '' : `agentflow-dash agentflow-dash-${i}`}
            />
          ))}

          {/* node 1 — Klantvraag (WhatsApp / mail) */}
          <g transform="translate(20, 60)">
            <rect
              x="0"
              y="0"
              width="76"
              height="100"
              rx="6"
              fill="#faf9f5"
              stroke="rgba(20,20,19,0.20)"
              strokeWidth="1"
            />
            <rect
              x="14"
              y="20"
              width="48"
              height="6"
              rx="2"
              fill="rgba(20,20,19,0.55)"
            />
            <rect
              x="14"
              y="32"
              width="34"
              height="6"
              rx="2"
              fill="rgba(20,20,19,0.20)"
            />
            <rect
              x="14"
              y="50"
              width="48"
              height="3"
              rx="1"
              fill="rgba(20,20,19,0.10)"
            />
            <rect
              x="14"
              y="58"
              width="38"
              height="3"
              rx="1"
              fill="rgba(20,20,19,0.10)"
            />
            <rect
              x="14"
              y="66"
              width="46"
              height="3"
              rx="1"
              fill="rgba(20,20,19,0.10)"
            />
            <text
              x="38"
              y="92"
              textAnchor="middle"
              fontSize="8"
              fontFamily="var(--font-ui)"
              fill="rgba(20,20,19,0.55)"
              letterSpacing="0.5"
            >
              KLANTVRAAG
            </text>
          </g>

          {/* node 2 — AI agent */}
          <g transform="translate(176, 50)">
            <rect
              x="0"
              y="0"
              width="88"
              height="120"
              rx="8"
              fill="#141413"
              stroke="#141413"
              strokeWidth="1"
            />
            <circle
              cx="44"
              cy="44"
              r="14"
              fill="none"
              stroke="#faf9f5"
              strokeWidth="1.5"
            />
            <circle
              cx="44"
              cy="44"
              r="3"
              fill="#8a6d3b"
              className={reduce ? '' : 'agentflow-pulse'}
            />
            <rect x="20" y="70" width="48" height="3" rx="1" fill="rgba(250,249,245,0.65)" />
            <rect x="20" y="78" width="36" height="3" rx="1" fill="rgba(250,249,245,0.45)" />
            <rect x="20" y="86" width="42" height="3" rx="1" fill="rgba(250,249,245,0.45)" />
            <text
              x="44"
              y="108"
              textAnchor="middle"
              fontSize="8"
              fontFamily="var(--font-ui)"
              fill="rgba(250,249,245,0.85)"
              letterSpacing="0.5"
            >
              AI AGENT
            </text>
          </g>

          {/* node 3 — Mens (approval) */}
          <g transform="translate(344, 60)">
            <rect
              x="0"
              y="0"
              width="88"
              height="100"
              rx="6"
              fill="#faf9f5"
              stroke="rgba(20,20,19,0.20)"
              strokeWidth="1"
            />
            <circle
              cx="44"
              cy="28"
              r="8"
              fill="none"
              stroke="rgba(20,20,19,0.55)"
              strokeWidth="1.2"
            />
            <path
              d="M30 50 Q44 42 58 50"
              fill="none"
              stroke="rgba(20,20,19,0.55)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* approve check */}
            <circle
              cx="64"
              cy="50"
              r="9"
              fill="#8a6d3b"
              opacity="0.95"
            />
            <path
              d="M59 50 L63 54 L70 47"
              fill="none"
              stroke="#faf9f5"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="44"
              y="86"
              textAnchor="middle"
              fontSize="8"
              fontFamily="var(--font-ui)"
              fill="rgba(20,20,19,0.55)"
              letterSpacing="0.5"
            >
              GOEDKEURING
            </text>
          </g>

          {/* node 4 — Output */}
          <g transform="translate(500, 60)" opacity="0">
            {/* anchor for arrow */}
          </g>
        </svg>

        {/* readable labels under diagram */}
        <ol
          className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-3"
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          {[
            { k: '01', t: 'Trigger', d: 'Klantvraag via mail of WhatsApp' },
            { k: '02', t: 'AI-agent', d: 'Begrijpt vraag, koppelt project, stelt antwoord op' },
            { k: '03', t: 'Mens', d: 'Bekijkt, past aan, keurt goed' },
          ].map((s) => (
            <li
              key={s.k}
              className="border-t border-[color:var(--rule)] pt-3"
            >
              <p className="text-[11px] uppercase tracking-[0.14em] text-[color:var(--slate)]">
                {s.k}
              </p>
              <p
                className="mt-1 text-[14px] font-medium text-[color:var(--ink)]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {s.t}
              </p>
              <p className="mt-1 text-[12px] leading-[1.45] text-[color:var(--muted)]">
                {s.d}
              </p>
            </li>
          ))}
        </ol>

        {/* result strip */}
        <div
          className="mt-5 flex items-center justify-between rounded-md bg-[color:var(--rule-soft)] px-4 py-3"
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--copper)] text-[10px] text-[color:var(--cream)]"
            >
              ✓
            </span>
            <span className="text-[12px] uppercase tracking-[0.14em] text-[color:var(--slate)]">
              Resultaat
            </span>
            <span
              className="text-[14px] text-[color:var(--ink)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Antwoord verstuurd, taak aangemaakt, klant geïnformeerd.
            </span>
          </div>
          <span className="hidden text-[12px] text-[color:var(--muted)] sm:inline">
            ~ 38 sec
          </span>
        </div>
      </div>

      <figcaption className="sr-only">
        Voorbeeld van een AI-workflow zoals wij die in de bootcamp samen met u
        ontwerpen. Trigger, AI-agent, mens-in-de-loop, en concreet resultaat.
      </figcaption>

      <style>{`
        @keyframes agentflow-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .agentflow-pulse {
          animation: agentflow-pulse 2.6s ease-in-out infinite;
        }
        @keyframes agentflow-flow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -32; }
        }
        .agentflow-dash {
          animation: agentflow-flow 2.4s linear infinite;
        }
        .agentflow-dash-1 { animation-delay: 0.4s; }
        .agentflow-dash-2 { animation-delay: 0.8s; }
        @media (prefers-reduced-motion: reduce) {
          .agentflow-pulse, .agentflow-dash { animation: none; }
        }
      `}</style>
    </figure>
  )
}
