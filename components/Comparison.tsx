'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, ClipboardList, Palette, Wrench, TrendingUp, Lightbulb, Search } from 'lucide-react'

const comparisonData = [
  {
    icon: User,
    feature: 'Recurring Revenue',
    cloverSpace: 'Dedicated pricing page that sells quarterly plans on autopilot',
    without: 'One-time jobs with no predictable income',
  },
  {
    icon: ClipboardList,
    feature: 'Lead Capture',
    cloverSpace: '24/7 AI chat + SMS that books jobs while you sleep',
    without: 'Missed calls and lost leads after hours',
  },
  {
    icon: Palette,
    feature: 'Online Reputation',
    cloverSpace: 'Automated review requests that generate 10-30 Google reviews/month',
    without: 'Manually asking for reviews (or forgetting entirely)',
  },
  {
    icon: Wrench,
    feature: 'Website Speed',
    cloverSpace: 'Mobile optimized site that loads in under 2 seconds',
    without: 'Slow, outdated site that loses impatient visitors',
  },
  {
    icon: TrendingUp,
    feature: 'Integrations',
    cloverSpace: 'Built in CRM, scheduling, payments & review tools',
    without: 'Juggling multiple disconnected platforms',
  },
  {
    icon: Lightbulb,
    feature: 'Industry Focus',
    cloverSpace: 'Built specifically for pest control. We know what converts',
    without: "Generic templates that don't speak to your customers",
  },
  {
    icon: Search,
    feature: 'Free Website Audit',
    cloverSpace: 'Get a free video review of your current site with growth opportunities',
    without: 'No idea where your website is losing leads',
  },
]

export default function Comparison() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-cyan-600 font-medium tracking-widest uppercase text-sm mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
            The Difference
          </h2>
          <p className="text-gray-500 text-lg">
            See how CloverSpace stacks up against going it alone.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr]">
            <div className="bg-white p-4 md:p-6" />
            <div className="bg-cyan-500 p-4 md:p-6 text-center">
              <span className="font-display text-lg md:text-xl text-gray-900">CloverSpace</span>
            </div>
            <div className="bg-red-50 p-4 md:p-6 text-center border-l border-red-100">
              <span className="font-medium text-red-700 text-lg md:text-xl">Without</span>
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_1.5fr_1.5fr] border-t border-gray-200"
            >
              {/* Feature Label */}
              <div className="bg-white p-4 md:p-6 flex items-center gap-3">
                <row.icon className="w-5 h-5 text-cyan-600 flex-shrink-0" strokeWidth={1.5} />
                <span className="font-medium text-gray-900 text-sm md:text-base">{row.feature}</span>
              </div>

              {/* CloverSpace Column */}
              <div className="bg-cyan-50 p-4 md:p-6 flex items-center justify-center text-center">
                <span className="text-sm md:text-base text-cyan-900">{row.cloverSpace}</span>
              </div>

              {/* Without Column */}
              <div className="bg-red-50 p-4 md:p-6 flex items-center justify-center text-center border-l border-red-100">
                <span className="text-sm md:text-base text-red-700">{row.without}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
