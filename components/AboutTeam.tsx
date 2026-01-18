'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '7 Days', label: 'Average Delivery' },
  { value: '100%', label: 'Satisfaction Guarantee' },
  { value: '24/7', label: 'Your Site Works For You' },
]


export default function AboutTeam() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cyan-600 font-semibold text-base tracking-wide uppercase mb-3">
              About Us
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              We help real estate agents build their digital presence
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We're a small team of designers, developers, and marketers who specialize in one thing: helping real estate professionals stand out online. We understand the unique challenges agents face and build solutions that actually work.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              No cookie-cutter templates. No complicated tech. Just clean, effective websites that generate leads and build trust with your clients.
            </p>

            {/* Stats */}
            <div className="flex gap-10 lg:gap-14">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-3xl lg:text-4xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Single Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
