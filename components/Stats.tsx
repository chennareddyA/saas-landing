import { Star } from './icons'

const stats = [
  { value: '234', unit: 'M', text: 'Supporting multiple currencies for users.' },
  { value: '768', unit: 'K', text: 'Gaining new users every single month.', highlight: true },
  { value: '5.0', unit: 'star', text: 'High star ratings from satisfied users.' },
  { value: '$8.8', unit: 'B', text: 'Generating increased revenue consistently' },
]

export default function Stats() {
  return (
    <section aria-label="Key numbers" className="mx-auto max-w-[1240px] px-5 lg:px-0">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <li
            key={s.text}
            className={`flex h-[200px] flex-col sm:h-[258px] items-center justify-center rounded-[32px] px-8 text-center ${
              s.highlight ? 'bg-brand text-white' : 'bg-surface text-ink'
            }`}
          >
            <p className="flex items-start text-5xl font-bold tracking-[-0.01em]">
              {s.value}
              {s.unit === 'star' ? (
                <Star className="mt-0.5 ml-2 size-7" />
              ) : (
                <span className={`ml-2 text-[28px] leading-none ${s.highlight ? 'text-lime' : ''}`}>{s.unit}</span>
              )}
            </p>
            <p className={`mt-5 max-w-[200px] sm:mt-9 text-lg leading-[1.3] ${s.highlight ? 'text-white/85' : 'text-ink'}`}>{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
