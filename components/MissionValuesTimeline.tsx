'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: 'Clarity Over Complexity',
    description: 'Great design is invisible. No clutter, no confusion.',
  },
  {
    title: 'Your Success is Ours',
    description: 'Every decision we make helps you close more deals.',
  },
  {
    title: 'Built to Last',
    description: 'No shortcuts. Websites that scale with you for years.',
  },
  {
    title: 'Honest Partnership',
    description: 'Transparent communication builds trust and results.',
  },
]

export default function MissionValuesTimeline() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission - Top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Our Mission
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight max-w-3xl mx-auto">
            To help real estate professionals build brands that attract premium clients and stand the test of time.
          </h2>
        </motion.div>

        {/* Values - Timeline */}
        <div className="relative">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyan-600 font-semibold text-sm tracking-widest uppercase mb-12 text-center"
          >
            Our Values
          </motion.p>

          {/* Timeline line - desktop only */}
          <div className="hidden md:block absolute left-1/2 top-24 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-16`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className={`bg-gray-50 rounded-2xl p-6 inline-block ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <h3 className="text-gray-900 font-semibold text-xl mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot - desktop only */}
                <div className="hidden md:flex w-12 h-12 bg-cyan-500 rounded-full items-center justify-center text-white font-bold text-sm z-10 flex-shrink-0">
                  0{index + 1}
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
