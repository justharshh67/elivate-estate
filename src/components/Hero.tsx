import { brand, hero, stats } from '../data/content'
import { ArrowRight, Chart, Check, Sparkle } from './Icons'

const signalCards = [
  {
    tag: 'New enquiry',
    title: '3 bed villa · Westlake, TX',
    meta: 'Google Ads · Qualified',
    value: '$895k',
    time: '12 sec ago',
    accent: 'text-gold',
  },
  {
    tag: 'Viewing booked',
    title: '2 bed loft · Downtown',
    meta: 'WhatsApp · Confirmed',
    value: 'Sat 11:30',
    time: '4 min ago',
    accent: 'text-sage',
  },
  {
    tag: 'Valuation request',
    title: 'Seller · 4 bed family home',
    meta: 'Organic search · High intent',
    value: '$1.24M est.',
    time: '11 min ago',
    accent: 'text-gold-soft',
  },
]

const bars = [34, 52, 41, 68, 58, 79, 92, 74, 86, 100]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      {/* ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-45 blur-[120px]"
          style={{
            background:
              'radial-gradient(circle, rgba(212,175,106,0.22) 0%, rgba(212,175,106,0) 68%)',
          }}
        />
        <div
          className="absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full opacity-30 blur-[110px]"
          style={{
            background:
              'radial-gradient(circle, rgba(127,178,163,0.2) 0%, rgba(127,178,163,0) 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '68px 68px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 78%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 78%)',
          }}
        />
      </div>

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="flex flex-col items-start">
          <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-line/80 bg-ink-800/60 px-3.5 py-1.5 text-[10px] font-medium tracking-[0.14em] text-gold/90 uppercase backdrop-blur sm:text-[11px] sm:tracking-[0.18em]">
            <Sparkle className="size-3.5 shrink-0" />
            <span className="truncate">{hero.eyebrow}</span>
          </div>

          <h1 className="mt-7 font-display text-[2.05rem] leading-[1.08] text-mist sm:text-5xl sm:leading-[1.05] lg:text-[4.1rem]">
            {hero.headline[0]}
            <br />
            <span className="text-gradient-gold">{hero.headline[1]}</span>
          </h1>

          <p className="mt-6 flex items-center gap-3 font-display text-lg text-gold/90 italic sm:text-xl">
            <span aria-hidden="true" className="h-px w-8 bg-gold/50" />
            {brand.tagline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-[1.12rem]">
            {hero.subhead}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-soft via-gold to-gold-deep px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_18px_50px_-20px_rgba(212,175,106,0.85)] transition-shadow duration-300 hover:shadow-[0_22px_60px_-18px_rgba(212,175,106,0.95)]"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-line bg-ink-800/50 px-7 py-3.5 text-sm font-semibold text-mist/90 transition-colors duration-300 hover:border-gold/50 hover:text-gold"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5">
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2 text-sm text-muted">
                <Check className="size-4 text-gold" />
                {bullet}
              </li>
            ))}
          </ul>

          <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-gold/25 bg-gold/[0.07] px-4 py-2 text-[13px] font-medium text-gold">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-gold/70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-gold" />
            </span>
            {hero.note}
          </p>

          <dl className="mt-12 grid w-full max-w-2xl grid-cols-2 gap-x-5 gap-y-7 border-t border-line/80 pt-9 sm:grid-cols-4 sm:gap-x-6">
            {stats.map((stat) => (
              <div key={stat.label} data-reveal className="min-w-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl text-mist sm:text-[2.1rem]">
                  {stat.value}
                </dd>
                <p className="mt-1.5 text-[12.5px] leading-snug text-dim sm:text-[13px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        {/* visual: live signal panel */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none" data-reveal="scale">
          <div className="relative [perspective:1400px]">
            <div className="relative rounded-[2rem] border border-line/80 bg-gradient-to-b from-ink-800/90 to-ink-900/90 p-5 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between border-b border-line/70 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-gold/70" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-gold" />
                  </span>
                  <span className="text-[13px] font-medium text-mist/85">Live lead feed</span>
                </div>
                <span className="rounded-full border border-line bg-ink-700/60 px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] text-dim uppercase">
                  {brand.short} CRM
                </span>
              </div>

              <ul className="mt-4 space-y-3">
                {signalCards.map((card, i) => (
                  <li
                    key={card.title}
                    className="group rounded-2xl border border-line/70 bg-ink-800/60 p-4 transition-colors duration-300 hover:border-gold/30"
                    style={{ animation: `float ${8 + i * 2}s ease-in-out ${i * 0.6}s infinite` }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className={`text-[10px] font-semibold tracking-[0.16em] uppercase ${card.accent}`}>
                        {card.tag}
                      </span>
                      <span className="text-[11px] text-dim">{card.time}</span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-mist">{card.title}</p>
                    <div className="mt-2.5 flex items-center justify-between">
                      <span className="text-[11px] text-dim">{card.meta}</span>
                      <span className="font-display text-sm text-mist/90">{card.value}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-2xl border border-line/70 bg-ink-800/40 p-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[13px] font-medium text-mist/85">
                    <Chart className="size-4 text-gold" />
                    Qualified leads / week
                  </span>
                  <span className="font-display text-sm text-gold">+218%</span>
                </div>
                <div className="mt-4 flex h-20 items-end gap-1.5">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-gold/25 to-gold/80 transition-all duration-500 hover:from-gold/45 hover:to-gold-soft"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="mt-2.5 flex justify-between text-[10px] tracking-[0.12em] text-dim uppercase">
                  <span>Week 1</span>
                  <span>Week 10</span>
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] opacity-60 blur-3xl"
            style={{
              background:
                'radial-gradient(60% 50% at 70% 25%, rgba(212,175,106,0.18), transparent 70%)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
