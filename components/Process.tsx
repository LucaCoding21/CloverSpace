'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: '5-Min Video Audit',
    description: 'A quick Loom video reviewing your current site, identifying exactly what\'s holding you back and how to fix it.',
    image: null,
    video: '/images/loom-audit.mp4',
  },
  {
    number: '02',
    title: 'Strategy + Custom Mockup',
    description: 'We design a custom mockup of your new high-converting site. No commitment required to see your design.',
    image: '/images/custom-mockup.png',
  },
  {
    number: '03',
    title: 'Build + Launch',
    description: 'Your complete site built and live in 5-7 days. Chat, SMS, and booking fully integrated.',
    image: '/images/launch-mockup.png',
  },
  {
    number: '04',
    title: 'Optimize + Grow',
    description: 'Ongoing improvements backed by data. Includes 90 days of optimization iterations (no extra cost).',
    image: '/images/pest-control.jpg',
  },
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="pt-32 md:pt-40 pb-20 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 font-medium tracking-widest uppercase text-sm mb-3">
            Our Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900">
            From Audit to Launch, Step by Step
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left - Accordion */}
          <div>
            {steps.map((step, index) => {
              const isActive = activeStep === index

              return (
                <div key={index} className="border-t border-gray-200 last:border-b">
                  <button
                    onClick={() => setActiveStep(index)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <h3
                      className={`font-display text-xl md:text-2xl uppercase tracking-wide transition-colors duration-300 ${
                        isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <span
                      className={`font-display text-3xl md:text-4xl transition-colors duration-300 ${
                        isActive ? 'text-gray-900' : 'text-gray-300'
                      }`}
                    >
                      {step.number}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6">
                          <div className="w-12 h-1 bg-gray-900 mb-4" />
                          <p className="text-gray-600 text-lg max-w-md">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Right - Image or Video */}
          <div className="relative">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    {steps[activeStep].video ? (
                      <video
                        src={steps[activeStep].video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover object-left"
                      />
                    ) : (
                      <Image
                        src={steps[activeStep].image!}
                        alt={steps[activeStep].title}
                        fill
                        className="object-cover object-center"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {steps.map((step, index) => {
            const isActive = activeStep === index

            return (
              <div key={index} className="border-t border-gray-200 last:border-b">
                <button
                  onClick={() => setActiveStep(isActive ? index : index)}
                  className="w-full py-5 flex items-center justify-between text-left"
                >
                  <h3
                    className={`font-display text-lg uppercase tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-gray-900' : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <span
                    className={`font-display text-2xl transition-colors duration-300 ${
                      isActive ? 'text-gray-900' : 'text-gray-300'
                    }`}
                  >
                    {step.number}
                  </span>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5">
                        <div className="w-10 h-1 bg-gray-900 mb-4" />
                        <p className="text-gray-600 mb-4">
                          {step.description}
                        </p>
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                          {step.video ? (
                            <video
                              src={step.video}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="absolute inset-0 w-full h-full object-cover object-left"
                            />
                          ) : (
                            <Image
                              src={step.image!}
                              alt={step.title}
                              fill
                              className="object-cover object-center"
                            />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
