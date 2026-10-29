'use client'

import { useState } from 'react'
import { SectionBadge } from './ui'
import { Check } from './icons'

type Billing = 'monthly' | 'yearly'

const plans = [
  {
    name: 'Starter Plan',
    text: 'Perfect for individuals and small teams getting started',
    monthly: 0,
    features: ['Account Aggregation', 'Expense Tracking', 'Basic Analytics System', 'Budgeting Tools', '24/7 Customer Support'],
  },
  {
    name: 'Growth Plan',
    text: 'Ideal for growing startups and mid-sized companies',
    monthly: 49,
    features: ['Everything in Starter Plan', 'Advanced Budgeting Tools', 'Customizable Dashboards', 'Transaction Insights', 'Enhanced Security'],
  },
  {
    name: 'Business Plan',
    text: 'Perfect for larger organizations with advanced needs',
    monthly: 99,
    features: ['Everything in Growth Plan', 'Investment Tracking', 'Integration Services', '24/7 VIP Support', 'Premium Security'],
  },
]

// Yearly billing: 2 months free
const yearlyPrice = (monthly: number) => Math.round(monthly * 10)

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')

  return (
    <section id="pricing" className="bg-night-grid px-5 py-20 md:pt-[72px] md:pb-24">
      <div className="mx-auto max-w-[1118px]">
        <div className="flex flex-col items-center text-center">
          <SectionBadge dark>Pricing Plan</SectionBadge>
          <h2 className="mt-4 max-w-[800px] text-[36px] leading-[1.2] font-semibold text-white md:text-5xl">
            Select a plan that will empower your business growth
          </h2>
          <p className="mt-5 max-w-[520px] text-lg leading-[1.45] text-[#bec3c1]">
            Each package includes personalized consultation and revisions to guarantee your satisfaction.
          </p>

          <div role="radiogroup" aria-label="Billing period" className="mt-10 flex rounded-full border border-white/10 bg-white/[0.04] p-1">
            {(['monthly', 'yearly'] as const).map((b) => (
              <button
                key={b}
                type="button"
                role="radio"
                aria-checked={billing === b}
                onClick={() => setBilling(b)}
                className={`h-11 w-32 rounded-full text-base transition-colors ${
                  billing === b ? 'bg-brand text-white' : 'text-[#bec3c1] hover:text-white'
                }`}
              >
                {b === 'monthly' ? 'Monthly' : 'Yearly'}
              </button>
            ))}
          </div>
          <p className="mt-3 h-5 text-sm text-lime" aria-live="polite">
            {billing === 'yearly' ? 'Pay yearly and get 2 months free' : ''}
          </p>
        </div>

        <ul className="mt-3 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => {
            const price = billing === 'monthly' ? plan.monthly : yearlyPrice(plan.monthly)
            return (
              <li
                key={plan.name}
                className="flex flex-col rounded-[32px] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-medium text-white">{plan.name}</h3>
                <p className="mt-4 min-h-[46px] text-base leading-[1.45] text-[#bec3c1]">{plan.text}</p>
                <p className="mt-8 flex items-baseline gap-1.5 text-white">
                  <span className="text-4xl font-medium">${price}</span>
                  <span className="text-base text-[#bec3c1]">/ per {billing === 'monthly' ? 'month' : 'year'}</span>
                </p>
                <ul className="mt-6 space-y-3 rounded-[20px] border border-white/10 bg-white/[0.04] p-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-base text-white">
                      <span className="grid size-[22px] shrink-0 place-items-center rounded-full bg-brand text-white">
                        <Check className="size-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#top"
                  className="mt-6 grid h-12 place-items-center rounded-full bg-brand text-base text-white transition-colors hover:bg-brand-dark"
                >
                  Select This Plan
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
