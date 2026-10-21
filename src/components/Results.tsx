import { playbooks, promiseBlocks } from '../data/content'
import { Chart, Shield, Sparkle } from './Icons'
import { SectionHeading } from './ui'

const accentMap = {
  gold: {
    ring: 'from-gold/25 via-gold/5 to-transparent',
    text: 'text-gold',
    bar: 'bg-gradient-to-r from-gold-soft to-gold-deep',
  },
  sage: {
    ring: 'from-sage/25 via-sage/5 to-transparent',
    text: 'text-sage',
    bar: 'bg-gradient-to-r from-sage to-sage/60',
  },
  mist: {
    ring: 'from-mist/20 via-mist/5 to-transparent',
    text: 'text-mist/80',
    bar: 'bg-gradient-to-r from-mist/70 to-mist/30',
  },
} as const

export default function Results() {
  return (
    <section
      id="results"
      className="relative scroll-mt-24 border-y border-line/70 bg-ink-900/40 py-24 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px hairline" />

      <div className="container-x">
        <SectionHeading
          eyebrow="The growth model"
          title={
            <>
              What the funnel looks like when it is <span className="text-gold">built properly</span>
            </>
          }
          lead="We are new, so we are not going to borrow somebody else’s case studies and call them ours. Here is the model we run, and the numbers we hold every engagement to."
        />

        <p
          data-reveal
          className="mx-auto mt-6 max-w-3xl rounded-xl border border-line/70 bg-ink-800/40 px-5 py-3.5 text-center text-[13px] text-dim"
        >
          The figures below are <span className="text-mist/80">modelled outcomes</span> for a
          typical business in each segment — not client results. Our live client numbers are
          published from month two.
        </p>

        <div className="mt-14 space-y-6">
          {playbooks.map((play) => {
            const accent = accentMap[play.accent]
            return (
              <article
                key={play.segment}
                data-reveal
                className="group relative overflow-hidden rounded-[2rem] border border-line/80 bg-ink-800/40 p-7 transition-colors duration-500 hover:border-gold/25 sm:p-10"
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.ring} opacity-60`}
                />

                <div className="relative grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-lg tracking-tight text-mist">
                        {play.segment}
                      </span>
                      <span className="rounded-full border border-line bg-ink-700/60 px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] text-dim uppercase">
                        {play.type}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[12px] text-dim">{play.location}</p>

                    <h3 className="mt-4 text-2xl leading-snug text-mist sm:text-[1.7rem]">
                      {play.headline}
                    </h3>

                    <div className="mt-6 space-y-5">
                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.18em] text-dim uppercase">
                          The challenge
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{play.challenge}</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.18em] text-gold/80 uppercase">
                          The approach
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-mist/75">
                          {play.approach}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 flex items-start gap-2 border-t border-line/70 pt-5 text-[12px] text-dim">
                      <Chart className="mt-0.5 size-3.5 shrink-0 text-gold/60" />
                      {play.note}
                    </p>
                  </div>

                  <div className="grid gap-3 self-start sm:grid-cols-2">
                    {play.funnel.map((step, i) => (
                      <div
                        key={step.label}
                        className="rounded-2xl border border-line/70 bg-ink-900/50 p-5 transition-colors duration-500 hover:border-gold/30"
                      >
                        <p className="text-[10px] font-semibold tracking-[0.16em] text-dim uppercase">
                          {String(i + 1).padStart(2, '0')} · {step.label}
                        </p>
                        <p
                          className={`mt-2.5 font-display text-xl leading-none sm:text-2xl ${accent.text}`}
                        >
                          {step.value}
                        </p>
                        <div className={`mt-4 h-px w-full ${accent.bar} opacity-40`} />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {promiseBlocks.map((block, i) => {
            const Icon = i === 0 ? Chart : i === 1 ? Shield : Sparkle
            return (
              <div
                key={block.title}
                data-reveal
                className="rounded-[1.75rem] border border-gold/20 bg-gradient-to-br from-gold/[0.07] via-ink-800/40 to-transparent p-7"
              >
                <span className="grid size-11 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg text-mist">{block.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">{block.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
