import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'CloverSpace Privacy Policy. Learn how we collect, use, and protect your personal information when you use our Vancouver realtor website services.',
  alternates: {
    canonical: 'https://cloverspace.studio/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-24">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-12">
          Last updated: January 30, 2026
        </p>

        <div className="prose prose-invert prose-gray max-w-none space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Introduction
            </h2>
            <p>
              CloverSpace (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the website{' '}
              <Link href="https://cloverspace.studio" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                cloverspace.studio
              </Link>
              . This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We are based in Vancouver, British Columbia, Canada, and comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) and British Columbia&rsquo;s Personal Information Protection Act (PIPA).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Personal Information:</strong> Name, email address, phone number, and company name when you submit a contact form or book a call.
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, browser type, device information, and referring URLs.
              </li>
              <li>
                <strong className="text-white">Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide our services</li>
              <li>To communicate with you about projects, updates, and promotions</li>
              <li>To improve our website, services, and user experience</li>
              <li>To analyze website usage and optimize performance</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential. We may also disclose information when required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Cookies
            </h2>
            <p>
              Our website uses cookies to improve functionality and analyze traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Your Rights
            </h2>
            <p className="mb-4">
              Under Canadian privacy law, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for the collection and use of your information</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at{' '}
              <a
                href="mailto:cloverspaceinfo@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                cloverspaceinfo@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a
                href="mailto:cloverspaceinfo@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                cloverspaceinfo@gmail.com
              </a>
            </p>
          </section>
        </div>

      </main>
      <Footer />
    </div>
  )
}
