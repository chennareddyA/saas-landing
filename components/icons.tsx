// Stroke icons drawn on a 24px grid, sized with className
type P = { className?: string }
const s = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

export const ArrowRight = ({ className = 'size-6' }: P) => (
  <svg {...s} className={className}><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
)
export const Play = ({ className = 'size-4' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M8 5.5v13a1 1 0 0 0 1.5.86l10.6-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" /></svg>
)
export const ChevronDown = ({ className = 'size-4' }: P) => (
  <svg {...s} className={className}><path d="m6 9 6 6 6-6" /></svg>
)
export const Check = ({ className = 'size-4' }: P) => (
  <svg {...s} strokeWidth={2.2} className={className}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
)
export const ArrowUp = ({ className = 'size-4' }: P) => (
  <svg {...s} strokeWidth={2} className={className}><path d="M12 19V5m-5 5 5-5 5 5" /></svg>
)
export const Swap = ({ className = 'size-4' }: P) => (
  <svg {...s} strokeWidth={2} className={className}><path d="M9 4v16M5 16l4 4M15 20V4m4 4-4-4" /></svg>
)
export const Star = ({ className = 'size-5' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="m12 2.8 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.6l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" /></svg>
)
export const Info = ({ className = 'size-5' }: P) => (
  <svg {...s} className={className}><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16.5v.01" /></svg>
)
export const Dollar = ({ className = 'size-6' }: P) => (
  <svg {...s} className={className}><circle cx="12" cy="12" r="9" /><path d="M14.8 9.2c-.4-1-1.5-1.6-2.8-1.6-1.6 0-2.8.9-2.8 2.1 0 2.9 5.8 1.5 5.8 4.4 0 1.2-1.3 2.2-3 2.2-1.4 0-2.6-.7-3-1.8M12 6v1.6M12 16.3V18" /></svg>
)
export const Exchange = ({ className = 'size-6' }: P) => (
  <svg {...s} strokeWidth={2} className={className}>
    <path d="M20 9a8.5 8.5 0 0 0-15.4-2.2M4 15a8.5 8.5 0 0 0 15.4 2.2M4.5 3.5v3.6h3.6M19.5 20.5v-3.6h-3.6" />
    <circle cx="12" cy="12" r="4" /><path d="M13.2 10.6c-.2-.4-.6-.6-1.2-.6-.7 0-1.2.4-1.2.9 0 1.2 2.4.6 2.4 1.8 0 .5-.5.9-1.2.9-.6 0-1.1-.3-1.3-.7M12 9.3v.7M12 14v.7" />
  </svg>
)
export const Target = ({ className = 'size-6' }: P) => (
  <svg {...s} strokeWidth={2} className={className}><circle cx="11" cy="13" r="6.5" /><path d="m11 13 8-8M15.5 5H19v3.5M8 13.2l2 2 3.5-4" /></svg>
)

// Feature icons
export const Devices = ({ className = 'size-6' }: P) => (
  <svg {...s} className={className}><rect x="8" y="3.5" width="12.5" height="9" rx="1.5" /><rect x="3.5" y="9" width="7" height="11.5" rx="1.5" /><path d="M6.5 17.5h1M14 16v3.5h3M12.5 19.5h6" /></svg>
)
export const CoinCycle = ({ className = 'size-6' }: P) => (
  <svg {...s} className={className}><path d="M20.5 12A8.5 8.5 0 1 1 15 4.2M16 3.5h4.5V8M20.5 3.5 14 10" /><path d="M14 9.4c-.3-.7-1.1-1.2-2-1.2-1.2 0-2 .6-2 1.5 0 2 4.1 1 4.1 3.1 0 .9-.9 1.6-2.1 1.6-1 0-1.9-.5-2.2-1.3M12 7v1.2M12 14.5v1.3" /></svg>
)
export const Phone = ({ className = 'size-6' }: P) => (
  <svg {...s} className={className}><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M10.5 5.5h3" /><circle cx="12" cy="17.5" r="1" /></svg>
)
export const MoneyBag = ({ className = 'size-6' }: P) => (
  <svg {...s} className={className}><rect x="3.5" y="7" width="17" height="13" rx="3" /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" /><path d="M13.8 11.4c-.3-.6-1-1-1.8-1-1 0-1.8.5-1.8 1.3 0 1.8 3.6.9 3.6 2.7 0 .8-.8 1.4-1.8 1.4-.9 0-1.6-.4-1.9-1.1M12 9.6v.8M12 16v.8" /></svg>
)
export const Notes = ({ className = 'size-6' }: P) => (
  <svg {...s} className={className}><rect x="6" y="3" width="12" height="18" rx="3" /><path d="M9.5 8h5M9.5 12h5M9.5 16h3M3.5 7v10M20.5 7v10" /></svg>
)
export const Card = ({ className = 'size-6' }: P) => (
  <svg {...s} className={className}><rect x="2.5" y="5" width="19" height="14" rx="3" /><path d="M2.5 10h19M6.5 15h3M11.5 15h2" /></svg>
)
export const ShieldCheck = ({ className = 'size-6' }: P) => (
  <svg {...s} className={className}><path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6z" /><path d="m9 12 2 2 4-4" /></svg>
)
export const Refresh = ({ className = 'size-6' }: P) => (
  <svg {...s} className={className}><path d="M20 11a8 8 0 0 0-14.6-4M4 4v4h4M4 13a8 8 0 0 0 14.6 4M20 20v-4h-4" /></svg>
)
export const Headset = ({ className = 'size-6' }: P) => (
  <svg {...s} className={className}><path d="M5 14v-2a7 7 0 0 1 14 0v2" /><rect x="3.5" y="13" width="3.5" height="5" rx="1.5" /><rect x="17" y="13" width="3.5" height="5" rx="1.5" /><path d="M19 18c0 2-2 3-4.5 3H13" /></svg>
)
export const Menu = ({ className = 'size-6' }: P) => (
  <svg {...s} strokeWidth={2} className={className}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
)
export const Close = ({ className = 'size-6' }: P) => (
  <svg {...s} strokeWidth={2} className={className}><path d="M6 6l12 12M18 6 6 18" /></svg>
)

// Social and store marks (simplified)
export const Facebook = ({ className = 'size-5' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M13.5 21v-7.5H16l.4-3H13.5V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4a20 20 0 0 0-2.4-.1c-2.4 0-4 1.4-4 4.1v2.1H7.6v3h2.6V21z" /></svg>
)
export const LinkedIn = ({ className = 'size-5' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M4.5 9h3.2v11H4.5zM6.1 3.8a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8M10 9h3.1v1.5c.4-.8 1.5-1.8 3.2-1.8 3.4 0 4 2.2 4 5.1V20h-3.2v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H10z" /></svg>
)
export const Instagram = ({ className = 'size-5' }: P) => (
  <svg {...s} strokeWidth={2.2} className={className}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17 7v.01" /></svg>
)
export const Twitter = ({ className = 'size-5' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M21.5 6.3c-.7.3-1.4.5-2.2.6a3.8 3.8 0 0 0 1.7-2.1c-.8.5-1.6.8-2.5 1a3.8 3.8 0 0 0-6.6 3.5A10.8 10.8 0 0 1 4 5.3a3.8 3.8 0 0 0 1.2 5.1 3.8 3.8 0 0 1-1.7-.5v.1a3.8 3.8 0 0 0 3 3.7 3.8 3.8 0 0 1-1.7.1 3.8 3.8 0 0 0 3.6 2.6A7.7 7.7 0 0 1 2.5 18a10.8 10.8 0 0 0 5.9 1.7c7 0 10.9-5.8 10.9-10.9v-.5c.8-.5 1.4-1.2 1.9-2" /></svg>
)
export const GooglePlay = ({ className = 'size-7' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round"><path d="M4.5 3.2 14 12l-9.5 8.8a1 1 0 0 1-.5-.9V4.1c0-.4.2-.7.5-.9ZM4.5 3.2l12.3 6.9L14 12M4.5 20.8l12.3-6.9L14 12m2.8-1.9 2.8 1.6a.4.4 0 0 1 0 .6l-2.8 1.6" /></svg>
)
export const Apple = ({ className = 'size-7' }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path fill="currentColor" d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9a4.8 4.8 0 0 0-3.8-2c-1.6-.2-3.1.9-3.9.9s-2-.9-3.4-.9a5 5 0 0 0-4.2 2.6c-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6s1.8-.8 3.3-.8 2 .8 3.4.8 2.2-1.3 3.1-2.5a10.6 10.6 0 0 0 1.4-2.9 4.5 4.5 0 0 1-2.6-4.1M13.9 5c.7-.9 1.2-2 1-3.2-1 .1-2.2.7-3 1.5-.6.7-1.2 1.9-1 3.1 1.1.1 2.3-.6 3-1.4" /></svg>
)
