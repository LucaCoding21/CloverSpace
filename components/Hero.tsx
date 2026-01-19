'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, RefreshCw, Clock, Star, Check } from 'lucide-react'
import ContactFormPopup from '@/components/ContactFormPopup'

const valueBullets = [
  {
    icon: Star,
    title: 'Generate More Leads',
    shortTitle: 'More Leads',
    description: "Capture inquiries 24/7 with a site built to convert visitors into clients.",
  },
  {
    icon: RefreshCw,
    title: 'Build Instant Trust',
    shortTitle: 'Instant Trust',
    description: "Show buyers and sellers you're the established professional they want to work with.",
  },
  {
    icon: Clock,
    title: 'Close Deals Faster',
    shortTitle: 'Close Faster',
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
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <ContactFormPopup
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
      />
    <section className="relative overflow-hidden min-h-[100svh] bg-gray-950">
      {/* Background Video */}
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
        {/* Mobile: lighter gradient to show video, Desktop: left-side gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950/40 md:bg-gradient-to-r md:from-gray-950 md:via-gray-950/70 md:via-50% md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8 min-h-[100svh] flex items-center">
        <motion.div
          className="w-full md:max-w-xl lg:max-w-2xl pt-24 pb-12 md:py-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-cyan-400 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3 md:mb-4"
          >
            For Real Estate Professionals
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-medium text-[2rem] leading-[1.15] sm:text-5xl lg:text-6xl text-white sm:leading-[1.1] mb-6 md:mb-8"
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

          {/* Value Bullets - Compact on mobile, expanded on desktop */}
          <motion.div
            variants={bulletContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3 md:space-y-5 mb-8"
          >
            {valueBullets.map((bullet, index) => (
              <motion.div
                key={index}
                className="flex items-start md:items-center gap-3 md:gap-4"
                variants={bulletVariants}
              >
                <motion.div
                  className="mt-0.5 md:mt-0"
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
                  <Check className="w-5 h-5 md:hidden text-cyan-400 flex-shrink-0" strokeWidth={2.5} />
                  <bullet.icon className="hidden md:block w-6 h-6 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                </motion.div>
                {/* Mobile: shorter text, Desktop: full text */}
                <p className="text-gray-200 text-base md:text-lg md:text-gray-300">
                  <span className="md:hidden font-medium">{bullet.shortTitle}</span>
                  <span className="hidden md:inline">
                    <span className="text-white font-semibold">{bullet.title}:</span>{' '}
                    {bullet.description}
                  </span>
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Row */}
          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 sm:flex-row sm:gap-3"
          >
            <motion.button
              onClick={() => setIsContactFormOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 bg-cyan-500 text-gray-900 font-bold rounded-xl md:rounded-lg hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-base md:text-base"
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
            <motion.button
              onClick={scrollToHowItWorks}
              className="inline-flex items-center justify-center px-6 py-3.5 md:px-8 md:py-4 border border-white/30 text-white font-semibold rounded-xl md:rounded-lg hover:bg-white/5 transition-all text-base md:text-base"
              whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              How It Works
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
    </>
  )
}
