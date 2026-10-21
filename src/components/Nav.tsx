import { useEffect, useState } from 'react'
import { brand, navLinks } from '../data/content'
import { ArrowRight, Close, Menu } from './Icons'
import SocialLinks from './SocialLinks'

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label={`${brand.name} home`}>
      <span className="relative grid size-9 place-items-center rounded-xl border border-gold/35 bg-gradient-to-br from-gold/25 to-transparent text-gold">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 11.2 12 4l9 7.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 10v9h13v-9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 19v-5h4v5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="truncate font-display text-[1.05rem] tracking-tight text-mist">
          {brand.name}
        </span>
        <span className="mt-1 hidden text-[10px] font-medium tracking-[0.2em] text-dim uppercase sm:block">
          {brand.descriptor}
        </span>
      </span>
    </a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-line/70 bg-ink/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-20 sm:gap-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-mist/70 transition-colors duration-200 hover:text-mist after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2.5 lg:flex">
            <SocialLinks />
          </div>

          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-gold-soft via-gold to-gold-deep px-5 py-2.5 text-sm font-semibold text-ink transition-shadow duration-300 hover:shadow-[0_10px_36px_-14px_rgba(212,175,106,0.75)] sm:inline-flex"
          >
            Get a free audit
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-xl border border-line bg-ink-800/70 text-mist transition-colors hover:border-gold/50 hover:text-gold lg:hidden"
          >
            {open ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-line/60 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? 'max-h-[30rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-mist/80 transition-colors hover:bg-ink-700 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-soft via-gold to-gold-deep px-5 py-3 text-sm font-semibold text-ink"
          >
            Get a free audit
            <ArrowRight className="size-4" />
          </a>

          <div className="mt-4 flex items-center gap-3 border-t border-line/60 pt-5">
            <span className="text-[11px] tracking-[0.18em] text-dim uppercase">Follow</span>
            <SocialLinks />
          </div>
        </nav>
      </div>
    </header>
  )
}
