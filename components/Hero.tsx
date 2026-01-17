'use client'

import { motion } from 'framer-motion'
import { ArrowRight, RefreshCw, Clock, Star } from 'lucide-react'

const valueBullets = [
  {
    icon: RefreshCw,
    title: 'Recurring',
    description: 'Pages built to push quarterly sign ups, not one time jobs.',
  },
  {
    icon: Clock,
    title: 'Responsive',
    description: 'After hours lead capture and fast follow up.',
  },
  {
    icon: Star,
    title: 'Trust',
    description: 'Review system that helps you close more calls.',
  },
]


export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden min-h-[100svh] md:min-h-[90vh] bg-gray-950">
      {/* Background Video - Right side on desktop */}
      <div className="absolute inset-0 md:left-[15%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay - covers left half for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 via-50% to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[100svh] md:min-h-[90vh] flex items-center py-20 md:py-0">
        <div className="w-full md:max-w-xl lg:max-w-2xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4 mt-16 md:mt-0"
          >
            For Pest Control Companies
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-8"
          >
            Turn One Time Jobs Into{' '}
            <span className="text-cyan-400">Recurring Revenue</span>
          </motion.h1>

          {/* Value Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-5 mb-8"
          >
            {valueBullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-4">
                <bullet.icon className="w-6 h-6 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-gray-300 text-lg">
                  <span className="text-white font-semibold">{bullet.title}:</span>{' '}
                  {bullet.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-gray-900 font-bold rounded-full hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Get Free Video Audit
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </button>
            <a
              href="#process"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
            >
              How It Works
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
