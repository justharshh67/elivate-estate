import { socials } from '../data/content'
import { socialIcons } from './Icons'

type Props = {
  variant?: 'icon' | 'row'
  className?: string
}

export default function SocialLinks({ variant = 'icon', className = '' }: Props) {
  if (variant === 'row') {
    return (
      <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 ${className}`}>
        {socials.map((social) => {
          const Icon = socialIcons[social.key]
          return (
            <a
              key={social.key}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 text-sm text-mist/65 transition-colors hover:text-gold"
            >
              <Icon className="size-4 text-gold/60 transition-colors group-hover:text-gold" />
              {social.label}
            </a>
          )
        })}
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socials.map((social) => {
        const Icon = socialIcons[social.key]
        return (
          <a
            key={social.key}
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={social.label}
            title={social.label}
            className="grid size-9 place-items-center rounded-xl border border-line bg-ink-800/60 text-mist/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:text-gold hover:shadow-[0_10px_24px_-14px_rgba(212,175,106,0.9)]"
          >
            <Icon className="size-4" />
          </a>
        )
      })}
    </div>
  )
}
