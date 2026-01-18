'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Phone, Users, MessageSquare } from 'lucide-react'

const slides = [
  {
    type: 'testimonial',
    name: 'Sarah M.',
    text: 'Sold my home in just 2 weeks!',
  },
  {
    type: 'stat',
    icon: Phone,
    label: 'Calls This Week',
    value: 47,
  },
  {
    type: 'testimonial',
    name: 'John D.',
    text: 'Best agent I have ever worked with.',
  },
  {
    type: 'stat',
    icon: Users,
    label: 'New Leads',
    value: 156,
  },
  {
    type: 'testimonial',
    name: 'Lisa K.',
    text: 'Found our dream home in days!',
  },
  {
    type: 'stat',
    icon: MessageSquare,
    label: 'Inquiries Today',
    value: 23,
  },
]

export default function StatsAnimation() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
    <div className="w-full h-full bg-gray-100 rounded-xl flex flex-col items-center justify-center p-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -250, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="w-full"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            {slide.type === 'testimonial' ? (
              <>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-800 text-xl font-medium mb-4">
                  "{slide.text}"
                </p>
                <p className="text-gray-400 text-sm">— {slide.name}</p>
              </>
            ) : (
              <>
                <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {slide.icon && <slide.icon className="w-7 h-7 text-cyan-600" />}
                </div>
                <p className="text-6xl font-bold text-gray-900 mb-2">
                  {slide.value}
                </p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  {slide.label}
                </p>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === current ? 'bg-cyan-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
