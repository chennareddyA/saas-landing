import type { ReactNode } from 'react'
import { ArrowRight, Star } from './icons'

/** Small rounded label above section headings ("• Features") */
export function SectionBadge({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex h-8 items-center gap-2 rounded-full border px-3.5 text-sm ${
        dark ? 'border-brand/40 bg-brand/5 text-brand' : 'border-pill text-brand'
      }`}
    >
      <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
      {children}
    </span>
  )
}

/** Main green call-to-action with an arrow */
export function PrimaryButton({ href = '#pricing', children }: { href?: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex h-14 items-center gap-3 rounded-full bg-brand px-8 text-base text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      {children}
      <ArrowRight className="size-6" />
    </a>
  )
}

export function Stars({ count = 5, className = 'size-6' }: { count?: number; className?: string }) {
  return (
    <span className="flex gap-1.5 text-star" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className={className} />
      ))}
    </span>
  )
}

const avatarColors = ['#45a38e', '#a487d6', '#f7be26', '#f76d26']

/** Overlapping colored circles, as in the design */
export function AvatarStack({ count, size = 44, ring = 'white' }: { count: number; size?: number; ring?: string }) {
  return (
    <span className="flex" aria-hidden="true">
      {avatarColors.slice(0, count).map((c, i) => (
        <span
          key={c}
          className="rounded-full"
          style={{
            backgroundColor: c,
            width: size,
            height: size,
            marginLeft: i === 0 ? 0 : -size * 0.22,
            boxShadow: `0 0 0 1.5px ${ring}`,
          }}
        />
      ))}
    </span>
  )
}

/** Section heading block: badge, title and optional text, centered */
export function SectionHeader({
  badge,
  title,
  text,
  className = '',
}: {
  badge: string
  title: ReactNode
  text?: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto flex flex-col items-center text-center ${className}`}>
      <SectionBadge>{badge}</SectionBadge>
      <h2 className="mt-4 text-[40px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink md:text-[64px]">{title}</h2>
      {text && <p className="mt-5 max-w-[600px] text-lg leading-[1.45] text-body">{text}</p>}
    </div>
  )
}
