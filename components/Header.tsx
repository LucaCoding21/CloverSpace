'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const services = [
  { href: '/services/website-design', label: 'Website Design' },
  { href: '/services/seo', label: 'SEO' },
  { href: '/services/lead-generation', label: 'Lead Generation' },
  { href: '/services/branding', label: 'Branding' },
]

const areas = [
  { href: '/areas/kitsilano', label: 'Kitsilano' },
  { href: '/areas/yaletown', label: 'Yaletown' },
  { href: '/areas/east-vancouver', label: 'East Vancouver' },
  { href: '/areas/burnaby', label: 'Burnaby' },
  { href: '/areas/north-vancouver', label: 'North Vancouver' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setIsMobileMenuOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-950/95 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/" className="font-logo text-lg font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                Clover<span className="text-3xl -mt-1">☘︎</span>Space
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/"
                className="text-white/90 hover:text-white text-sm font-medium transition-colors drop-shadow-sm relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-white/90 hover:text-white text-sm font-medium transition-colors drop-shadow-sm flex items-center gap-1 relative">
                  Services
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl shadow-black/40 py-2 min-w-[220px]">
                    {services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Areas Dropdown */}
              <div className="relative group">
                <button className="text-white/90 hover:text-white text-sm font-medium transition-colors drop-shadow-sm flex items-center gap-1 relative">
                  Areas
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl shadow-black/40 py-2 min-w-[220px]">
                    {areas.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/#about"
                className="text-white/90 hover:text-white text-sm font-medium transition-colors drop-shadow-sm relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link
                href="/contact"
                className="text-white/90 hover:text-white text-sm font-medium transition-colors drop-shadow-sm relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link
                href="/contact"
                className="px-5 py-2.5 bg-cyan-500 text-gray-900 font-semibold text-sm rounded-lg hover:bg-cyan-400 transition-colors"
              >
                Book a Call
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-black/80"
              onClick={closeMobile}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-72 bg-gray-950 p-6 pt-20 overflow-y-auto"
            >
              <motion.button
                onClick={closeMobile}
                className="absolute top-6 right-6"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              <motion.div
                className="flex flex-col gap-1"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
                  },
                }}
              >
                {/* Home */}
                <motion.div
                  variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <Link
                    href="/"
                    onClick={closeMobile}
                    className="text-white text-lg py-3 border-b border-gray-800 block"
                  >
                    Home
                  </Link>
                </motion.div>

                {/* Services Accordion */}
                <motion.div
                  variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-white text-lg py-3 border-b border-gray-800"
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 flex flex-col gap-1">
                          {services.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMobile}
                              className="text-gray-400 hover:text-white py-2 text-base transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Areas Accordion */}
                <motion.div
                  variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <button
                    onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                    className="flex items-center justify-between w-full text-white text-lg py-3 border-b border-gray-800"
                  >
                    Areas
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        mobileAreasOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileAreasOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 flex flex-col gap-1">
                          {areas.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMobile}
                              className="text-gray-400 hover:text-white py-2 text-base transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* About */}
                <motion.div
                  variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <Link
                    href="/#about"
                    onClick={closeMobile}
                    className="text-white text-lg py-3 border-b border-gray-800 block"
                  >
                    About
                  </Link>
                </motion.div>

                {/* Contact */}
                <motion.div
                  variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="text-white text-lg py-3 border-b border-gray-800 block"
                  >
                    Contact
                  </Link>
                </motion.div>

                {/* CTA */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="mt-4 w-full py-3 bg-cyan-500 text-gray-900 font-bold rounded-lg block text-center"
                  >
                    Book a Call
                  </Link>
                </motion.div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}
