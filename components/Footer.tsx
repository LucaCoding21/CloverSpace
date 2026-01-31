'use client'

import Link from 'next/link'
import { Mail, Instagram } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Website Design', href: '/services/website-design' },
    { label: 'SEO', href: '/services/seo' },
    { label: 'Lead Generation', href: '/services/lead-generation' },
    { label: 'Branding', href: '/services/branding' },
  ],
  areas: [
    { label: 'Kitsilano', href: '/areas/kitsilano' },
    { label: 'Yaletown', href: '/areas/yaletown' },
    { label: 'East Vancouver', href: '/areas/east-vancouver' },
    { label: 'Burnaby', href: '/areas/burnaby' },
    { label: 'North Vancouver', href: '/areas/north-vancouver' },
  ],
  company: [
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-logo text-2xl text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                Clover<span className="text-3xl">☘︎</span>Space
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              We build websites for Vancouver realtors. The kind that actually bring in business.
            </p>

            {/* Contact & Social */}
            <div className="space-y-3">
              <a
                href="mailto:cloverspaceinfo@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span>cloverspaceinfo@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/cloverspace.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>@cloverspace.studio</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
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

          {/* Areas */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Areas</h4>
            <ul className="space-y-3">
              {footerLinks.areas.map((link) => (
                <li key={link.href}>
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

          {/* Company */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
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
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} CloverSpace. All rights reserved. Vancouver, BC.
          </p>
        </div>
      </div>
    </footer>
  )
}
