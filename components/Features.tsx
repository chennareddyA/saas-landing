import { SectionHeader } from './ui'
import { Card, CoinCycle, Devices, MoneyBag, Notes, Phone } from './icons'

const features = [
  { icon: Devices, title: 'Instant Account Setup', text: 'Customers can set up a bank account in minutes' },
  { icon: CoinCycle, title: 'Real-Time Payments', text: 'Enables instant money transfers, both domestically and internationally' },
  { icon: Phone, title: 'Mobile Banking', text: 'Full-featured mobile app that allows users to manage their finances' },
  { icon: MoneyBag, title: 'Automated Savings', text: 'Round up purchases or set regular transfers into a savings account' },
  { icon: Notes, title: 'AI-Powered Budgeting', text: 'AI tools analyze spending patterns and provide personalized budgeting' },
  { icon: Card, title: 'Virtual Credit Cards', text: 'Generate virtual cards instantly for online shopping' },
]

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-[1240px] px-5 lg:px-0">
      <SectionHeader
        badge="Features"
        title={<>Banking Reimagined for the Future You</>}
        className="max-w-[800px]"
        text="Trust us to deliver cutting-edge innovation, transparency, and personalized service, all designed to help you achieve financial freedom"
      />

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="flex min-h-[253px] flex-col items-center justify-center rounded-[32px] border border-line bg-surface px-10 py-9 text-center"
          >
            <span className="grid size-[58px] place-items-center rounded-full bg-brand text-white ring-[3px] ring-white">
              <Icon className="size-7" />
            </span>
            <h3 className="mt-8 text-2xl font-medium text-ink">{title}</h3>
            <p className="mt-3 max-w-[270px] text-base leading-[1.4] text-[#50585c]">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
