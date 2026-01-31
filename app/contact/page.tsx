'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, CheckCircle, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'cloverspaceinfo@gmail.com',
    href: 'mailto:cloverspaceinfo@gmail.com',
  },
{
    icon: MapPin,
    label: 'Location',
    value: 'Vancouver, BC',
    href: null,
  },
]

const benefits = [
  'Free 30-minute strategy session',
  'No obligation or contracts',
  'Personalized growth plan for your market',
  'Response within 24 hours',
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Booking form submitted:', formState)
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', phone: '', service: '', preferredDate: '', preferredTime: '', message: '' })
  }

  return (
    <div className="bg-gray-950 min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px]"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="relative max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={itemVariants}
                className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4"
              >
                Book a Call
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="font-display font-medium text-[2.75rem] leading-[1.1] sm:text-5xl lg:text-6xl text-white sm:leading-[1.1] mb-6"
              >
                Let&rsquo;s Build Something{' '}
                <span className="text-cyan-400">Great Together</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
              >
                Book a free strategy call and we&rsquo;ll show you exactly how to grow your real estate business online. No pressure, no obligations.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Form + Info Section */}
        <section className="pb-24 md:pb-36">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
              {/* Left Column - Info */}
              <motion.div
                className="lg:col-span-2 space-y-10"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* What You Get */}
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    What you&rsquo;ll get
                  </h2>
                  <motion.ul
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {benefits.map((benefit) => (
                      <motion.li
                        key={benefit}
                        variants={formFieldVariants}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-cyan-500/20 transition-colors duration-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <span className="text-gray-300 leading-relaxed">{benefit}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Contact Details */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-5">
                    Get in touch directly
                  </h3>
                  <motion.div
                    className="space-y-5"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {contactInfo.map((item) => (
                      <motion.div
                        key={item.label}
                        variants={formFieldVariants}
                        className="flex items-center gap-4 group"
                      >
                        <motion.div
                          className="w-11 h-11 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500/30 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          <item.icon className="w-5 h-5 text-cyan-400" />
                        </motion.div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-white font-medium hover:text-cyan-400 transition-colors text-sm"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white font-medium text-sm">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Office Hours */}
                <motion.div
                  className="p-6 bg-gray-900/50 border border-gray-800/50 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                      Office Hours
                    </h4>
                  </div>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <div className="flex justify-between">
                      <span>Monday &ndash; Friday</span>
                      <span className="text-white">9:00 AM &ndash; 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday &ndash; Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-gray-900/40 border border-gray-800/50 rounded-2xl p-6 sm:p-8 md:p-10">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                      className="text-center py-16"
                    >
                      <motion.div
                        className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                        >
                          <Calendar className="w-10 h-10 text-cyan-400" />
                        </motion.div>
                      </motion.div>
                      <motion.h3
                        className="text-3xl font-display font-semibold text-white mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                      >
                        You&rsquo;re All Set!
                      </motion.h3>
                      <motion.p
                        className="text-gray-400 text-lg mb-8 max-w-md mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                      >
                        We&rsquo;ve received your booking request. Our team will reach out within 24 hours to confirm your strategy call.
                      </motion.p>
                      <motion.button
                        onClick={() => setIsSubmitted(false)}
                        className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Book another call
                      </motion.button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h2 className="text-2xl font-display font-semibold text-white mb-2">
                          Book Your Free Strategy Call
                        </h2>
                        <p className="text-gray-400">
                          Fill out the details below and we&rsquo;ll get your call scheduled.
                        </p>
                      </div>

                      <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                      >
                        {/* Name + Email Row */}
                        <div className="grid sm:grid-cols-2 gap-6">
                          <motion.div variants={formFieldVariants}>
                            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                              Full Name <span className="text-cyan-400">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formState.name}
                              onChange={handleChange}
                              placeholder="John Smith"
                              className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all"
                            />
                          </motion.div>

                          <motion.div variants={formFieldVariants}>
                            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                              Email <span className="text-cyan-400">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formState.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all"
                            />
                          </motion.div>
                        </div>

                        {/* Phone + Service Row */}
                        <div className="grid sm:grid-cols-2 gap-6">
                          <motion.div variants={formFieldVariants}>
                            <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                              Phone Number <span className="text-cyan-400">*</span>
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="(604) 555-0123"
                              className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all"
                            />
                          </motion.div>

                          <motion.div variants={formFieldVariants} className="relative">
                            <label htmlFor="service" className="block text-sm text-gray-400 mb-2">
                              Service Interested In
                            </label>
                            <select
                              id="service"
                              name="service"
                              value={formState.service}
                              onChange={handleChange}
                              className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3.5 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all appearance-none cursor-pointer"
                              style={{ color: formState.service ? 'white' : '#4b5563' }}
                            >
                              <option value="" className="bg-gray-900 text-gray-500">Select a service</option>
                              <option value="website" className="bg-gray-900 text-white">Custom Website Design</option>
                              <option value="seo" className="bg-gray-900 text-white">SEO Optimization</option>
                              <option value="leads" className="bg-gray-900 text-white">Lead Generation</option>
                              <option value="branding" className="bg-gray-900 text-white">Branding</option>
                              <option value="full" className="bg-gray-900 text-white">Full Package</option>
                              <option value="other" className="bg-gray-900 text-white">Other</option>
                            </select>
                            <div className="absolute right-4 bottom-4 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </motion.div>
                        </div>

                        {/* Preferred Date + Time Row */}
                        <div className="grid sm:grid-cols-2 gap-6">
                          <motion.div variants={formFieldVariants}>
                            <label htmlFor="preferredDate" className="block text-sm text-gray-400 mb-2">
                              Preferred Date
                            </label>
                            <input
                              type="date"
                              id="preferredDate"
                              name="preferredDate"
                              value={formState.preferredDate}
                              onChange={handleChange}
                              className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all [color-scheme:dark]"
                            />
                          </motion.div>

                          <motion.div variants={formFieldVariants} className="relative">
                            <label htmlFor="preferredTime" className="block text-sm text-gray-400 mb-2">
                              Preferred Time
                            </label>
                            <select
                              id="preferredTime"
                              name="preferredTime"
                              value={formState.preferredTime}
                              onChange={handleChange}
                              className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3.5 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all appearance-none cursor-pointer"
                              style={{ color: formState.preferredTime ? 'white' : '#4b5563' }}
                            >
                              <option value="" className="bg-gray-900 text-gray-500">Select a time</option>
                              <option value="9am" className="bg-gray-900 text-white">9:00 AM</option>
                              <option value="10am" className="bg-gray-900 text-white">10:00 AM</option>
                              <option value="11am" className="bg-gray-900 text-white">11:00 AM</option>
                              <option value="12pm" className="bg-gray-900 text-white">12:00 PM</option>
                              <option value="1pm" className="bg-gray-900 text-white">1:00 PM</option>
                              <option value="2pm" className="bg-gray-900 text-white">2:00 PM</option>
                              <option value="3pm" className="bg-gray-900 text-white">3:00 PM</option>
                              <option value="4pm" className="bg-gray-900 text-white">4:00 PM</option>
                            </select>
                            <div className="absolute right-4 bottom-4 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </motion.div>
                        </div>

                        {/* Message */}
                        <motion.div variants={formFieldVariants}>
                          <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                            Anything else we should know?
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Tell us about your goals, current website, or any questions you have..."
                            className="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all resize-none"
                          />
                        </motion.div>

                        {/* Submit */}
                        <motion.div variants={formFieldVariants} className="pt-2">
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-cyan-500 text-gray-900 font-bold rounded-xl hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-base disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                  className="w-5 h-5 border-2 border-gray-900/30 border-t-gray-900 rounded-full"
                                />
                                Booking...
                              </>
                            ) : (
                              <>
                                Book My Free Strategy Call
                              </>
                            )}
                          </motion.button>
                          <p className="text-center text-gray-500 text-xs mt-4">
                            No spam. No obligation. Just an honest conversation about your business.
                          </p>
                        </motion.div>
                      </motion.form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
