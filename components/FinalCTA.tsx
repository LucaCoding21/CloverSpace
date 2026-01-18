'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/cta.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-950/70" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight max-w-3xl mx-auto mb-8"
        >
          Ready to turn your online presence into your strongest asset?
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={scrollToForm}
          className="px-10 py-4 border-2 border-white text-white font-semibold text-sm tracking-wide uppercase rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
        >
          Book My Free Strategy Call
        </motion.button>
      </div>
    </section>
  )
}
