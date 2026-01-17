'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { MoveHorizontal } from 'lucide-react'

// Use regular img tags for flexibility with different image formats
const BEFORE_IMAGE = '/images/Before.png?v=2'
const AFTER_IMAGE = '/images/After.png?v=2'
const BEFORE_PLACEHOLDER = '/images/placeholder-before.svg'
const AFTER_PLACEHOLDER = '/images/placeholder-after.svg'

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [beforeSrc, setBeforeSrc] = useState(BEFORE_IMAGE)
  const [afterSrc, setAfterSrc] = useState(AFTER_IMAGE)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
      setSliderPosition(percent)
    },
    []
  )

  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return
      handleMove(e.clientX)
    },
    [isDragging, handleMove]
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return
      handleMove(e.touches[0].clientX)
    },
    [isDragging, handleMove]
  )

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove])

  return (
    <section className="relative py-0 overflow-hidden bg-gray-900">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            See the Transformation
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Drag the slider to see how we transform pest control websites into
            high-converting lead generation machines.
          </p>
        </motion.div>
      </div>

      {/* Slider Container */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full max-w-7xl mx-auto aspect-[16/9] md:aspect-[21/9] cursor-ew-resize select-none overflow-hidden"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Before Image (Full Width, Clipped) */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full bg-gray-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={beforeSrc}
              alt="Before: Original pest control website"
              className="absolute inset-0 w-full h-full object-cover object-center"
              onError={() => setBeforeSrc(BEFORE_PLACEHOLDER)}
            />
            {/* Before Label */}
            <div className="absolute top-6 left-6 bg-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg z-10">
              BEFORE
            </div>
          </div>
        </div>

        {/* After Image (Clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <div className="relative w-full h-full bg-gray-700">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={afterSrc}
              alt="After: Transformed pest control website"
              className="absolute inset-0 w-full h-full object-cover object-center"
              onError={() => setAfterSrc(AFTER_PLACEHOLDER)}
            />
            {/* After Label */}
            <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg z-10">
              AFTER
            </div>
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] z-30"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Handle Circle */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize border-4 border-primary"
            animate={isDragging ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <MoveHorizontal className="w-6 h-6 text-primary" />
          </motion.div>

          {/* Decorative Lines */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[calc(50%-30px)] bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[calc(50%-30px)] bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Drag Instruction */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isDragging ? 0 : 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium flex items-center space-x-2 z-20 pointer-events-none"
        >
          <MoveHorizontal className="w-4 h-4" />
          <span>Drag to see the transformation</span>
        </motion.div>
      </motion.div>

      {/* Bottom Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '3.2x', label: 'More Leads' },
            { value: '67%', label: 'Lower Bounce Rate' },
            { value: '4.1s', label: 'Faster Load Time' },
            { value: '89%', label: 'Mobile Score' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
