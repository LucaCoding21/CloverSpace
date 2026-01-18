'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function About() {
  const scrollToForm = () => {
    document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Left - Title & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-cyan-600 font-semibold text-base tracking-wide uppercase mb-3">
              About Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              Empower your business effortlessly
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              We're a small team of designers, developers, and marketers who specialize in one thing: helping real estate professionals stand out online. We understand the unique challenges agents face and build solutions that actually work.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section - Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left - Mission Card (Full Height) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden min-h-[500px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Mission background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col justify-end">
              <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4">
                Our Mission
              </p>
              <h3 className="font-display text-2xl lg:text-3xl font-normal text-white leading-tight">
                Combine modern design with local visibility so your site earns inquiries.
              </h3>
            </div>
          </motion.div>

          {/* Right - Vision & Belief Cards */}
          <div className="flex flex-col gap-6">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden min-h-[240px] flex flex-col justify-end"
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
                <p className="text-cyan-600 font-semibold text-sm tracking-widest uppercase mb-4">
                  Our Vision
                </p>
                <h3 className="font-display text-xl lg:text-2xl font-normal text-gray-900 leading-tight">
                  A market where performance matters.
                </h3>
              </div>
            </motion.div>

            {/* Belief Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden min-h-[240px] flex flex-col justify-end"
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
                <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4">
                  Our Belief
                </p>
                <h3 className="font-display text-xl lg:text-2xl font-normal text-white leading-tight">
                  Trust is earned in the details people can verify.
                </h3>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-gray-900 font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
