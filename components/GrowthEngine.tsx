'use client'

import { motion } from 'framer-motion'
import StatsAnimation from './StatsAnimation'

const features = [
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

export default function GrowthEngine() {
  return (
    <section className="bg-white py-20 md:py-28 pb-28 md:pb-40">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-600 font-semibold text-base tracking-wide uppercase mb-3">
            Everything You Need
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gray-900">
            The growth engine for modern real estate agents
          </h2>
        </motion.div>

        {/* Features */}
        <div className="space-y-20 md:space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-10 lg:gap-16 items-center ${
                feature.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-cyan-600 font-semibold text-lg">
                  {feature.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed max-w-md pt-1">
                  {feature.description}
                </p>
              </div>

              {/* Image/Video */}
              <div className="flex-1 w-full lg:min-w-[55%]">
                <div className="aspect-[16/11] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
