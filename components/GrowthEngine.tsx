'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import StatsAnimation from './StatsAnimation'

type Feature = {
  title: string
  subtitle: string
  description: string
  video?: string
  image?: string
  component?: string
  imagePosition: 'left' | 'right'
}

const features: Feature[] = [
  {
    title: 'Stand Out in a Crowded Market',
    subtitle: 'Be the obvious choice',
    description: "Thousands of agents are fighting for the same clients. A premium website instantly separates you from the competition and makes prospects remember your name.",
    video: '/videos/1.mp4',
    imagePosition: 'right',
  },
  {
    title: 'Turn Your Name Into a Brand',
    subtitle: 'Beyond just another agent',
    description: "Top producers build personal brands that attract referrals on autopilot. We create the online foundation that makes clients proud to recommend you.",
    video: '/videos/2.mp4',
    imagePosition: 'left',
  },
  {
    title: 'Work Smarter, Close More',
    subtitle: 'Let your website do the heavy lifting',
    description: "Every visitor sees your best listings, reads your testimonials, and can book a call instantly. You wake up to warm leads instead of cold calls.",
    component: 'stats',
    imagePosition: 'right',
  },
]

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const textItemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const mediaVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4])

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col gap-10 lg:gap-16 items-center ${
        feature.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
      style={{ opacity }}
    >
      {/* Content */}
      <motion.div
        className="flex-1 space-y-2"
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h3
          variants={textItemVariants}
          className="font-display text-2xl sm:text-3xl font-semibold text-gray-900"
        >
          {feature.title}
        </motion.h3>
        <motion.p
          variants={textItemVariants}
          className="text-cyan-600 font-semibold text-lg"
        >
          {feature.subtitle}
        </motion.p>
        <motion.p
          variants={textItemVariants}
          className="text-gray-600 leading-relaxed max-w-md pt-1"
        >
          {feature.description}
        </motion.p>
      </motion.div>

      {/* Image/Video */}
      <motion.div
        className="flex-1 w-full lg:min-w-[55%]"
        style={{ y }}
      >
        <motion.div
          className="aspect-[16/11] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center"
          variants={mediaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
        >
          {feature.component === 'stats' ? (
            <StatsAnimation />
          ) : feature.video ? (
            <video
              src={feature.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover pointer-events-none"
            />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function GrowthEngine() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28 pb-28 md:pb-40 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-cyan-600 font-semibold text-base tracking-wide uppercase mb-3"
          >
            Everything You Need
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl font-semibold text-gray-900"
          >
            The growth engine for modern real estate agents
          </motion.h2>
        </motion.div>

        {/* Features */}
        <div className="space-y-20 md:space-y-32">
          {features.map((feature, index) => (
            <FeatureRow key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
