'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'

const footerLinks = {
  pages: [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-logo text-2xl text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                Clover<span className="text-3xl">☘︎</span>Space
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Helping real estate agents get found online and close more deals.
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
            <h4 className="font-display text-lg text-white mb-4">Pages</h4>
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
            <h4 className="font-display text-lg text-white mb-4">Legal</h4>
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
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} CloverSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
