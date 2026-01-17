import Header from '@/components/Header'
import Hero from '@/components/Hero'
import IntegrationsBar from '@/components/IntegrationsBar'
import TeamIntro from '@/components/TeamIntro'
import PainPoints from '@/components/PainPoints'
import Services from '@/components/Services'
import Comparison from '@/components/Comparison'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import CTAForm from '@/components/CTAForm'
import Footer from '@/components/Footer'
import ExitIntentPopup from '@/components/ExitIntentPopup'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. HOOK: Immediate value prop + interactive calculator */}
        <Hero />

        {/* 2. CREDIBILITY: Quick trust signal - "we integrate with tools you use" */}
        <IntegrationsBar />

        {/* 3. PROBLEM: Relatable pain points - build trust through understanding */}
        <PainPoints />

        {/* 4. HOW: Show the process before who - they need to believe it works */}
        <Process />

        {/* 5. WHAT: Specific services - they're interested, show depth */}
        <Services />

        {/* 5b. COMPARISON: Show the difference CloverSpace makes */}
        <Comparison />

        {/* 6. WHO: Now they trust the method, introduce the people */}
        <TeamIntro />

        {/* 8. INVESTMENT: Pricing after they see full value */}
        <Pricing />

        {/* 9. ACTION: Final conversion point */}
        <CTAForm />
      </main>
      <Footer />
      <ExitIntentPopup />
    </>
  )
}
