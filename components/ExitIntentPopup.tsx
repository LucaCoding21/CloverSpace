'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X, FileText, ArrowRight, CheckCircle2 } from 'lucide-react'

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
})

type FormData = z.infer<typeof formSchema>

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = localStorage.getItem('exitPopupShown')
    if (hasSeenPopup) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
        localStorage.setItem('exitPopupShown', 'true')
      }
    }

    // Add delay before activating exit intent
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Exit popup form submitted:', data)
    setIsSubmitted(true)

    // Close popup after 3 seconds
    setTimeout(() => {
      setIsOpen(false)
    }, 3000)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
              aria-label="Close popup"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {!isSubmitted ? (
              <div className="grid md:grid-cols-5">
                {/* Left Visual */}
                <div className="hidden md:flex md:col-span-2 bg-gradient-to-br from-primary to-primary-700 p-8 items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                      <FileText className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-white/90 font-semibold">FREE PDF GUIDE</p>
                  </div>
                </div>

                {/* Right Content */}
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex md:hidden items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                      Free Guide
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Wait! Don&apos;t Leave Empty-Handed
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Get our free PDF:{' '}
                    <span className="font-semibold text-gray-900">
                      &ldquo;3 Recurring Revenue Killers&rdquo;
                    </span>{' '}
                    — and how to fix them today.
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6">
                    {[
                      'Why 83% of pest calls never convert to recurring',
                      'The #1 website mistake killing your LTV',
                      'How to 3x your customer lifetime value',
                    ].map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-gray-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Form */}
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...register('email')}
                        className="h-12"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Get Free PDF
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                    <p className="text-center text-gray-400 text-xs">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              </div>
            ) : (
              <div className="p-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="w-20 h-20 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Check Your Inbox!
                </h3>
                <p className="text-gray-600">
                  Your free PDF is on its way. Check your email in the next few
                  minutes.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
