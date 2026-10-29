import { PrimaryButton, Stars } from './ui'

const circles = ['#45a38e', '#a487d6', '#f7be26', '#f76d26']

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 lg:px-0">
      <div className="bg-night-grid flex flex-col items-center rounded-[40px] px-6 py-16 text-center md:h-[640px] md:justify-center md:py-0">
        <p className="flex items-center gap-3 text-lg text-white">
          <Stars className="size-5" /> 4.9/5
        </p>
        <div className="mt-5 flex" aria-hidden="true">
          {circles.map((c, i) => (
            <span key={c} className="size-10 rounded-full ring-1 ring-white/60" style={{ backgroundColor: c, marginLeft: i ? -6 : 0 }} />
          ))}
          <span className="-ml-1.5 grid size-10 place-items-center rounded-full bg-white text-[11px] text-ink">100K+</span>
        </div>
        <p className="mt-4 max-w-[260px] text-lg leading-[1.45] text-[#c0c5c4]">Over 100K+ Entrepreneurs, and business choose us</p>
        <h2 className="mt-8 max-w-[800px] text-[40px] leading-[1.2] font-semibold tracking-[-0.01em] text-white md:text-[64px]">
          Empowering Your Financial Freedom
        </h2>
        <p className="mt-5 max-w-[600px] text-lg leading-[1.45] text-[#c0c5c4]">
          Trust us to deliver cutting-edge innovation, transparency, and personalized service, all designed to help you achieve financial freedom
        </p>
        <div className="mt-9">
          <PrimaryButton>Get Started now</PrimaryButton>
        </div>
      </div>
    </section>
  )
}
