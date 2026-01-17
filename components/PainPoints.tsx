'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function PainPoints() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [monthlyCalls, setMonthlyCalls] = useState(100)
  const [yearlyRevenue, setYearlyRevenue] = useState(0)

  useEffect(() => {
    const customers = Math.floor((monthlyCalls * 15) / 100)
    setYearlyRevenue(customers * 97 * 12)
  }, [monthlyCalls])

  const scrollToForm = () => {
    document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="py-32 md:py-40 bg-gray-900 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-6">
              The Problem
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
              Your website is selling
              <span className="block text-gray-500">one-time jobs.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Most pest control websites bury their plans on a pricing page. Yours should lead with them.
            </p>
          </motion.div>

          {/* Right: Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="p-6 md:p-8"
              style={{
                backgroundColor: '#12141a',
                border: '1px solid #1a1f2e',
                borderRadius: '16px',
              }}
            >
              {/* Calculator header */}
              <p className="text-gray-400 text-sm mb-6 text-center">
                See how much recurring revenue you're missing
              </p>

              {/* Slider */}
              <div className="mb-6">
                <div className="text-center mb-4">
                  <span className="text-[#eaeaea] text-sm font-medium block mb-1">Monthly Emergency Calls</span>
                  <span className="text-cyan-400 font-display text-4xl">{monthlyCalls}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={monthlyCalls}
                  onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #06B6D4 0%, #06B6D4 ${((monthlyCalls - 20) / 480) * 100}%, #374151 ${((monthlyCalls - 20) / 480) * 100}%, #374151 100%)`
                  }}
                />
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  <span>20</span>
                  <span>500</span>
                </div>
              </div>

              {/* Result */}
              <div className="rounded-xl p-6 text-center mb-6" style={{ backgroundColor: '#0a0a0a' }}>
                <p className="text-gray-500 text-sm mb-2">
                  Potential yearly recurring revenue
                </p>
                <div className="font-display text-5xl md:text-6xl text-cyan-400">
                  ${yearlyRevenue.toLocaleString()}
                </div>
                <p className="text-cyan-400 text-xs mt-2">
                  Based on 15% converting to $97/mo plans
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToForm}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-cyan-500 text-gray-900 font-bold rounded-xl hover:bg-cyan-400 transition-colors"
              >
                Estimate My Plan Revenue
                <ArrowRight className="w-5 h-5" strokeWidth={1.6} />
              </button>

              <p className="text-gray-600 text-xs text-center mt-3">
                5 minutes · No obligation · We'll show you exactly what you're losing
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
