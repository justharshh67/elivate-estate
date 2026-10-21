import { process } from '../data/content'
import { SectionHeading } from './ui'

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="How we work"
              title={
                <>
                  From audit to closed deal in <span className="text-gold">five steps</span>
                </>
              }
              lead="No 40-page proposal, no six-month onboarding, no mystery dashboards. Here is exactly what happens, and when."
            />

            <div
              data-reveal
              className="mt-9 rounded-2xl border border-line/80 bg-ink-800/40 p-6"
            >
              <p className="text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">
                Live in 14 days
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                First campaigns, first pages and first automations are live within two weeks
                of kickoff. The full growth plan lands with you before the onboarding call.
              </p>
              <p className="mt-4 border-t border-line/70 pt-4 text-[13px] leading-relaxed text-mist/70">
                We take on <span className="text-gold">six founding clients per quarter</span>{' '}
                so every account gets senior attention. When the slots are full, we wait rather
                than dilute the work.
              </p>
            </div>
          </div>

          <ol className="relative space-y-4">
            <div
              aria-hidden="true"
              className="absolute top-6 bottom-6 left-[23px] w-px bg-gradient-to-b from-gold/60 via-line to-transparent sm:left-[31px]"
            />
            {process.map((step) => (
              <li key={step.step} data-reveal className="relative pl-13 sm:pl-20">
                <span className="absolute top-5 left-0 grid size-12 place-items-center rounded-2xl border border-gold/25 bg-ink-800 font-display text-sm text-gold sm:size-16 sm:text-lg">
                  {step.step}
                </span>
                <div className="rounded-3xl border border-line/80 bg-ink-800/40 p-6 transition-colors duration-500 hover:border-gold/25 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg text-mist">{step.title}</h3>
                    <span className="rounded-full border border-line bg-ink-700/60 px-3 py-1 text-[11px] font-medium tracking-[0.12em] text-dim uppercase">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {step.deliverables.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line/80 bg-ink-900/60 px-3 py-1.5 text-[12px] text-mist/70"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
