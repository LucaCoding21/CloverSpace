'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: 'Vision',
    description: 'A market where performance matters.',
  },
  {
    title: 'Belief',
    description: 'Trust is earned in the details people can verify.',
  },
]

export default function MissionValues() {
  return (
    <section className="relative bg-gray-950 py-32 md:py-40 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Mission Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-8"
          >
            // Our Mission
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] max-w-5xl"
          >
            Combine modern design with
            <span className="relative mx-4">
              <span className="relative z-10 text-gray-950 px-4">local visibility</span>
              <span className="absolute inset-0 bg-cyan-400 -skew-x-6" />
            </span>
            so your site earns inquiries.
          </motion.h2>
        </motion.div>

        {/* Vision & Belief */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex items-start gap-6">
                <span className="text-7xl font-bold text-white/5 group-hover:text-cyan-500/20 transition-colors duration-500 leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="pt-4">
                  <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
