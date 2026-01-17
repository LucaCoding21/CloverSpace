'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, ChevronDown } from 'lucide-react'

const footerLinks = {
  pages: [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Results', href: '#results' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

const faqs = [
  {
    question: 'How long does it take to build my website?',
    answer: 'Most sites go live in 5-7 days. We handle everything from design to launch, so you can focus on running your business.',
  },
  {
    question: 'What if I already have a website?',
    answer: 'No problem. We\'ll do a free audit of your current site and show you exactly what\'s costing you leads. If it makes sense, we\'ll migrate everything over.',
  },
  {
    question: 'Do I need to provide content or images?',
    answer: 'We\'ll guide you on what we need, but we can work with what you have. If you need help with photos or copy, we\'ll point you in the right direction.',
  },
  {
    question: 'What\'s included in the monthly fee?',
    answer: 'Hosting, maintenance, security updates, and ongoing support. You also get access to your analytics dashboard and we\'ll make small tweaks as needed.',
  },
  {
    question: 'How is this different from a normal pest control website?',
    answer: 'Most websites just list services and wait for calls. We design your site to turn one-time callers into recurring plan customers by clearly explaining your maintenance programs, pricing logic, and next steps.',
  },
  {
    question: 'What if my customers just want one-time service?',
    answer: "That's normal. The goal isn't to force plans, it's to educate at the right moment so homeowners understand why prevention saves money long-term. Many say yes when it's explained clearly.",
  },
]

function FAQItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className="text-gray-900 font-medium">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${isOpen ? 'bg-cyan-500' : 'bg-gray-200'}`}>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-gray-500'}`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 px-6 pb-5">{answer}</p>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer id="about" className="bg-gray-950 text-gray-300">
      {/* FAQ Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Title */}
            <div>
              <p className="text-cyan-600 font-medium tracking-widest uppercase text-sm mb-4">
                FAQ
              </p>
              <h3 className="font-display text-4xl md:text-5xl text-gray-900 mb-6">
                Frequently asked<br />
                <span className="text-cyan-500">questions</span>
              </h3>
              <p className="text-gray-600 max-w-md">
                Everything you need to know about working with us. Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
              </p>
            </div>

            {/* Right - FAQs */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-3xl text-primary">
                CloverSpace
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              We build high-converting websites exclusively for pest control companies. Our focus is simple: help you turn one-time emergency calls into predictable, recurring revenue through quarterly service plans.
            </p>


            {/* Contact */}
            <a
              href="mailto:hello@cloverspace.org"
              className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <span>hello@cloverspace.org</span>
            </a>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">PAGES</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">LEGAL</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} CloverSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
