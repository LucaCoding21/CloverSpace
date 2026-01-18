'use client'

import { motion } from 'framer-motion'
import SearchAnimation from './SearchAnimation'

const services = [
  {
    title: 'Custom Website Design',
    description: 'A stunning, mobile first website that reflects your brand and captures leads 24/7.',
    size: 'large',
  },
  {
    title: 'SEO Optimization',
    description: 'Rank higher on Google and get found by buyers and sellers in your area.',
    size: 'small',
  },
  {
    title: 'Lead Generation',
    description: 'Convert visitors into qualified leads with strategic calls-to-action.',
    size: 'small',
  },
]

const headerVariants = {
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

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const largeCardVariants = {
  hidden: { opacity: 0, x: -60, rotateY: 10 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const smallCardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const cardContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-gray-950 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
            Designed to Rank and Convert
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-4 lg:gap-6"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Large Card */}
          <motion.div
            variants={largeCardVariants}
            className="md:row-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[400px] border border-white/5"
            whileHover={{
              scale: 1.02,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              transition: { duration: 0.4 }
            }}
            style={{ perspective: 1000 }}
          >
            <motion.div variants={cardContentVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h3
                variants={cardItemVariants}
                className="text-2xl lg:text-3xl font-semibold text-white mb-3"
              >
                {services[0].title}
              </motion.h3>
              <motion.p
                variants={cardItemVariants}
                className="text-gray-400 text-lg max-w-sm"
              >
                {services[0].description}
              </motion.p>
            </motion.div>
            <motion.div
              className="mt-8 aspect-[8.5/11] bg-gray-800/50 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <video
                src="/videos/3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover pointer-events-none"
              />
            </motion.div>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div
            variants={smallCardVariants}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-white/5"
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.4)',
              transition: { duration: 0.3 }
            }}
          >
            <motion.div variants={cardContentVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h3
                variants={cardItemVariants}
                className="text-xl lg:text-2xl font-semibold text-white mb-2"
              >
                {services[1].title}
              </motion.h3>
              <motion.p
                variants={cardItemVariants}
                className="text-gray-400"
              >
                {services[1].description}
              </motion.p>
            </motion.div>
            <motion.div
              className="mt-6 aspect-[16/8] rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <SearchAnimation />
            </motion.div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div
            variants={smallCardVariants}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-white/5"
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.4)',
              transition: { duration: 0.3 }
            }}
          >
            <motion.div variants={cardContentVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h3
                variants={cardItemVariants}
                className="text-xl lg:text-2xl font-semibold text-white mb-2"
              >
                {services[2].title}
              </motion.h3>
              <motion.p
                variants={cardItemVariants}
                className="text-gray-400"
              >
                {services[2].description}
              </motion.p>
            </motion.div>
            <motion.div
              className="mt-6 aspect-[16/8] bg-gray-800/50 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Lead generation"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
