import { useState } from 'react'
import { faqs } from '../data/content'
import { SectionHeading } from './ui'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative scroll-mt-24 border-t border-line/70 py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Questions"
            title={
              <>
                Everything you are <span className="text-gold">thinking about</span>
              </>
            }
            lead="If your question is not here, just ask it in the form below — we answer honestly, even when the answer is that we are not the right fit."
          />
        </div>

        <ul className="divide-y divide-line/80 border-y border-line/80" data-reveal>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <li key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-gold"
                  >
                    <span
                      className={`text-[15px] leading-snug font-medium transition-colors duration-200 sm:text-base ${
                        isOpen ? 'text-gold' : 'text-mist'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 border-gold/50 bg-gold/10 text-gold'
                          : 'border-line text-dim'
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  className="grid transition-[grid-template-rows] duration-400 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pr-10 pb-7 text-sm leading-relaxed text-muted">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
