'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Shield, Award, ArrowRight, Pen } from 'lucide-react'

const industryStats = [
  {
    icon: TrendingUp,
    stat: '+22 Plans',
    label: 'in 60 Days',
    description: 'Mock Client A (Roach Specialists)',
    note: 'Projected based on industry benchmarks',
  },
  {
    icon: Shield,
    stat: '$40k–$120k',
    label: 'Recurring Added',
    description: 'Optimized Sites Average',
    note: 'Hook Agency Data for home services',
  },
  {
    icon: Award,
    stat: '110–240%',
    label: 'Inquiry Boost',
    description: 'With Quarterly Plan Funnels',
    note: '2025 pest industry benchmarks',
  },
]

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="results"
      ref={ref}
      className="py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            Real Pest Wins{' '}
            <span className="text-cyan-500">Starting Now</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            We&apos;re new, but our approach is backed by proven industry data.
            Here&apos;s what optimized pest sites achieve.
          </p>
        </motion.div>

        {/* Industry Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {industryStats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="bg-gray-950 rounded-2xl p-8 h-full text-center">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <div className="font-display text-4xl text-cyan-400 mb-1">
                  {item.stat}
                </div>
                <div className="text-white font-semibold mb-3">
                  {item.label}
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  {item.description}
                </p>
                <p className="text-gray-500 text-xs italic">
                  ({item.note})
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-display text-3xl md:text-4xl text-gray-900 mb-4">
                Our Promise: We Bet on Your Revenue
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                90-Day ROI Guarantee – If you don&apos;t see at least a 20% lift in quarterly plan
                sign-ups within 90 days of launch, we&apos;ll rebuild your site for free. No questions asked.
              </p>
              <p className="text-gray-700 text-sm">
                Inspired by Clutch Top Agencies. We put our work where our mouth is.
              </p>
            </div>

            {/* Signature Placeholder */}
            <div className="flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-2xl p-6 w-full lg:w-auto">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-900/20 border-2 border-dashed border-gray-700 flex items-center justify-center">
                  <Pen className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">[Your Name]</p>
                  <p className="text-gray-700 text-sm">Co-founder</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-900/20 border-2 border-dashed border-gray-700 flex items-center justify-center">
                  <Pen className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">[Her Name]</p>
                  <p className="text-gray-700 text-sm">Co-founder</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <div className="bg-gray-100 rounded-full px-5 py-2.5 flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-500" />
            <span className="text-gray-700 text-sm font-medium">UI/UX Graduate Certified</span>
          </div>
          <div className="bg-gray-100 rounded-full px-5 py-2.5 flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-500" />
            <span className="text-gray-700 text-sm font-medium">Full-Stack Powered</span>
          </div>
          <div className="bg-gray-100 rounded-full px-5 py-2.5 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-500" />
            <span className="text-gray-700 text-sm font-medium">5-Star Potential on Clutch</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            Be Our First Featured Win
          </p>
          <a
            href="#cta-form"
            className="inline-flex items-center px-8 py-4 bg-cyan-500 text-gray-900 font-bold rounded-full hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
          >
            Book Your Free Audit Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
