import { audienceLabels } from '../data/content'

export default function TrustBar() {
  const row = [...audienceLabels, ...audienceLabels]
  return (
    <section className="relative border-y border-line/70 bg-ink-900/60 py-8">
      <div className="container-x">
        <p className="text-center text-[11px] font-medium tracking-[0.24em] text-dim uppercase">
          One industry only — real estate, from agents to developers
        </p>
      </div>

      <div
        className="relative mt-6 overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-14 pr-14">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-base tracking-[0.2em] whitespace-nowrap text-mist/35 transition-colors duration-300 hover:text-gold/80 sm:text-lg"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
