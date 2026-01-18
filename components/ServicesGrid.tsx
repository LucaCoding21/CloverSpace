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

export default function ServicesGrid() {
  return (
    <section className="bg-gray-950 py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
            Designed to Rank and Convert
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:row-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[400px] border border-white/5"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
                {services[0].title}
              </h3>
              <p className="text-gray-400 text-lg max-w-sm">
                {services[0].description}
              </p>
            </div>
            <div className="mt-8 aspect-[16/10] bg-gray-800/50 rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"
                alt="Custom website design"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-white/5"
          >
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
              {services[1].title}
            </h3>
            <p className="text-gray-400">
              {services[1].description}
            </p>
            <div className="mt-6 aspect-[16/8] rounded-xl overflow-hidden">
              <SearchAnimation />
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-white/5"
          >
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
              {services[2].title}
            </h3>
            <p className="text-gray-400">
              {services[2].description}
            </p>
            <div className="mt-6 aspect-[16/8] bg-gray-800/50 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Lead generation"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
