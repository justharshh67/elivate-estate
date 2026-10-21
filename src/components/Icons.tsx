import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

export const SearchIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
)

export const SeoIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="m7.5 15 3.5-4 3 2.5L20 7" />
    <circle cx="20" cy="7" r="1.4" fill="currentColor" stroke="none" />
  </svg>
)

export const CameraIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.2l1.2-2h8.2l1.2 2h2.2A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5Z" />
    <circle cx="12" cy="13" r="3.4" />
  </svg>
)

export const SocialIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

export const CrmIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5Z" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

export const LayoutIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M3 9h18" />
    <path d="M9 9v11" />
  </svg>
)

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export const Check = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m4.5 12.5 4.5 4.5 10-10.5" />
  </svg>
)

export const Quote = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M9.4 5.5C6 7.2 4 10.3 4 14.1 4 17.4 6 19.6 8.8 19.6c2.3 0 4-1.7 4-3.9 0-2.1-1.5-3.7-3.5-3.7-.4 0-.9.1-1 .1 0-1.7 1.2-3.3 3.2-4.4Zm9.4 0C15.4 7.2 13.4 10.3 13.4 14.1c0 3.3 2 5.5 4.8 5.5 2.3 0 4-1.7 4-3.9 0-2.1-1.5-3.7-3.5-3.7-.4 0-.9.1-1 .1 0-1.7 1.2-3.3 3.2-4.4Z" />
  </svg>
)

export const Star = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="m12 3.2 2.6 5.6 6 .8-4.4 4.2 1.1 6.1L12 17l-5.3 2.9 1.1-6.1L3.4 9.6l6-.8Z" />
  </svg>
)

export const Menu = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Close = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const Mail = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
)

export const Phone = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
)

export const Sparkle = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3.5 13.6 9 19 10.5 13.6 12 12 17.5 10.4 12 5 10.5 10.4 9Z" />
    <path d="M18.5 16.5 19 18l1.5.5-1.5.5-.5 1.5-.5-1.5L16.5 18l1.5-.5Z" />
  </svg>
)

export const Chart = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>
)

export const Shield = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5.5c0 4.4 2.9 8.1 7 9.5 4.1-1.4 7-5.1 7-9.5V6Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const serviceIcons = {
  search: SearchIcon,
  seo: SeoIcon,
  camera: CameraIcon,
  social: SocialIcon,
  crm: CrmIcon,
  layout: LayoutIcon,
} as const

export const InstagramIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

export const LinkedinIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M6.94 8.9v10.2H3.5V8.9h3.44Zm.17-3.4a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0ZM20.5 14.2v4.9h-3.43v-4.55c0-1.21-.43-2.04-1.52-2.04-.83 0-1.32.56-1.54 1.1-.08.2-.1.48-.1.76v4.73H10.4s.05-9.79 0-10.8h3.45v1.53h.05c.48-.9 1.32-1.85 2.72-1.85 1.99 0 3.28 1.3 3.28 4.1Z" />
  </svg>
)

export const socialIcons = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
} as const
