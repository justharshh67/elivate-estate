import { services } from '../data/content'
import { Check, serviceIcons } from './Icons'
import { SectionHeading } from './ui'

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Six disciplines. One <span className="text-gold">revenue</span> pipeline.
            </>
          }
          lead="Real estate marketing does not fail because of a bad logo. It fails because nobody owns the full path from a stranger's search to a signed contract. We own all of it."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <article
                key={service.id}
                data-reveal
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-line/80 bg-gradient-to-b from-ink-800/70 to-ink-900/70 p-7 transition-all duration-500 hover:border-gold/35 hover:shadow-[0_28px_70px_-45px_rgba(212,175,106,0.65)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -right-20 size-56 rounded-full bg-gold/0 blur-3xl transition-all duration-700 group-hover:bg-gold/12"
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl border border-line bg-ink-700/70 text-gold transition-colors duration-500 group-hover:border-gold/40 group-hover:bg-gold/10">
                    <Icon className="size-6" />
                  </span>
                  <div className="text-right">
                    <p className="font-display text-xl text-mist">{service.metric}</p>
                    <p className="text-[11px] tracking-[0.12em] text-dim uppercase">
                      {service.metricLabel}
                    </p>
                  </div>
                </div>

                <h3 className="mt-6 text-xl text-mist">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>

                <ul className="mt-6 space-y-2.5 border-t border-line/70 pt-5">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-[13px] leading-relaxed text-mist/65">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold/80" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
