'use client'

import { useState } from 'react'
import { AvatarStack, SectionBadge, Stars } from './ui'
import { ChevronDown, Info } from './icons'

const items = [
  {
    title: 'Personalized Financial Insights',
    text: 'Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions.',
  },
  {
    title: 'Bill Payment Reminders',
    text: 'Never miss a due date. Get timely reminders and schedule payments so your bills are always paid on time.',
  },
  {
    title: 'Peer-to-Peer Transfers',
    text: 'Send money to friends and family instantly with just their phone number or email, free of charge.',
  },
]

const reach = [
  { label: 'Followers', value: 54.1 },
  { label: 'Non-followers', value: 18.1 },
  { label: 'Random', value: 27.8 },
]

export default function SeamlessBanking() {
  const [open, setOpen] = useState(0)

  return (
    <section className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 lg:grid-cols-[592px_minmax(0,1fr)] lg:gap-[100px] lg:px-0">
      {/* Visual */}
      <div className="relative order-last h-[520px] overflow-hidden rounded-[48px] bg-surface sm:h-[595px] lg:order-first">
        <div className="bg-halftone absolute inset-0" aria-hidden="true" />

        <div className="absolute top-[175px] left-5 w-[calc(100%-40px)] h-[275px] max-w-[358px] overflow-hidden rounded-[28px] border-4 border-[#f7f9fa] bg-white p-5 sm:left-9">
          <p className="flex items-center gap-2 text-base text-ink">
            Reach <Info className="size-5" />
          </p>
          <hr className="my-4 border-[#e6eaec]" />
          <p className="text-base text-ink">Account reached</p>
          <ul className="mt-4 space-y-2">
            {reach.map((r) => (
              <li key={r.label} className="rounded-2xl border border-[#e3e8eb] bg-surface px-3.5 py-2.5">
                <p className="text-base text-ink">{r.label}</p>
                <div className="mt-1.5 flex items-center gap-4">
                  <div className="h-1.5 flex-1 rounded-full bg-[#e3e8eb]">
                    <div className="h-full rounded-full bg-brand" style={{ width: `${r.value}%` }} />
                  </div>
                  <span className="rounded-full bg-[#dff1e7] px-2 py-0.5 text-sm text-brand">{r.value}%</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute top-[85px] right-5 w-[240px] rounded-[24px] border-4 border-white bg-white p-4 whitespace-nowrap shadow-[0_8px_24px_rgba(10,21,25,0.12)] ring-1 ring-[#e6eaec] sm:right-auto sm:left-[250px]">
          <Stars className="size-6" />
          <div className="mt-3 flex items-center gap-3">
            <AvatarStack count={3} size={40} />
            <div>
              <p className="text-[22px] leading-tight font-medium text-ink">124,89K+</p>
              <p className="text-base text-body">Trusted Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copy + accordion */}
      <div>
        <SectionBadge>Seamless Banking</SectionBadge>
        <h2 className="mt-4 text-[40px] leading-[1.17] font-semibold tracking-[-0.01em] text-ink md:text-[64px]">
          Smart Banking for a Digital World
        </h2>
        <p className="mt-5 text-lg leading-[1.45] text-body">
          Our Fintech banking service revolutionizes the way you manage your money, offering seamless, secure, and smart solutions for all your financial needs.
        </p>

        <ul className="mt-8 space-y-4">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={item.title} className="rounded-3xl bg-surface">
                <h3>
                  <button
                    type="button"
                    id={`acc-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`acc-panel-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand text-sm text-white">{i + 1}</span>
                    <span className="flex-1 text-xl text-ink">{item.title}</span>
                    <ChevronDown className={`size-5 text-ink transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <div
                  id={`acc-panel-${i}`}
                  role="region"
                  aria-labelledby={`acc-btn-${i}`}
                  hidden={!isOpen}
                  className="pr-6 pb-5 pl-[68px] text-base leading-[1.45] text-[#212b2f]"
                >
                  {item.text}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
