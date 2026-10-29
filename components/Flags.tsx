// Simplified circular currency flags. Square SVGs clipped by a rounded wrapper,
// so no SVG ids are needed (ids would clash when a flag appears twice).
import type { ReactNode } from 'react'

function Round({ children, className = 'size-11' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-block shrink-0 overflow-hidden rounded-full ${className}`} aria-hidden="true">
      <svg viewBox="0 0 44 44" className="size-full">{children}</svg>
    </span>
  )
}

export const FlagUS = ({ className }: { className?: string }) => (
  <Round className={className}>
    <rect width="44" height="44" fill="#fff" />
    {[0, 2, 4, 6, 8, 10, 12].map((i) => (
      <rect key={i} y={i * 3.4} width="44" height="3.4" fill="#e8343d" />
    ))}
    <rect width="20" height="20.4" fill="#3c3b9e" />
    {[4, 10, 16].map((y) => [4, 10, 16].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.1" fill="#fff" />))}
  </Round>
)

// Star positions are rounded so the server and browser produce identical values
const euStars = Array.from({ length: 12 }, (_, i) => {
  const a = (i / 12) * Math.PI * 2
  return { cx: Number((22 + Math.cos(a) * 12).toFixed(2)), cy: Number((22 + Math.sin(a) * 12).toFixed(2)) }
})

export const FlagEU = ({ className }: { className?: string }) => (
  <Round className={className}>
    <rect width="44" height="44" fill="#1e3a9e" />
    {euStars.map((star, i) => (
      <circle key={i} cx={star.cx} cy={star.cy} r="1.6" fill="#ffd400" />
    ))}
  </Round>
)

export const FlagKW = ({ className }: { className?: string }) => (
  <Round className={className}>
    <rect width="44" height="15" fill="#1a9b4b" />
    <rect y="15" width="44" height="14" fill="#fff" />
    <rect y="29" width="44" height="15" fill="#d8262e" />
    <path d="M0 0l14 15v14L0 44z" fill="#111" />
  </Round>
)

export const FlagKY = ({ className }: { className?: string }) => (
  <Round className={className}>
    <rect width="44" height="44" fill="#1d3f8f" />
    <path d="M6 6l18 12M24 6 6 18M15 3v18M3 12h22" stroke="#fff" strokeWidth="3.5" />
    <path d="M6 6l18 12M24 6 6 18M15 3v18M3 12h22" stroke="#d8262e" strokeWidth="1.5" />
    <circle cx="30" cy="28" r="6.5" fill="#fff" />
    <path d="M26.5 27h7M26.5 30h7" stroke="#1a9b4b" strokeWidth="1.5" />
  </Round>
)
