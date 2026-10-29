'use client'

import { useState } from 'react'
import { FlagEU, FlagUS } from './Flags'
import { ChevronDown, Swap } from './icons'

// Demo rate; a real product would fetch live rates
const USD_TO_EUR = 0.92

type Code = 'USD' | 'EUR'
const flags = { USD: FlagUS, EUR: FlagEU }
const symbols = { USD: '$', EUR: '€' }

function format(code: Code, value: number) {
  return `${symbols[code]}${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function Row({ code, value, onChange, label }: { code: Code; value: string; onChange?: (v: string) => void; label: string }) {
  const Flag = flags[code]
  return (
    <div className="rounded-[20px] bg-surface p-2.5">
      <div className="flex h-[54px] items-center gap-2 rounded-[14px] bg-white px-4">
        <Flag className="size-7" />
        <span className="text-lg text-ink">{code}</span>
        <ChevronDown className="size-4 text-ink" />
        {onChange ? (
          <span className="ml-auto flex items-center text-lg text-ink">
            {symbols[code]}
          <input
            inputMode="decimal"
            aria-label={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            size={Math.max(value.length, 1)}
            className="bg-transparent text-right text-lg text-ink outline-none [field-sizing:content]"
          />
          </span>
        ) : (
          <output aria-label={label} className="ml-auto text-lg text-ink">
            {value}
          </output>
        )}
      </div>
    </div>
  )
}

export default function CurrencyConverter() {
  const [from, setFrom] = useState<Code>('USD')
  const [amount, setAmount] = useState('10589.78')
  const to: Code = from === 'USD' ? 'EUR' : 'USD'

  const numeric = Number(amount.replace(/[^0-9.]/g, '')) || 0
  const converted = from === 'USD' ? numeric * USD_TO_EUR : numeric / USD_TO_EUR

  return (
    <div className="w-full max-w-[443px] rounded-[28px] bg-white p-5 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
      <p className="text-center text-xl font-medium text-ink">Currency Markets</p>
      <p className="mt-1 text-center text-sm text-body">Latest prices of top crypto assets.</p>

      <div className="relative mt-5 space-y-2">
        <Row code={from} value={amount} onChange={setAmount} label={`Amount in ${from}`} />
        <button
          type="button"
          onClick={() => {
            setFrom(to)
            setAmount(converted.toFixed(2))
          }}
          aria-label="Swap currencies"
          className="absolute top-1/2 left-1/2 z-10 grid size-[34px] -translate-1/2 place-items-center rounded-full border-2 border-white bg-brand text-white transition-transform hover:rotate-180"
        >
          <Swap className="size-4" />
        </button>
        <Row code={to} value={format(to, converted)} label={`Converted amount in ${to}`} />
      </div>

      <button
        type="button"
        className="mt-6 h-12 w-full rounded-full bg-night text-lg tracking-wide text-white transition-colors hover:bg-black"
      >
        CONVERT
      </button>
    </div>
  )
}
