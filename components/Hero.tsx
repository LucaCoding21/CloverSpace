'use client'

import { motion } from 'framer-motion'
import { RefreshCw, Clock, Star } from 'lucide-react'
import Link from 'next/link'

const valueBullets = [
  {
    icon: Star,
    title: 'Generate More Leads',
    shortTitle: 'More Leads',
    description: "Your site works around the clock, turning visitors into inquiries while you sleep.",
  },
  {
    icon: RefreshCw,
    title: 'Build Instant Trust',
    shortTitle: 'Instant Trust',
    description: "First impressions happen online. Look like the established pro you already are.",
  },
  {
    icon: Clock,
    title: 'Close Deals Faster',
    shortTitle: 'Close Faster',
    description: 'Listings, testimonials, and credentials all in one place that does the talking for you.',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
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
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
    <section className="relative overflow-hidden min-h-[100svh] bg-gray-950">
      {/* Background Video */}
      <div className="absolute inset-0 md:left-[15%]">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
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
            Vancouver&rsquo;s Realtor Website Agency
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-medium text-[2.75rem] leading-[1.1] sm:text-5xl lg:text-6xl text-white sm:leading-[1.1] mb-6 md:mb-8"
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

          {/* Mobile: single sentence, Desktop: expanded bullets */}
          <motion.p
            variants={itemVariants}
            className="md:hidden text-gray-300 text-base leading-relaxed mb-8"
          >
            We build websites that help Vancouver realtors generate leads, earn trust, and close more deals without lifting a finger.
          </motion.p>

          <motion.div
            variants={bulletContainerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:block space-y-5 mb-8"
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
                <p className="text-lg text-gray-300">
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
            className="flex flex-col gap-3 sm:flex-row sm:gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 bg-cyan-500 text-gray-900 font-bold rounded-xl md:rounded-lg hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-base"
            >
              Start Growing Today
            </Link>
            <motion.button
              onClick={scrollToHowItWorks}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 border border-white/30 text-white font-semibold rounded-xl md:rounded-lg hover:bg-white/5 transition-all text-base"
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
