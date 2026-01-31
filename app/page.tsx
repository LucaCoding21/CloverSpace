import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import IntegrationsBar from '@/components/IntegrationsBar'
import Footer from '@/components/Footer'

const GrowthEngine = dynamic(() => import('@/components/GrowthEngine'))
const ServicesGrid = dynamic(() => import('@/components/ServicesGrid'))
const About = dynamic(() => import('@/components/About'))
const Contact = dynamic(() => import('@/components/Contact'))
const FinalCTA = dynamic(() => import('@/components/FinalCTA'))

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

        {/* 5. ABOUT: About us with mission, vision, belief + stats */}
        <About />

        {/* 6. CONTACT: Contact form section */}
        <Contact />

        {/* 7. FINAL CTA: Call to action */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
