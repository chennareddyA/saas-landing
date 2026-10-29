import { SectionBadge, PrimaryButton } from './ui'
import { Card, Headset, Phone, Refresh, ShieldCheck } from './icons'

const perks = [
  { icon: ShieldCheck, text: 'Encryption ensures your payments are safe.' },
  { icon: Phone, text: 'Manage payments on the go with our mobile app.' },
  { icon: Refresh, text: 'Pay and receive any currencies effortlessly.' },
  { icon: Headset, text: 'Our team is available around the clock' },
]

const transactions = [
  { name: 'Coffee Shop', amount: '-$4.50', color: '#a487d6' },
  { name: 'Salary', amount: '+$4,200.00', color: '#1d9b5e' },
  { name: 'Grocery Shop', amount: '-$62.40', color: '#f7be26' },
]

/** Phone mockup built in code (the Figma export only contains an image placeholder) */
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] rounded-[44px] border-[10px] border-[#101c22] bg-[#101c22] shadow-[0_30px_60px_rgba(15,32,40,0.25)]">
      <div className="absolute top-2 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-[#101c22]" aria-hidden="true" />
      <div className="overflow-hidden rounded-[34px] bg-[#f6f8f9] px-4 pt-10 pb-6">
        <p className="text-xs text-body">Good morning,</p>
        <p className="text-base font-semibold text-ink">Jenny Wilson</p>

        <div className="bg-night-grid mt-4 rounded-2xl p-4 text-white">
          <p className="text-xs text-white/70">Total balance</p>
          <p className="mt-1 text-2xl font-semibold">$9,647.00</p>
          <div className="mt-3 flex items-center justify-between text-xs text-white/70">
            <span>•••• 4291</span>
            <Card className="size-5 text-lime" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] text-ink">
          {['Send', 'Receive', 'Exchange'].map((a) => (
            <div key={a} className="rounded-xl bg-white py-2.5 shadow-sm">
              <span className="mx-auto mb-1 block size-6 rounded-full bg-brand/15" />
              {a}
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs font-semibold text-ink">Recent activity</p>
        <ul className="mt-2 space-y-2">
          {transactions.map((t) => (
            <li key={t.name} className="flex items-center gap-2 rounded-xl bg-white p-2.5 text-xs shadow-sm">
              <span className="size-7 rounded-full" style={{ backgroundColor: t.color }} />
              <span className="text-ink">{t.name}</span>
              <span className={`ml-auto font-medium ${t.amount.startsWith('+') ? 'text-brand' : 'text-ink'}`}>{t.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 lg:grid-cols-[614px_minmax(0,1fr)] lg:gap-16 lg:px-0">
      <div className="relative order-last grid h-[560px] place-items-center overflow-hidden rounded-[48px] bg-surface sm:h-[630px] lg:order-first">
        <div className="bg-halftone absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <PhoneMockup />
        </div>
      </div>

      <div>
        <SectionBadge>Smart Payment</SectionBadge>
        <h2 className="mt-4 text-[40px] leading-[1.17] font-semibold tracking-[-0.01em] text-ink md:text-[64px]">
          Our payment system is easy to start using.
        </h2>
        <p className="mt-5 text-lg leading-[1.45] text-body">
          Its easy setup ensures businesses can start using it effortlessly, making financial management more straightforward and reliable.
        </p>
        <ul className="mt-7 grid gap-4 sm:grid-cols-2">
          {perks.map(({ icon: Icon, text }) => (
            <li key={text} className="flex min-h-[77px] items-center gap-3 rounded-2xl border border-[#e2e3e3] px-3.5 py-3">
              <span className="grid size-[46px] shrink-0 place-items-center rounded-[10px] bg-brand text-white">
                <Icon className="size-6" />
              </span>
              <span className="text-base leading-[1.45] text-ink">{text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <PrimaryButton>Get Started now</PrimaryButton>
        </div>
      </div>
    </section>
  )
}
