'use client'

import { motion } from 'framer-motion'
import { ArrowRight, RefreshCw, Clock, Star } from 'lucide-react'

const valueBullets = [
  {
    icon: Star,
    title: 'Generate More Leads',
    description: "Capture inquiries 24/7 with a site built to convert visitors into clients.",
  },
  {
    icon: RefreshCw,
    title: 'Build Instant Trust',
    description: "Show buyers and sellers you're the established professional they want to work with.",
  },
  {
    icon: Clock,
    title: 'Close Deals Faster',
    description: 'Showcase listings, testimonials, and credentials all in one place.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const bulletContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.6,
    },
  },
}

const bulletVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const ctaVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 1.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden h-[100svh] bg-gray-950">
      {/* Background Video - Right side on desktop */}
      <div className="absolute inset-0 md:left-[15%]">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </motion.video>
        {/* Gradient overlay - covers left half for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 via-50% to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          className="w-full md:max-w-xl lg:max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4 mt-24 md:mt-12"
          >
            For Real Estate Professionals
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-8"
          >
            Make Your Brand Feel{' '}
            <motion.span
              className="text-cyan-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Established
            </motion.span>
          </motion.h1>

          {/* Value Bullets */}
          <motion.div
            variants={bulletContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-5 mb-8"
          >
            {valueBullets.map((bullet, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                variants={bulletVariants}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7 + index * 0.12,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  <bullet.icon className="w-6 h-6 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                </motion.div>
                <p className="text-gray-300 text-lg">
                  <span className="text-white font-semibold">{bullet.title}:</span>{' '}
                  {bullet.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Row */}
          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <motion.button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-gray-900 font-bold rounded-lg hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Growing Today
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </motion.span>
            </motion.button>
            <motion.a
              href="#process"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all"
              whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              How It Works
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
