'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const headlineVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function FinalCTA() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])

  const scrollToForm = () => {
    document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="relative py-24 md:py-36 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <img
          src="/images/cta.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gray-950/70"
          style={{ opacity }}
        />
      </motion.div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          variants={headlineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight max-w-3xl mx-auto mb-8"
        >
          Ready to turn your online presence into your strongest asset?
        </motion.h2>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button
            onClick={scrollToForm}
            className="px-10 py-4 border-2 border-white text-white font-semibold text-sm tracking-wide uppercase rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(255,255,255,0.3)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Book My Free Strategy Call
          </motion.button>
        </motion.div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute left-10 top-1/4 w-2 h-2 bg-cyan-400/50 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-20 top-1/3 w-3 h-3 bg-cyan-400/30 rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 w-1.5 h-1.5 bg-white/40 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>
    </section>
  )
}
