'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { MoveHorizontal, ArrowRight } from 'lucide-react'

export default function ProblemSolution() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(5, Math.min((x / rect.width) * 100, 95))
    setSliderPosition(percent)
  }, [])

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

  const scrollToForm = () => {
    const formSection = document.getElementById('cta-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            Most Agent Sites Accidentally{' '}
            <span className="text-cyan-500">Lose Leads</span>{' '}
            – We Fix It Fast
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            70% of real estate agents lose potential clients because their sites lack trust signals
            and clear calls to action. We build sites that convert visitors into qualified leads.
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-gray-200"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* Before Image - Full Width Background */}
            <div className="absolute inset-0 bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Before.png"
                alt="Before: Original real estate website"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Before Label */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg z-10">
                BEFORE
              </div>
            </div>

            {/* After Image - Clipped */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <div className="absolute inset-0 bg-gray-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/After.png"
                  alt="After: Transformed real estate website"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* After Label */}
                <div className="absolute top-4 right-4 bg-cyan-500 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm shadow-lg z-10">
                  AFTER
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] z-20"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize border-4 border-cyan-500"
                animate={isDragging ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <MoveHorizontal className="w-5 h-5 text-cyan-500" />
              </motion.div>
            </div>

            {/* Drag Instruction */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isDragging ? 0 : 1 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 z-20 pointer-events-none"
            >
              <MoveHorizontal className="w-4 h-4" />
              <span>Drag to see the transformation</span>
            </motion.div>
          </div>

          {/* Caption */}
          <p className="text-center text-gray-500 text-sm mt-4">
            Drag to see: From chaos to $26k added plans (industry mock based on 2025 benchmarks)
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={scrollToForm}
            className="inline-flex items-center px-8 py-4 bg-cyan-500 text-gray-900 font-bold rounded-full hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
          >
            See How We&apos;d Transform Yours
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
