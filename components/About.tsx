'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const stepDuration = duration / steps
          let currentStep = 0

          const timer = setInterval(() => {
            currentStep++
            if (currentStep >= steps) {
              setDisplayValue(value)
              clearInterval(timer)
            } else {
              const progress = currentStep / steps
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplayValue(Math.floor(value * eased))
            }
          }, stepDuration)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      {displayValue.toLocaleString()}{suffix}
    </motion.span>
  )
}

const stats = [
  { value: 98, suffix: '%', label: 'Client satisfaction rate' },
  { value: 3, suffix: 'x', label: 'Average increase in leads' },
  { value: 14, suffix: ' days', label: 'Average delivery time' },
  { value: 24, suffix: '/7', label: 'Website uptime & support' },
]

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const headerItemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
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

const cardGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const statContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const statItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function About() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const scrollToForm = () => {
    document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" ref={sectionRef} className="bg-white py-28 md:py-36 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16"
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left - Title & CTA */}
          <motion.div variants={headerItemVariants}>
            <motion.p
              className="text-cyan-600 font-semibold text-base tracking-wide uppercase mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.p>
            <motion.h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Empower your business effortlessly
            </motion.h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div variants={headerItemVariants}>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              We're a small team of designers, developers, and marketers who specialize in one thing: helping real estate professionals stand out online. We understand the unique challenges agents face and build solutions that actually work.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Cards */}
        <motion.div
          className="grid lg:grid-cols-2 gap-6"
          variants={cardGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Left - Mission Card (Full Height) */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-3xl overflow-hidden min-h-[500px]"
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          >
            {/* Background Image with parallax */}
            <motion.div
              className="absolute inset-0"
              style={{ y: backgroundY }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Mission background"
                className="w-full h-[120%] object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/80" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col justify-end">
              <motion.p
                className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our Mission
              </motion.p>
              <motion.h3
                className="font-display text-2xl lg:text-3xl font-normal text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Combine modern design with local visibility so your site earns inquiries.
              </motion.h3>
            </div>
          </motion.div>

          {/* Right - Vision & Belief Cards */}
          <motion.div
            className="flex flex-col gap-6"
            variants={cardGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Vision Card */}
            <motion.div
              variants={cardVariants}
              className="relative rounded-3xl overflow-hidden min-h-[240px] flex flex-col justify-end"
              whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Vision background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-100/90" />
              </div>
              <div className="relative z-10 p-8 lg:p-10">
                <motion.p
                  className="text-cyan-600 font-semibold text-sm tracking-widest uppercase mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our Vision
                </motion.p>
                <motion.h3
                  className="font-display text-xl lg:text-2xl font-normal text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  A market where performance matters.
                </motion.h3>
              </div>
            </motion.div>

            {/* Belief Card */}
            <motion.div
              variants={cardVariants}
              className="relative rounded-3xl overflow-hidden min-h-[240px] flex flex-col justify-end"
              whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Belief background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-900/85" />
              </div>
              <div className="relative z-10 p-8 lg:p-10">
                <motion.p
                  className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our Belief
                </motion.p>
                <motion.h3
                  className="font-display text-xl lg:text-2xl font-normal text-white leading-tight"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Trust is earned in the details people can verify.
                </motion.h3>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16"
          variants={statContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statItemVariants}
                className={`text-center ${
                  index < stats.length - 1 ? 'lg:border-r lg:border-gray-200' : ''
                }`}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-500 mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <motion.p
                  className="text-gray-600 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-gray-900 font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
