import { engagementNotes, plans } from '../data/content'
import { Check, Sparkle } from './Icons'
import { SectionHeading } from './ui'

export default function Engagement() {
  return (
    <section id="engagement" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Engagement models"
          title={
            <>
              Everything included, <span className="text-gold">scoped to you</span>
            </>
          }
          lead="Three ways we work together, built from the same six disciplines. The difference is depth, reach and how fast we move — never what we are willing to do for you."
        />

        <div
          data-reveal
          className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-gold/25 bg-gold/[0.07] px-6 py-5 text-center sm:flex-row sm:justify-center sm:gap-5 sm:text-left"
        >
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold/15 px-3 py-1.5 text-[11px] font-bold tracking-[0.16em] text-gold uppercase">
            <Sparkle className="size-3.5" />
            Founding cohort
          </span>
          <p className="text-[13px] leading-relaxed text-mist/75">
            We take on six founding clients per quarter so every account gets senior
            attention. Scope and commercials are agreed after your free audit — never before.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              data-reveal
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-500 ${
                plan.featured
                  ? 'border-gold/45 bg-gradient-to-b from-gold/[0.09] via-ink-800/60 to-ink-900/70 shadow-[0_35px_90px_-50px_rgba(212,175,106,0.8)] lg:-mt-4'
                  : 'border-line/80 bg-ink-800/35 hover:border-gold/25'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-soft to-gold-deep px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-ink uppercase">
                  <Sparkle className="size-3" />
                  Most chosen
                </span>
              )}

              <h3 className="text-lg text-mist">{plan.name}</h3>
              <p className="mt-2 min-h-[3rem] text-[13px] leading-relaxed text-muted">
                {plan.pitch}
              </p>

              <div className="mt-6 border-t border-line/70 pt-5">
                <p className="text-[11px] font-medium tracking-[0.16em] text-dim uppercase">
                  Scope
                </p>
                <p
                  className={`mt-1.5 font-display text-lg leading-snug ${
                    plan.featured ? 'text-gradient-gold' : 'text-mist'
                  }`}
                >
                  {plan.scope}
                </p>
                <p className="mt-2 text-[12.5px] text-dim">
                  Custom scope confirmed after your free audit.
                </p>
              </div>

              <a
                href="#contact"
                className={`mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-r from-gold-soft via-gold to-gold-deep text-ink hover:shadow-[0_14px_40px_-16px_rgba(212,175,106,0.85)]'
                    : 'border border-line bg-ink-700/50 text-mist hover:border-gold/45 hover:text-gold'
                }`}
              >
                {plan.cta}
              </a>

              <ul className="mt-8 space-y-3 border-t border-line/70 pt-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-[13px] leading-relaxed text-mist/70"
                  >
                    <Check
                      className={`mt-0.5 size-4 shrink-0 ${
                        plan.featured ? 'text-gold' : 'text-gold/60'
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div
          data-reveal
          className="mt-6 grid gap-4 rounded-3xl border border-line/80 bg-ink-800/30 p-7 sm:grid-cols-3 sm:p-8"
        >
          {engagementNotes.map((item) => (
            <div key={item.t}>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">
                {item.t}
              </p>
              <p className="mt-2.5 text-[13px] leading-relaxed text-muted">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
