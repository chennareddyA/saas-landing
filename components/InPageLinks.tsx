'use client'

import { useEffect } from 'react'

/**
 * Smoothly scrolls to sections for links like href="#pricing" without adding
 * a new browser-history entry for every click. The Back button then leaves
 * the page instead of stepping through each section visited.
 */
export default function InPageLinks() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      // Leave modified clicks (open in new tab, etc.) to the browser
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link) return

      const id = link.getAttribute('href')!.slice(1)
      const target = id ? document.getElementById(id) : null
      if (!target) return

      e.preventDefault()
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      // Update the address bar without creating a history entry
      history.replaceState(null, '', `#${id}`)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
