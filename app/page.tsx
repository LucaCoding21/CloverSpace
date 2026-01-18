import Header from '@/components/Header'
import Hero from '@/components/Hero'
import GrowthEngine from '@/components/GrowthEngine'
import ServicesGrid from '@/components/ServicesGrid'
import About from '@/components/About'
import IntegrationsBar from '@/components/IntegrationsBar'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. HOOK: Immediate value prop */}
        <Hero />

        {/* 2. CREDIBILITY: Quick trust signal */}
        <IntegrationsBar />

        {/* 3. GROWTH ENGINE: Core value proposition */}
        <GrowthEngine />

        {/* 4. SERVICES: Bento grid of services */}
        <ServicesGrid />

        {/* 5. ABOUT: About us with mission, vision, belief */}
        <About />

        {/* 6. FINAL CTA: Call to action */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
