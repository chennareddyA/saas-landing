// Placeholder partner brands from the design, redrawn as simple marks
const marks: Record<string, React.ReactNode> = {
  Ephemeral: (
    <svg viewBox="0 0 40 40" className="size-11"><rect x="3" y="11" width="22" height="16" rx="8" fill="none" stroke="#444ce7" strokeWidth="4" /><rect x="15" y="13" width="22" height="16" rx="8" fill="none" stroke="#444ce7" strokeWidth="4" /></svg>
  ),
  Wildcrafted: (
    <svg viewBox="0 0 40 40" className="size-11"><path d="M3 15l12 13 9-11" fill="none" stroke="#155eef" strokeWidth="6" strokeLinejoin="round" /><path d="M20 21l9-10 6 1" fill="none" stroke="#84adff" strokeWidth="6" strokeLinecap="round" /></svg>
  ),
  Codecraft_: (
    <svg viewBox="0 0 40 40" className="size-11"><rect x="2" y="4" width="18" height="18" rx="4" fill="#344054" /><rect x="20" y="18" width="18" height="18" rx="4" fill="#344054" /><rect x="14" y="14" width="12" height="12" fill="#344054" /></svg>
  ),
  Convergence: (
    <svg viewBox="0 0 40 40" className="size-11" stroke="#344054" strokeWidth="2.6"><path d="M20 2v36M2 20h36M7 7l26 26M33 7 7 33" /></svg>
  ),
  ImgCompress: (
    <svg viewBox="0 0 40 40" className="size-11"><path d="M20 2l5 13 13 5-13 5-5 13-5-13L2 20l13-5z" fill="#528bff" /><path d="M20 2l5 13-5 5-5-5z" fill="#155eef" /></svg>
  ),
  Epicurious: (
    <svg viewBox="0 0 40 40" className="size-11"><rect x="12" y="2" width="26" height="9" rx="4.5" fill="#6927da" /><rect x="6" y="15" width="26" height="9" rx="4.5" fill="#7a5af8" /><rect x="0" y="28" width="26" height="9" rx="4.5" fill="#9b8afb" /></svg>
  ),
  Watchtower: (
    <svg viewBox="0 0 40 40" className="size-11" fill="none" stroke="#344054" strokeWidth="3"><circle cx="20" cy="20" r="17" /><circle cx="20" cy="17" r="9" /><circle cx="22" cy="18" r="4" /></svg>
  ),
  Renaissance: (
    <svg viewBox="0 0 40 40" className="size-11"><path d="M4 3h13a8 8 0 0 1 0 16H11v6H4z" fill="#1849a9" /><path d="M17 14h12a8 8 0 0 1 2 15l4 9h-7l-4-9h-1v9h-6z" fill="#2e90fa" /></svg>
  ),
  ContrastAI: (
    <svg viewBox="0 0 40 40" className="size-11"><circle cx="20" cy="20" r="17" fill="none" stroke="#5925dc" strokeWidth="4" /><path d="M20 3a17 17 0 0 0 0 34z" fill="#5925dc" /></svg>
  ),
  Nietzsche: (
    <svg viewBox="0 0 40 40" className="size-11" stroke="#ff4405" strokeWidth="4" strokeLinecap="round"><path d="M20 3v8M20 29v8M3 20h8M29 20h8M8 8l5.6 5.6M26.4 26.4 32 32M32 8l-5.6 5.6M13.6 26.4 8 32" /><circle cx="20" cy="20" r="5" fill="none" /></svg>
  ),
}

const rows = [
  ['Ephemeral', 'Wildcrafted', 'Codecraft_', 'Convergence', 'ImgCompress'],
  ['Epicurious', 'Watchtower', 'Renaissance', 'ContrastAI', 'Nietzsche'],
]

export default function Partners() {
  return (
    <section aria-labelledby="partners-title" className="mx-auto max-w-[1280px] px-5">
      <h2 id="partners-title" className="text-center text-[32px] leading-tight font-semibold text-ink md:text-[40px]">
        Our Recent Clients &amp; Partners
      </h2>
      <div className="mt-10 space-y-6 md:space-y-8">
        {rows.map((row, i) => (
          <ul key={i} className="grid grid-cols-2 gap-x-4 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-6">
            {row.map((name) => (
              <li key={name} className="flex items-center gap-2 sm:gap-2.5">
                <span aria-hidden="true" className="size-7 shrink-0 sm:size-11 [&>svg]:size-full">{marks[name]}</span>
                <span className="font-inter text-lg font-semibold sm:text-[28px] tracking-[-0.02em] text-[#3b4447]">{name}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <p className="mt-8 text-center font-inter text-lg text-body">Join 4,000+ companies already growing</p>
    </section>
  )
}
