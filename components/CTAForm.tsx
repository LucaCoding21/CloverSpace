'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { CheckCircle2, ArrowRight, Clock, Eye, DollarSign, Users } from 'lucide-react'

const formSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  websiteUrl: z
    .string()
    .url('Please enter a valid URL')
    .or(z.string().min(0)),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  revenue: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

const benefits = [
  { icon: Eye, text: 'We review your site via Loom video' },
  { icon: DollarSign, text: 'Show you exactly what you\'re losing' },
  { icon: Clock, text: 'Delivered to your inbox in 24 hours' },
]

export default function CTAForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    setShowCalendly(true)
  }

  return (
    <section
      id="cta-form"
      ref={ref}
      className="py-20 md:py-32 bg-gray-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-gray-900 bg-cyan-500 font-bold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Free 5-Min Video Audit
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              See Exactly How Much Your Site Is{' '}
              <span className="text-cyan-400">Costing You</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
              Get a free 5-minute Loom video audit. We&apos;ll review your current
              site and show you exactly how much recurring revenue you&apos;re
              leaving on the table. No call needed. Just real feedback.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-white text-lg">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center space-x-4 p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-bold">Only 4 Clients Per Month</p>
                <p className="text-gray-400 text-sm">
                  Just two of us. We limit capacity to ensure top quality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-cyan-500/10">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <h3 className="font-display text-3xl text-gray-900 mb-2">
                      GET YOUR FREE VIDEO AUDIT
                    </h3>
                    <p className="text-gray-500">
                      5 minutes. Zero obligation. Real feedback.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Company Name */}
                    <div>
                      <Label htmlFor="companyName" className="text-gray-700 font-semibold">
                        Company Name *
                      </Label>
                      <Input
                        id="companyName"
                        placeholder="Acme Pest Control"
                        {...register('companyName')}
                        className="mt-1.5 h-12 rounded-xl border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                      {errors.companyName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.companyName.message}
                        </p>
                      )}
                    </div>

                    {/* Website URL */}
                    <div>
                      <Label htmlFor="websiteUrl" className="text-gray-700 font-semibold">
                        Your Current Website *
                      </Label>
                      <Input
                        id="websiteUrl"
                        placeholder="https://yourpestsite.com"
                        {...register('websiteUrl')}
                        className="mt-1.5 h-12 rounded-xl border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                      <p className="text-gray-400 text-xs mt-1">
                        We&apos;ll review this site in your video
                      </p>
                      {errors.websiteUrl && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.websiteUrl.message}
                        </p>
                      )}
                    </div>

                    {/* Revenue (Qualifier) */}
                    <div>
                      <Label htmlFor="revenue" className="text-gray-700 font-semibold">
                        Annual Revenue (Optional)
                      </Label>
                      <select
                        id="revenue"
                        {...register('revenue')}
                        className="mt-1.5 h-12 w-full rounded-xl border border-gray-200 px-4 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500"
                      >
                        <option value="">Select range...</option>
                        <option value="under-250k">Under $250k</option>
                        <option value="250k-500k">$250k - $500k</option>
                        <option value="500k-1m">$500k - $1M</option>
                        <option value="1m-plus">$1M+</option>
                      </select>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-semibold">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          {...register('email')}
                          className="mt-1.5 h-12 rounded-xl border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-semibold">
                          Phone *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          {...register('phone')}
                          className="mt-1.5 h-12 rounded-xl border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-cyan-500 text-gray-900 font-bold text-lg rounded-full hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <>
                          Get My Free Video Audit
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    {/* Privacy Note */}
                    <p className="text-center text-gray-400 text-sm">
                      No spam. No sales pitch. Just a quick audit of your site.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-cyan-500" />
                  </div>
                  <h3 className="font-display text-3xl text-gray-900 mb-2">
                    YOU&apos;RE ALL SET!
                  </h3>
                  <p className="text-gray-500 mb-6">
                    We&apos;ll send your free video audit within 24 hours.
                  </p>
                  <button
                    onClick={() => setShowCalendly(true)}
                    className="inline-flex items-center px-8 py-4 bg-cyan-500 text-gray-900 font-bold rounded-full hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
                  >
                    Pick Your Time
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Calendly Modal */}
      <Dialog open={showCalendly} onOpenChange={setShowCalendly}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              PICK A TIME FOR YOUR FREE AUDIT
            </DialogTitle>
            <DialogDescription>
              We&apos;ll review your current site and show you exactly what&apos;s
              costing you recurring revenue.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-gray-100 rounded-xl p-8 text-center min-h-[400px] flex items-center justify-center">
            <div>
              <p className="text-gray-500 mb-4">
                Calendly integration placeholder
              </p>
              <p className="text-sm text-gray-400">
                Replace this with your Calendly embed code
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
