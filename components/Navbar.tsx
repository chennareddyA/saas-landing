'use client'

import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { Close, Menu } from './icons'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Company', href: '#testimonials' },
  { label: 'Resources', href: '#footer' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="relative z-20 border-b border-white/[0.06]">
      <div className="mx-auto flex h-[98px] max-w-[1240px] items-center justify-between px-5 lg:px-0">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-base text-[#b8bdbe] transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#pricing"
            className="inline-flex h-12 items-center rounded-full border border-white/20 px-6 text-base text-white transition-colors hover:border-white/50"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="inline-flex h-12 items-center rounded-full bg-brand px-6 text-base text-white transition-colors hover:bg-brand-dark"
          >
            Register
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid size-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/[0.06] bg-night px-5 pt-2 pb-6 lg:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/[0.06] py-4 text-lg text-[#d3d7d8]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a href="#pricing" onClick={() => setOpen(false)} className="grid h-12 place-items-center rounded-full border border-white/20 text-white">
              Sign in
            </a>
            <a href="#pricing" onClick={() => setOpen(false)} className="grid h-12 place-items-center rounded-full bg-brand text-white">
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
