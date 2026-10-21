import type { ReactNode } from 'react'
import { ArrowRight } from './Icons'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-line/80 bg-ink-800/70 px-3.5 py-1.5 text-[11px] font-medium tracking-[0.18em] text-gold/90 uppercase">
      <span className="h-1 w-1 rounded-full bg-gold" />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
}: {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: 'center' | 'left'
}) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignClass}`} data-reveal>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl leading-[1.1] text-mist sm:text-4xl lg:text-[2.85rem]">{title}</h2>
      {lead && <p className="text-base leading-relaxed text-muted sm:text-[1.05rem]">{lead}</p>}
    </div>
  )
}

type ButtonTone = 'gold' | 'outline' | 'ghost'

const toneClasses: Record<ButtonTone, string> = {
  gold:
    'bg-gradient-to-r from-gold-soft via-gold to-gold-deep text-ink hover:shadow-[0_10px_40px_-12px_rgba(212,175,106,0.6)]',
  outline:
    'border border-line bg-ink-800/60 text-mist hover:border-gold/50 hover:text-gold',
  ghost: 'text-mist/80 hover:text-gold',
}

export function Button({
  href,
  children,
  tone = 'gold',
  className = '',
  arrow = true,
  onClick,
  type,
  disabled,
}: {
  href?: string
  children: ReactNode
  tone?: ButtonTone
  className?: string
  arrow?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${toneClasses[tone]} ${className}`

  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {inner}
      </a>
    )
  }

  return (
    <button type={type ?? 'button'} className={classes} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  )
}

export function Rule() {
  return <div className="hairline h-px w-full" aria-hidden="true" />
}
