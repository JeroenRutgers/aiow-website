const PHONE_DISPLAY = '+31 6 21 89 80 39'
const PHONE_DIGITS = '31621898039'
const MAIL = 'jeroen@aiow.io'

const whatsappText = encodeURIComponent(
  'Hoi Jeroen, ik wil graag een AI kennismaking van 30 minuten inplannen voor mijn bedrijf.'
)

/**
 * Contact/booking sectie. Cal.com embed volgt zodra het event is geconfigureerd;
 * tot die tijd zijn de drie directe kanalen de conversiepaden.
 */
export default function BookingSection() {
  return (
    <div className="mx-auto grid max-w-4xl gap-px border border-hairline bg-hairline md:grid-cols-3">
      <a
        href={`https://wa.me/${PHONE_DIGITS}?text=${whatsappText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-surface p-8 transition-colors hover:bg-surface-sunken"
      >
        <p className="kicker">WhatsApp</p>
        <p className="mt-2 font-medium">Direct een bericht</p>
        <p className="mt-1 text-sm text-ink-60">Meestal antwoord binnen een uur</p>
        <span className="mt-4 inline-block text-sm font-semibold text-terra-text transition-transform duration-300 group-hover:translate-x-1">
          Start gesprek →
        </span>
      </a>
      <a
        href={`mailto:${MAIL}?subject=${encodeURIComponent('AI kennismaking (30 min)')}`}
        className="group bg-surface p-8 transition-colors hover:bg-surface-sunken"
      >
        <p className="kicker">E-mail</p>
        <p className="mt-2 font-medium">{MAIL}</p>
        <p className="mt-1 text-sm text-ink-60">Antwoord binnen één werkdag</p>
        <span className="mt-4 inline-block text-sm font-semibold text-terra-text transition-transform duration-300 group-hover:translate-x-1">
          Stuur mail →
        </span>
      </a>
      <a href={`tel:+${PHONE_DIGITS}`} className="group bg-surface p-8 transition-colors hover:bg-surface-sunken">
        <p className="kicker">Telefoon</p>
        <p className="mt-2 font-medium">{PHONE_DISPLAY}</p>
        <p className="mt-1 text-sm text-ink-60">Op Nederlandse werktijden</p>
        <span className="mt-4 inline-block text-sm font-semibold text-terra-text transition-transform duration-300 group-hover:translate-x-1">
          Bel direct →
        </span>
      </a>
    </div>
  )
}
