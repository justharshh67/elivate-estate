import type { ReactNode } from 'react'

type Tone = 'default' | 'alt' | 'deep'

const toneClasses: Record<Tone, string> = {
  default: '',
  alt: 'border-y border-line/70 bg-ink-900/40',
  deep: 'border-y border-line/70 bg-ink-900/70',
}

/**
 * Shared section shell so every band on the page shares the same rhythm:
 * identical vertical padding, identical scroll offset for anchor links and
 * identical container width.
 */
export default function Section({
  id,
  children,
  tone = 'default',
  className = '',
  innerClassName = '',
}: {
  id?: string
  children: ReactNode
  tone?: Tone
  className?: string
  innerClassName?: string
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 py-24 lg:py-32 ${toneClasses[tone]} ${className}`}
    >
      <div className={`container-x ${innerClassName}`}>{children}</div>
    </section>
  )
}
