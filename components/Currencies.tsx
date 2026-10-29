import type { CSSProperties } from 'react'
import { SectionBadge, PrimaryButton } from './ui'
import { Check } from './icons'
import { FlagEU, FlagKW, FlagKY, FlagUS } from './Flags'

const points = [
  'Convert between currencies instantly.',
  'Simple and intuitive platform for managing.',
  'Manage your currencies anytime, anywhere',
]

const balances = [
  { code: 'KWD', name: 'Kuwaiti Dinar', amount: '5,780 KWD', usd: '18,865.80 USD', Flag: FlagKW, offset: 0 },
  { code: 'EUR', name: 'EURO', amount: '3,456 EUR', usd: '3,751.80 USD', Flag: FlagEU, offset: 0 },
  { code: 'USD', name: 'United States Dollar', amount: '3,657 USD', usd: '5,809.56 BTD', Flag: FlagUS, offset: 20 },
  { code: 'KYD', name: 'Cayman Islands Dollar', amount: '1,345 KYD', usd: '1,617.67 USD', Flag: FlagKY, offset: 80, dim: true },
]

export default function Currencies() {
  return (
    <section id="about" className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_614px] lg:gap-[90px] lg:px-0">
      <div>
        <SectionBadge>Limitless currency options</SectionBadge>
        <h2 className="mt-4 text-[40px] leading-[1.17] font-semibold tracking-[-0.01em] text-ink md:text-[64px]">
          One account for 90+ currencies worldwide.
        </h2>
        <p className="mt-6 max-w-[430px] text-lg leading-[1.45] text-body">
          Our platform allows you to send, receive, and convert currencies seamlessly in real-time, all while saving on fees.
        </p>
        <ul className="mt-7 space-y-5">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-lg text-ink">
              <span className="grid size-[26px] shrink-0 place-items-center rounded-full bg-brand text-white">
                <Check className="size-3.5" />
              </span>
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <PrimaryButton>Get Started now</PrimaryButton>
        </div>
      </div>

      {/* Balances panel */}
      <div className="relative h-[480px] overflow-hidden rounded-[32px] bg-[#eff2f1] sm:h-[630px] sm:rounded-[48px]">
        <div className="bg-dots absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_55%_at_60%_45%,#000_30%,transparent_75%)]" aria-hidden="true" />
        <ul className="absolute inset-x-4 top-[60px] space-y-4 sm:top-[80px] sm:right-auto sm:left-[50px] sm:w-[493px]">
          {balances.map(({ code, name, amount, usd, Flag, offset, dim }) => (
            <li
              key={code}
              style={{ '--offset': `${offset}px` } as CSSProperties}
              className={`flex h-[88px] items-center gap-3 rounded-3xl px-4 sm:ml-(--offset) sm:h-[104px] sm:w-[493px] sm:gap-4 sm:px-5 ${dim ? 'bg-[#f7f9f8] opacity-70' : 'bg-white'}`}
            >
              <Flag className="size-10 sm:size-14" />
              <div className="min-w-0">
                <p className="text-lg font-medium text-ink sm:text-2xl">{code}</p>
                <p className="truncate text-sm text-body sm:text-base">{name}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-lg font-medium whitespace-nowrap text-ink sm:text-2xl">{amount}</p>
                <p className="text-sm whitespace-nowrap text-body sm:text-base">{usd}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
