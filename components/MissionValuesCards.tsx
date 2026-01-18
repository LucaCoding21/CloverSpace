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

export default function MissionValuesCards() {
  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission - Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-3xl p-10 md:p-16 mb-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
          <div className="relative z-10">
            <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-6">
              Our Mission
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight max-w-4xl mx-auto">
              To help real estate professionals build brands that attract premium clients and stand the test of time.
            </h2>
            <div className="w-16 h-1 bg-cyan-500 mx-auto mt-8" />
          </div>
        </motion.div>

        {/* Values - Smaller Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-cyan-600 font-bold text-sm">0{index + 1}</span>
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
