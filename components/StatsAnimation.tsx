'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Phone, Users, MessageSquare, TrendingUp } from 'lucide-react'

// Animated star component with pop and shimmer effects
function AnimatedStar({ index, isVisible }: { index: number; isVisible: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180, opacity: 0 }}
      animate={isVisible ? {
        scale: [0, 1.3, 1],
        rotate: [-180, 10, 0],
        opacity: 1
      } : { scale: 0, opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.34, 1.56, 0.64, 1], // Custom spring-like easing
      }}
    >
      <motion.div
        animate={{
          filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
        }}
        transition={{
          duration: 2,
          delay: index * 0.15,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
      </motion.div>
    </motion.div>
  )
}

// Animated number counter component
function AnimatedNumber({ value, isVisible }: { value: number; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setDisplayValue(0)
      return
    }

    const duration = 1500
    const steps = 60
    const stepDuration = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      if (currentStep >= steps) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        // Easing function for smooth deceleration
        const progress = currentStep / steps
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplayValue(Math.floor(value * eased))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <motion.span
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="text-5xl sm:text-6xl font-bold text-gray-900 tabular-nums"
    >
      {displayValue.toLocaleString()}
    </motion.span>
  )
}

const testimonials = [
  {
    type: 'testimonial' as const,
    name: 'Ethan Miller',
    role: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    text: "I was hesitant to try at first, but I'm so glad I did - it's exceeded all of my expectations.",
  },
  {
    type: 'testimonial' as const,
    name: 'Sarah Mitchell',
    role: 'Home Buyer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    text: 'Sold my home in just 2 weeks! The website made all the difference in attracting serious buyers.',
  },
  {
    type: 'testimonial' as const,
    name: 'John Davidson',
    role: 'First-time Seller',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    text: 'Best agent I have ever worked with. Professional, responsive, and truly cares about results.',
  },
  {
    type: 'testimonial' as const,
    name: 'Lisa Kim',
    role: 'Property Investor',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    text: 'Found our dream home in days! The booking system made scheduling viewings so easy.',
  },
]

const stats = [
  {
    type: 'stat' as const,
    icon: Phone,
    label: 'Calls This Week',
    value: 47,
    color: 'cyan',
  },
  {
    type: 'stat' as const,
    icon: Users,
    label: 'New Leads',
    value: 156,
    color: 'emerald',
  },
  {
    type: 'stat' as const,
    icon: MessageSquare,
    label: 'Inquiries Today',
    value: 23,
    color: 'violet',
  },
  {
    type: 'stat' as const,
    icon: TrendingUp,
    label: 'Conversion Rate',
    value: 89,
    suffix: '%',
    color: 'amber',
  },
]

// Interleave testimonials and stats
const slides = [
  testimonials[0],
  stats[0],
  testimonials[1],
  stats[1],
  testimonials[2],
  stats[2],
  testimonials[3],
  stats[3],
]

export default function StatsAnimation() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goToSlide = useCallback((index: number) => {
    setCurrent(index)
    setIsAutoPlaying(false)
    // Resume autoplay after 8 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const slide = slides[current]

  const iconColors: Record<string, string> = {
    cyan: 'bg-cyan-50 text-cyan-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    violet: 'bg-violet-50 text-violet-600',
    amber: 'bg-amber-50 text-amber-600',
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 rounded-xl flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
      <div className="flex-1 flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: 300, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -300, opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="w-full max-w-md"
          >
            {slide.type === 'testimonial' ? (
              // Testimonial Card
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 sm:p-8">
                {/* Animated Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <AnimatedStar key={i} index={i} isVisible={true} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6"
                >
                  {slide.text}
                </motion.p>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <img
                    src={slide.avatar}
                    alt={slide.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-gray-100"
                  />
                  <div>
                    <p className="font-semibold text-cyan-600 text-sm sm:text-base">
                      {slide.name}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {slide.role}
                    </p>
                  </div>
                </motion.div>
              </div>
            ) : (
              // Stats Card
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${iconColors[slide.color || 'cyan']}`}
                >
                  {slide.icon && <slide.icon className="w-7 h-7 sm:w-8 sm:h-8" />}
                </motion.div>

                {/* Animated Number */}
                <div className="mb-2 flex items-center justify-center gap-1">
                  <AnimatedNumber value={slide.value} isVisible={true} />
                  {slide.suffix && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.3 }}
                      className="text-4xl sm:text-5xl font-bold text-gray-900"
                    >
                      {slide.suffix}
                    </motion.span>
                  )}
                </div>

                {/* Label */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-gray-400 text-sm uppercase tracking-wider font-medium"
                >
                  {slide.label}
                </motion.p>

                {/* Decorative pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1.02, opacity: [0, 0.3, 0] }}
                  transition={{ delay: 1, duration: 1.5 }}
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page Indicators */}
      <div className="flex items-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group p-1"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className={`h-2 rounded-full transition-colors duration-300 ${
                index === current
                  ? 'bg-white'
                  : 'bg-white/30 group-hover:bg-white/50'
              }`}
              animate={{
                width: index === current ? 24 : 8,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
