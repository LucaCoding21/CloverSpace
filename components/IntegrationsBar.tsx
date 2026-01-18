'use client'

import { motion } from 'framer-motion'

const brokerages = [
  { name: 'RE/MAX', logo: '/images/logos/remax.png', height: 'h-8 sm:h-10' },
  { name: 'Keller Williams', logo: '/images/logos/keller-williams.png', height: 'h-10 sm:h-14' },
  { name: 'Century 21', logo: '/images/century21.png', height: 'h-8 sm:h-10' },
  { name: 'Coldwell Banker', logo: '/images/coldwell-banker.png', height: 'h-8 sm:h-10' },
  { name: 'Royal LePage', logo: '/images/logos/royal-lepage.png', height: 'h-8 sm:h-10' },
  { name: 'eXp Realty', logo: '/images/logos/exp-realty.png', height: 'h-10 sm:h-14' },
  { name: 'Sotheby\'s', logo: '/images/sothebys.png', height: 'h-8 sm:h-10' },
  { name: 'Sutton', logo: '/images/logos/sutton.png', height: 'h-14 sm:h-20' },
]

export default function IntegrationsBar() {
  // Duplicate the array for seamless looping
  const duplicatedBrokerages = [...brokerages, ...brokerages]

  return (
    <section className="bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
        >
          <span className="text-gray-600 text-[10px] font-medium uppercase tracking-[0.15em] whitespace-nowrap flex-shrink-0">
            Built for agents at
          </span>

          <div className="hidden sm:block w-px h-6 bg-gray-800 flex-shrink-0" />

          {/* Carousel container */}
          <div className="flex-1 overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

            {/* Sliding track */}
            <motion.div
              className="flex items-center gap-12 sm:gap-16"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedBrokerages.map((brokerage, index) => (
                <div
                  key={`${brokerage.name}-${index}`}
                  className="h-14 flex items-center flex-shrink-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={brokerage.logo}
                    alt={brokerage.name}
                    className={`${brokerage.height} w-auto object-contain opacity-60 hover:opacity-90 transition-opacity brightness-0 invert`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
