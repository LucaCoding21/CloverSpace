'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function TeamIntro() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background split for transition */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-white" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0a0a0a]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-[#f5f5f5] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col md:flex-row min-h-[500px] lg:min-h-[550px]">
            {/* Photo Section - Left */}
            <div className="w-full md:w-1/2 relative">
              <div className="h-80 md:h-full md:absolute md:inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/duoteam.jpeg"
                  alt="Our team"
                  className="w-full h-full object-cover object-top"
                />
              </div>

            </div>

            {/* Text Content - Right */}
            <div className="w-full md:w-1/2 p-10 md:p-12 lg:p-16 flex flex-col justify-center">
              {/* Eyebrow */}
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-[0.2em] mb-5">
                Our Intro
              </p>

              {/* Headline */}
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-[1.1] mb-6 uppercase">
                We&apos;re Not a Big Agency.<br />
                <span className="text-cyan-500">It&apos;s Just Us.</span>
              </h2>

              {/* Quote */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                We work best with pest owners who want a website that actually helps the business. More calls, more trust, and more customers who stick around. If we&apos;re a fit, we&apos;ll be hands on from start to launch, and we&apos;ll make sure you feel taken care of the whole way.
              </p>

              {/* Attribution */}
              <p className="text-gray-900 font-semibold text-lg mb-6">
                — Claire & Luca
              </p>

              {/* CTA */}
              <div>
                <button
                  onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 text-cyan-600 font-bold rounded-lg hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300 group"
                >
                  Work With Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
