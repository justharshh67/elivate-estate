import { brand, navLinks, services } from '../data/content'
import { ArrowRight, Mail, Phone } from './Icons'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line/70 bg-ink-900/70">
      <div className="container-x py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl border border-gold/35 bg-gradient-to-br from-gold/25 to-transparent text-gold">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 11.2 12 4l9 7.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.5 10v9h13v-9" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 19v-5h4v5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-display text-lg text-mist">{brand.name}</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {brand.descriptor}. We build the funnel, you close the deal.
            </p>
            <p className="mt-4 font-display text-sm text-gold/85 italic">{brand.tagline}</p>
            <SocialLinks className="mt-5" />
            <p className="mt-5 text-[13px] text-dim">{brand.location}</p>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-mist/65 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#team" className="text-sm text-mist/65 transition-colors hover:text-gold">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-mist/65 transition-colors hover:text-gold"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">
              Start a project
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Tell us where your pipeline is stuck. We will tell you exactly where it is
              leaking.
            </p>
            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-soft via-gold to-gold-deep px-5 py-2.5 text-sm font-semibold text-ink transition-shadow duration-300 hover:shadow-[0_12px_36px_-16px_rgba(212,175,106,0.8)]"
            >
              Get a free audit
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <ul className="mt-6 space-y-2.5">
              <li>
                <a
                  href={brand.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-mist/70 transition-colors hover:text-gold"
                >
                  <Phone className="size-4 text-gold/70" />
                  {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="flex items-center gap-2.5 text-sm text-mist/70 transition-colors hover:text-gold"
                >
                  <Mail className="size-4 text-gold/70" />
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line/70 pt-7 sm:flex-row">
          <p className="text-[12px] text-dim">
            © {year} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[12px] text-dim">
            <a href="#top" className="transition-colors hover:text-gold">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-gold">
              Terms
            </a>
            <a href="#top" className="transition-colors hover:text-gold">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
