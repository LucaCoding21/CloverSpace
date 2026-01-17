'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

const tiers = [
  {
    name: 'Core Build',
    price: '$6,900',
    description: 'Website + Plan Page',
    tagline: 'Built to grow recurring revenue.',
    popular: false,
    features: [
      'Custom recurring-revenue website',
      'Quarterly plan pricing page',
      'Mobile-first, fast performance',
      'Basic on-page SEO setup',
      '30-day post-launch support',
    ],
  },
  {
    name: 'Full Revenue System',
    price: '$9,900',
    description: '+ Chat/SMS + Reviews',
    tagline: 'Complete machine – most choose this',
    popular: true,
    features: [
      'Everything in Core Build',
      'Smart plan selector funnel',
      '24/7 chat widget installation',
      'SMS lead capture system',
      'Automated review requests',
      'Google Business optimization',
      '30-day post-launch support',
    ],
  },
]

const retainerFeatures = [
  'Website hosting & maintenance',
  'Chat/SMS system monthly fee',
  'Ongoing conversion optimization',
  'Monthly performance reports',
]

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToForm = () => {
    const formSection = document.getElementById('cta-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="pricing"
      ref={ref}
      className="pt-20 md:pt-32 pb-12 md:pb-20 bg-gray-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Straight-Up Pricing –{' '}
            <span className="text-cyan-400">No Hidden Fees</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Choose your package. Pay after launch. Full rights to your files. No contracts.
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-white text-gray-900 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}
              <div
                className={`rounded-3xl p-8 h-full ${
                  tier.popular
                    ? 'bg-cyan-500 text-gray-900'
                    : 'bg-white/5 border border-white/10 text-white'
                }`}
              >
                {/* Tier Name */}
                <h3 className="font-display text-2xl mb-2">{tier.name}</h3>
                <p className={`text-sm mb-6 ${tier.popular ? 'text-gray-700' : 'text-gray-400'}`}>
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="font-display text-5xl md:text-6xl">{tier.price}</span>
                  <span className={`text-sm ml-2 ${tier.popular ? 'text-gray-700' : 'text-gray-400'}`}>
                    USD one-time
                  </span>
                </div>

                {/* Tagline */}
                <p className={`text-sm font-medium mb-8 ${tier.popular ? 'text-gray-800' : 'text-cyan-400'}`}>
                  {tier.tagline}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          tier.popular ? 'bg-gray-900' : 'bg-cyan-500/20'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            tier.popular ? 'text-cyan-400' : 'text-cyan-400'
                          }`}
                        />
                      </div>
                      <span className={tier.popular ? 'text-gray-800' : 'text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={scrollToForm}
                  className={`w-full py-4 font-bold rounded-full transition-all duration-300 flex items-center justify-center group ${
                    tier.popular
                      ? 'bg-gray-900 text-cyan-400 hover:bg-gray-800'
                      : 'bg-cyan-500 text-gray-900 hover:bg-cyan-400'
                  }`}
                >
                  Pick Your Plan & Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Retainer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl text-white mb-2">
                Add-On: Monthly Retainer
              </h3>
              <p className="text-gray-400 text-sm max-w-lg">
                Keep us on retainer for ongoing optimization, hosting, and support.
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-sm">Starting at</p>
              <p className="font-display text-4xl text-white">
                $249<span className="text-gray-500 text-xl">/mo</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
            {retainerFeatures.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
