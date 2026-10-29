import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import './globals.css'

// Urbanist is the main typeface in the Figma design; Inter is used in the footer and logos
const urbanist = Urbanist({ variable: '--font-urbanist', subsets: ['latin'] })
const inter = Inter({ variable: '--font-inter-var', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Euphoria | Cross-border payments made easy',
  description:
    'Send and receive money globally without the bank fees. Multi-currency accounts, real-time payments and smart budgeting.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${urbanist.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
