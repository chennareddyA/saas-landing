import Navbar from './Navbar'
import CurrencyConverter from './CurrencyConverter'
import { AvatarStack, PrimaryButton } from './ui'
import { ArrowUp, Dollar, Exchange, Play, Target } from './icons'

// Floating cards around the converter. Offsets are measured from the page center
// in the 1440px Figma frame, so they stay in place on any desktop width.
function Float({ left, top, children }: { left: number; top: number; children: React.ReactNode }) {
  return (
    <div className="absolute hidden xl:block" style={{ left: `calc(50% + ${left}px)`, top }}>
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="bg-night-grid relative overflow-hidden">
      <Navbar />

      <div className="mx-auto max-w-[1240px] px-5 pt-16 text-center lg:px-0">
        <p className="inline-flex h-8 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 pr-4 text-sm text-white">
          <span className="rounded-full bg-lime px-3 py-0.5 text-ink">New</span>
          Payment cards upgraded
        </p>

        <h1 className="mx-auto mt-5 max-w-[720px] text-[44px] leading-[1.15] font-semibold tracking-[-0.01em] text-white sm:text-[56px] md:text-[64px] md:leading-[1.2]">
          Cross-border payment made easy.
        </h1>

        <p className="mx-auto mt-6 max-w-[580px] text-lg leading-[1.45] text-[#c0c5c4] md:text-xl">
          We help individuals and businesses to securely send and receive money globally, without the bank fees.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="#pricing">Create account</PrimaryButton>
          <a
            href="#how-it-works"
            className="inline-flex h-14 items-center gap-4 rounded-full bg-white py-2 pr-8 pl-2 text-lg text-[#545c5e] transition-colors hover:bg-[#eef2f0]"
          >
            <span className="grid size-10 place-items-center rounded-full bg-brand text-white">
              <Play className="size-4" />
            </span>
            Watch Tutorial
          </a>
        </div>
      </div>

      {/* Product visual */}
      <div className="relative mx-auto mt-20 flex justify-center px-5 pb-8 md:mt-[140px]">
        <CurrencyConverter />

        <Float left={-487} top={32}>
          <div className="w-[216px] rounded-[20px] bg-white px-6 py-5 text-left">
            <p className="text-base text-body">Total balance</p>
            <p className="mt-1 flex items-center gap-2 text-2xl font-medium text-ink">
              $9,647.00
              <span className="rounded-full bg-brand px-2 py-0.5 text-xs font-normal text-white">+8.50%</span>
            </p>
          </div>
        </Float>

        <Float left={-580} top={197}>
          <div className="flex w-[227px] items-center gap-3 rounded-[20px] bg-[#f4f6f5] px-5 py-5 text-left">
            <span className="grid size-[52px] place-items-center rounded-full bg-brand-soft text-ink">
              <Dollar />
            </span>
            <div>
              <p className="text-base text-body">Received</p>
              <p className="text-[22px] font-medium text-ink">6790.67 EUR</p>
            </div>
          </div>
        </Float>

        <Float left={-305} top={174}>
          <span className="grid size-[52px] place-items-center rounded-full bg-brand-soft text-ink">
            <Exchange />
          </span>
        </Float>

        <Float left={271} top={36}>
          <div className="w-[185px] rounded-[20px] border border-line bg-white px-6 py-5 text-left">
            <p className="text-base text-body">Net Income</p>
            <p className="mt-1 flex items-center gap-3 text-2xl font-medium text-ink">
              $234.98K
              <span className="grid size-6 place-items-center rounded-full bg-brand text-white">
                <ArrowUp className="size-3.5" />
              </span>
            </p>
          </div>
        </Float>

        <Float left={254} top={174}>
          <span className="grid size-[52px] place-items-center rounded-full bg-[#dcef3a] text-[#043221]">
            <Target />
          </span>
        </Float>

        <Float left={354} top={200}>
          <div className="flex w-[236px] items-center gap-3 rounded-[20px] bg-[#f4f6f5] px-4 py-4 text-left whitespace-nowrap">
            <AvatarStack count={2} size={44} ring="#f4f6f5" />
            <div>
              <p className="text-[22px] leading-tight font-medium text-ink">124,89K+</p>
              <p className="text-base text-body">Trusted Users</p>
            </div>
          </div>
        </Float>
      </div>
    </section>
  )
}
