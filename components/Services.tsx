'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MessageSquare, Star, Rocket, ExternalLink } from 'lucide-react'

const services = [
  {
    icon: Calendar,
    title: 'Quarterly Plan Funnel',
    description: 'Dedicated pricing page that closes $97/mo subs on autopilot.',
  },
  {
    icon: Rocket,
    title: 'Full Launch Package',
    description: 'Mobile-fast site with all integrations, live in 5-7 days.',
  },
  {
    icon: MessageSquare,
    title: '24/7 Chat + SMS',
    description: 'Captures after-hours leads and upsells plans instantly.',
  },
  {
    icon: Star,
    title: 'Review Automation',
    description: 'Auto-requests 10-30 Google reviews per month.',
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden bg-white"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <p className="text-cyan-600 font-medium tracking-widest uppercase text-sm mb-4">
            What You Get
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
            Your New Website
          </h2>
          <p className="text-gray-500 text-lg">
            A high-converting site built to turn visitors into recurring customers.
          </p>
        </motion.div>

        {/* Landing Page Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <a
            href="https://pest-mock.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200"
          >
            <Image
              src="/images/launch.jpeg"
              alt="Landing page preview"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white">
                <ExternalLink className="w-10 h-10 mx-auto mb-3" />
                <span className="font-display text-xl">View Live Demo</span>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Services Row - 4 cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="rounded-2xl p-6 text-center bg-white text-gray-900 border-2 border-cyan-500"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 bg-cyan-100">
                <service.icon className="w-7 h-7 text-cyan-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
