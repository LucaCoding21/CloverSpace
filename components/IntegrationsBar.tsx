'use client'

import { motion } from 'framer-motion'

const brokerages = [
  { name: 'RE/MAX', logo: '/images/logos/remax.png', height: 'h-8 sm:h-10' },
  { name: 'Keller Williams', logo: '/images/logos/keller-williams.png', height: 'h-10 sm:h-14' },
  { name: 'Royal LePage', logo: '/images/logos/royal-lepage.png', height: 'h-8 sm:h-10' },
  { name: 'eXp Realty', logo: '/images/logos/exp-realty.png', height: 'h-10 sm:h-14' },
  { name: 'Sutton', logo: '/images/logos/sutton.png', height: 'h-14 sm:h-20' },
]

export default function IntegrationsBar() {
  return (
    <section className="bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <span className="text-gray-600 text-[10px] font-medium uppercase tracking-[0.15em] whitespace-nowrap">
            Built for agents at
          </span>

          <div className="hidden sm:block w-px h-6 bg-gray-800" />

          <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 lg:gap-10">
            {brokerages.map((brokerage, index) => (
              <motion.div
                key={brokerage.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 + index * 0.05 }}
                className="h-14 flex items-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brokerage.logo}
                  alt={brokerage.name}
                  className={`${brokerage.height} w-auto object-contain opacity-60 hover:opacity-90 transition-opacity brightness-0 invert`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
