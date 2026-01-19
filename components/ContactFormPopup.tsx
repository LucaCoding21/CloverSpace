'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, ArrowRight, X } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

interface ContactFormPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ContactFormPopup({ open, onOpenChange }: ContactFormPopupProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Contact form submitted:', data)
    setIsSubmitted(true)
  }

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(() => {
      setIsSubmitted(false)
      reset()
    }, 300)
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative z-10 w-full max-w-md"
          >
            <div className="bg-gray-950 rounded-2xl md:rounded-3xl border border-gray-800/50 shadow-2xl shadow-cyan-500/5 overflow-hidden">
              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="absolute right-3 top-3 z-20 p-2 rounded-full bg-gray-900/80 hover:bg-gray-800 border border-gray-700/50 transition-all hover:border-gray-600"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-4 h-4 text-gray-400" />
              </motion.button>

              <div className="p-5 sm:p-6 md:p-8">
                  {!isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    >
                      {/* Header */}
                      <div className="mb-5 pr-8">
                        <h2 className="font-display text-xl sm:text-2xl text-white font-medium mb-1">
                          Book Your Call
                        </h2>
                        <p className="text-gray-400 text-sm">
                          Fill in your details and we&apos;ll reach out shortly.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <div>
                          <label htmlFor="popup-name" className="block text-sm font-medium text-gray-300 mb-1.5">
                            Your Name
                          </label>
                          <input
                            id="popup-name"
                            type="text"
                            placeholder="John Smith"
                            {...register('name')}
                            className="w-full h-11 px-4 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder:text-gray-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all text-sm"
                          />
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-400 text-xs mt-1"
                            >
                              {errors.name.message}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="popup-company" className="block text-sm font-medium text-gray-300 mb-1.5">
                            Company
                          </label>
                          <input
                            id="popup-company"
                            type="text"
                            placeholder="Acme Realty"
                            {...register('companyName')}
                            className="w-full h-11 px-4 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder:text-gray-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all text-sm"
                          />
                          {errors.companyName && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-400 text-xs mt-1"
                            >
                              {errors.companyName.message}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="popup-email" className="block text-sm font-medium text-gray-300 mb-1.5">
                            Email
                          </label>
                          <input
                            id="popup-email"
                            type="email"
                            placeholder="you@company.com"
                            {...register('email')}
                            className="w-full h-11 px-4 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder:text-gray-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all text-sm"
                          />
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-400 text-xs mt-1"
                            >
                              {errors.email.message}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-300 mb-1.5">
                            Phone
                          </label>
                          <input
                            id="popup-phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            {...register('phone')}
                            className="w-full h-11 px-4 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder:text-gray-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all text-sm"
                          />
                          {errors.phone && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-400 text-xs mt-1"
                            >
                              {errors.phone.message}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="popup-message" className="block text-sm font-medium text-gray-300 mb-1.5">
                            Message <span className="text-gray-600 font-normal">(optional)</span>
                          </label>
                          <textarea
                            id="popup-message"
                            placeholder="Tell us about your goals..."
                            {...register('message')}
                            rows={2}
                            className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder:text-gray-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all resize-none text-sm"
                          />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 bg-cyan-500 text-gray-900 font-bold text-sm rounded-xl hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <motion.div
                                className="w-4 h-4 border-2 border-gray-900/30 border-t-gray-900 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              />
                              Sending...
                            </span>
                          ) : (
                            <>
                              Book My Free Call
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </motion.button>

                        {/* Privacy note */}
                        <p className="text-center text-gray-600 text-xs">
                          No spam, ever. We respect your privacy.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    /* Success State */
                    <motion.div
                      className="flex flex-col items-center justify-center py-8 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.1 }}
                        className="relative mb-5"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-8 h-8 text-cyan-500" strokeWidth={1.5} />
                        </div>
                        <motion.div
                          className="absolute inset-0 bg-cyan-500/20 rounded-full"
                          initial={{ scale: 1, opacity: 0.5 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                        />
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-display text-2xl text-white font-medium mb-2"
                      >
                        You&apos;re All Set!
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 mb-6 max-w-sm text-sm"
                      >
                        Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                      </motion.p>

                      <motion.button
                        onClick={handleClose}
                        className="px-6 py-2.5 bg-gray-900 border border-gray-700 text-white font-semibold text-sm rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-all"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Close
                      </motion.button>
                    </motion.div>
                  )}
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
