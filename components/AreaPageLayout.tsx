'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, CheckCircle2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface AreaPageLayoutProps {
  name: string
  title: string
  description: string
  highlights: string[]
  whyHere: string
  propertyTypes: string[]
  nearbyAreas: { name: string; href: string }[]
  heroImage: { src: string; alt: string }
  sectionImage: { src: string; alt: string }
  stats?: { value: string; label: string }[]
}

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

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const highlightVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function ParallaxImage({ src, alt, className = '', speed = 0.6 }: { src: string; alt: string; className?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 200}px`, `${speed * 200}px`])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative w-full h-[160%] -mt-[30%]">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </motion.div>
    </div>
  )
}

function AnimatedLine({ light = false }: { light?: boolean }) {
  return (
    <motion.div
      className={`h-px mx-auto mt-6 ${light ? 'bg-gradient-to-r from-transparent via-white/40 to-transparent' : 'bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent'}`}
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: '5rem', opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}

export default function AreaPageLayout({
  name,
  title,
  description,
  highlights,
  whyHere,
  propertyTypes,
  nearbyAreas,
  heroImage,
  sectionImage,
  stats,
}: AreaPageLayoutProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '50%'])
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15])
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0])

  return (
    <div className="bg-gray-950 min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-start overflow-hidden">
          <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />

          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 w-full max-w-[1320px] px-5 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28 mx-auto"
          >
            <motion.div
              className="max-w-2xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={itemVariants}
                className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4"
              >
                {name} Real Estate
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="font-display font-medium text-[2.75rem] leading-[1.1] sm:text-5xl lg:text-6xl text-white sm:leading-[1.1] mb-6"
              >
                {title}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
              >
                {description}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-gray-900 font-bold rounded-xl hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-base"
                >
                  Get a Website for {name}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Bar */}
        {stats && stats.length > 0 && (
          <section className="relative z-10 -mt-16 md:-mt-20 pb-8">
            <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
              <motion.div
                className="bg-gray-900/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.7, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.1, type: 'spring', stiffness: 150, damping: 15 }}
                  >
                    <div className="font-display text-3xl md:text-4xl text-cyan-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Why This Area */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, x: -40, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
                  Local Expertise
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                  Why {name} Realtors Need a Strong Website
                </h2>
                <AnimatedLine />
                <p className="text-gray-600 leading-relaxed text-lg mt-6">
                  {whyHere}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">
                  Area Highlights
                </h3>
                <motion.ul
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {highlights.map((highlight) => (
                    <motion.li
                      key={highlight}
                      variants={highlightVariants}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-cyan-500/20 transition-colors duration-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                      </div>
                      <span className="text-gray-600 leading-relaxed">{highlight}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Parallax Visual Break */}
        <section className="relative">
          <ParallaxImage
            src={sectionImage.src}
            alt={sectionImage.alt}
            className="relative h-[70vh] md:h-[80vh]"
            speed={0.5}
          />
          <div className="absolute inset-0 bg-gray-950/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center px-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-2">
                Your {name} Advantage
              </h2>
              <AnimatedLine light />
              <motion.p
                className="text-gray-300 text-lg max-w-lg mx-auto mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Stand out in one of Vancouver&rsquo;s most competitive real estate markets with a website built specifically for {name}.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-20 md:py-32">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4 block">
                Property Expertise
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                Properties We Help You Market in {name}
              </h2>
              <AnimatedLine />
            </motion.div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {propertyTypes.map((type, i) => (
                <motion.div
                  key={type}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                  className="group relative bg-gray-900/50 border border-gray-800/50 rounded-2xl p-5 md:p-6 text-center hover:border-cyan-500/30 hover:bg-gray-900/80 hover:shadow-lg hover:shadow-cyan-500/5 transition-[border-color,background-color,box-shadow] duration-500"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <span className="text-cyan-400 font-display text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors duration-300">
                    {type}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
                Explore More Areas
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
                We Also Serve Realtors In
              </h2>
              <AnimatedLine />
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {nearbyAreas.map((area) => (
                <motion.div key={area.name} variants={itemVariants}>
                  <Link
                    href={area.href}
                    className="group flex items-center gap-3 px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-500"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <MapPin className="w-4 h-4 text-cyan-500" />
                    </div>
                    <span className="text-gray-900 font-medium group-hover:text-cyan-600 transition-colors duration-300">
                      {area.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="relative max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-4 block">
                Let&rsquo;s Talk
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6">
                Ready to Dominate {name} Real Estate Online?
              </h2>
              <AnimatedLine />
            </motion.div>
            <motion.p
              className="text-gray-400 text-lg lg:text-xl mb-10 max-w-2xl mx-auto mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Book a free strategy call and we&rsquo;ll show you how to become the go to realtor in {name} with a website that actually generates leads.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-cyan-500 text-gray-900 font-bold rounded-xl hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-lg"
              >
                Book a Free Strategy Call
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {['No contracts', 'Free consultation', 'Vancouver based team'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500/60" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
