import { useEffect } from 'react'
import { animate, stagger } from 'animejs'

type Variant = 'up' | 'left' | 'right' | 'scale'

const VARIANTS: Record<Variant, Record<string, [number, number]>> = {
  up: { translateY: [26, 0] },
  left: { translateX: [-28, 0] },
  right: { translateX: [28, 0] },
  scale: { scale: [0.94, 1] },
}

function variantOf(el: HTMLElement): Variant {
  const raw = (el.getAttribute('data-reveal') ?? '').trim()
  if (raw === 'left' || raw === 'right' || raw === 'scale') return raw
  return 'up'
}

/**
 * Watches every `[data-reveal]` node and animates it in the first time it
 * scrolls into view.
 *
 * Elements that are already above the viewport (page loaded with a restored
 * scroll position) are shown immediately — otherwise they would stay at
 * opacity 0 until the user scrolled back up to them.
 */
export function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    const done = new WeakSet<HTMLElement>()

    const play = (elements: HTMLElement[]) => {
      if (elements.length === 0) return

      const groups = new Map<Variant, HTMLElement[]>()
      for (const el of elements) {
        const variant = variantOf(el)
        const bucket = groups.get(variant)
        if (bucket) bucket.push(el)
        else groups.set(variant, [el])
      }

      for (const [variant, group] of groups) {
        animate(group, {
          opacity: [0, 1],
          translateY: variant === 'up' ? [26, 0] : 0,
          translateX:
            variant === 'left' || variant === 'right' ? VARIANTS[variant].translateX : 0,
          scale: variant === 'scale' ? VARIANTS.scale.scale : 1,
          duration: 900,
          delay: stagger(90),
          ease: 'outExpo',
          onComplete: () => {
            group.forEach((el) => {
              el.style.transform = 'none'
            })
          },
        })
      }
    }

    const show = (el: HTMLElement) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entering: HTMLElement[] = []
        const above: HTMLElement[] = []

        for (const entry of entries) {
          const el = entry.target as HTMLElement
          if (done.has(el)) continue
          if (entry.isIntersecting) {
            done.add(el)
            entering.push(el)
          } else if (entry.boundingClientRect.top < 0) {
            // Already scrolled past — reveal without animation.
            done.add(el)
            above.push(el)
          }
        }

        above.forEach(show)
        play(entering)
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}
