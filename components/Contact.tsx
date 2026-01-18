'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react'

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const headerItemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const leftColumnVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const rightColumnVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@cloverspace.com',
      href: 'mailto:hello@cloverspace.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vancouver, BC',
      href: null,
    },
  ]

  return (
    <section id="contact" className="bg-gray-950 py-28 md:py-36 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.p
            variants={headerItemVariants}
            className="text-cyan-400 font-semibold text-base tracking-wide uppercase mb-3"
          >
            Contact Us
          </motion.p>
          <motion.h2
            variants={headerItemVariants}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4"
          >
            Let's start a conversation
          </motion.h2>
          <motion.p
            variants={headerItemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Ready to elevate your online presence? Get in touch and we'll help you stand out in the real estate market.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={leftColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to stand out?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Join hundreds of real estate professionals who've transformed their online presence. Fill out the form and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={formFieldVariants}
                  className="flex items-start gap-4"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 211, 238, 0.1)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-medium hover:text-cyan-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Office Hours */}
            <motion.div
              className="pt-6 border-t border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                Office Hours
              </h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Weekends: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            variants={rightColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                className="text-center py-12"
              >
                <motion.div
                  className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <CheckCircle className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                </motion.div>
                <motion.h3
                  className="text-2xl font-semibold text-white mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  Message sent!
                </motion.h3>
                <motion.p
                  className="text-gray-400 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </motion.p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send another message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Name */}
                <motion.div className="relative" variants={formFieldVariants}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-gray-700 py-4 text-white text-lg placeholder:text-gray-500 focus:border-cyan-400 outline-none transition-colors"
                  />
                </motion.div>

                {/* Email */}
                <motion.div className="relative" variants={formFieldVariants}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-gray-700 py-4 text-white text-lg placeholder:text-gray-500 focus:border-cyan-400 outline-none transition-colors"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div className="relative" variants={formFieldVariants}>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-gray-700 py-4 text-white text-lg placeholder:text-gray-500 focus:border-cyan-400 outline-none transition-colors"
                  />
                </motion.div>

                {/* Service */}
                <motion.div className="relative" variants={formFieldVariants}>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-700 py-4 text-lg focus:border-cyan-400 outline-none transition-colors appearance-none cursor-pointer"
                    style={{ color: formState.service ? 'white' : '#6b7280' }}
                  >
                    <option value="" className="bg-gray-900 text-gray-500">Service Interested In</option>
                    <option value="website" className="bg-gray-900 text-white">Custom Website Design</option>
                    <option value="seo" className="bg-gray-900 text-white">SEO Optimization</option>
                    <option value="leads" className="bg-gray-900 text-white">Lead Generation</option>
                    <option value="full" className="bg-gray-900 text-white">Full Package</option>
                    <option value="other" className="bg-gray-900 text-white">Other</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div className="relative" variants={formFieldVariants}>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full bg-transparent border-b border-gray-700 py-4 text-white text-lg placeholder:text-gray-500 focus:border-cyan-400 outline-none transition-colors resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={formFieldVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-gray-900 font-semibold rounded-lg hover:bg-cyan-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-gray-900/30 border-t-gray-900 rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
