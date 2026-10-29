export function LogoMark({ className = 'size-12' }: { className?: string }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#2bb673] to-[#178350] shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" className="size-full">
        <g stroke="#e9fbe9" strokeWidth="3.4" strokeLinecap="round">
          <path d="M24 10v8M24 30v8M10 24h8M30 24h8M14.1 14.1l5.6 5.6M28.3 28.3l5.6 5.6M33.9 14.1l-5.6 5.6M19.7 28.3l-5.6 5.6" />
        </g>
      </svg>
    </span>
  )
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`} aria-label="Euphoria home">
      <LogoMark />
      <span className="font-inter text-[26px] font-bold tracking-[-0.02em] text-white">Euphoria</span>
    </a>
  )
}
