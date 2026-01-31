import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'CloverSpace Terms of Service. Read our terms and conditions for using our Vancouver realtor website design and digital marketing services.',
  alternates: {
    canonical: 'https://cloverspace.studio/terms-of-service',
  },
}

export default function TermsOfService() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-24">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-400 mb-12">
          Last updated: January 30, 2026
        </p>

        <div className="prose prose-invert prose-gray max-w-none space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using the CloverSpace website at{' '}
              <Link href="https://cloverspace.studio" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                cloverspace.studio
              </Link>{' '}
              (&ldquo;the Site&rdquo;) and any services provided by CloverSpace (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Services
            </h2>
            <p>
              CloverSpace provides website design, development, search engine optimization (SEO), and digital marketing services primarily for real estate professionals in Vancouver, British Columbia, and surrounding areas. The specific scope, deliverables, and pricing for each project will be outlined in a separate service agreement or proposal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Use of the Site
            </h2>
            <p className="mb-4">You agree to use this Site only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Interfere with or disrupt the operation of the Site</li>
              <li>Attempt to gain unauthorized access to any part of the Site</li>
              <li>Transmit any harmful or malicious code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Intellectual Property
            </h2>
            <p>
              All content on this Site, including text, graphics, logos, images, videos, and software, is the property of CloverSpace or its content suppliers and is protected by Canadian and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content on this Site without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Client Projects
            </h2>
            <p className="mb-4">
              For website design and development projects:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ownership of the final website deliverables will be transferred to the client upon full payment, as specified in the project agreement.</li>
              <li>CloverSpace retains the right to showcase completed projects in our portfolio unless otherwise agreed upon in writing.</li>
              <li>Clients are responsible for providing accurate content, images, and information for their projects.</li>
              <li>Project timelines are estimates and may vary based on client responsiveness and scope changes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Payment Terms
            </h2>
            <p>
              Payment terms, including pricing, payment schedules, and accepted methods, will be outlined in individual project proposals or service agreements. Late payments may result in project delays or suspension of services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, CloverSpace shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or our services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Disclaimer of Warranties
            </h2>
            <p>
              The Site and our services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. While we strive to deliver high-quality results, we do not guarantee specific outcomes such as search engine rankings, lead volume, or conversion rates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Termination
            </h2>
            <p>
              We reserve the right to terminate or suspend access to our Site or services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of British Columbia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Changes to Terms
            </h2>
            <p>
              We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with an updated date. Your continued use of the Site following any changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              12. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:{' '}
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
