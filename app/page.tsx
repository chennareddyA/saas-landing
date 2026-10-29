import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Features from '@/components/Features'
import Currencies from '@/components/Currencies'
import HowItWorks from '@/components/HowItWorks'
import Stats from '@/components/Stats'
import Pricing from '@/components/Pricing'
import SeamlessBanking from '@/components/SeamlessBanking'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

// Sections follow the Figma frame order, 120px apart (the frame's auto-layout gap)
export default function Home() {
  return (
    <>
      <Hero />
      <main className="space-y-20 pt-20 pb-20 md:space-y-[120px] md:pt-[120px] md:pb-[120px]">
        <Partners />
        <Features />
        <Currencies />
        <HowItWorks />
        <Stats />
        <Pricing />
        <SeamlessBanking />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
