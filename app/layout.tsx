import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F59E0B',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cloverspace.org'),
  title: {
    default:
      'CloverSpace | Professional Websites for Real Estate Agents',
    template: '%s | CloverSpace',
  },
  description:
    'Custom websites built for real estate professionals. Generate more leads, build instant trust, and close deals faster with a site that makes your brand feel established.',
  keywords: [
    'real estate website',
    'real estate agent website',
    'realtor website design',
    'real estate lead generation',
    'real estate marketing',
    'real estate web design',
    'real estate digital marketing',
    'real estate business growth',
  ],
  authors: [{ name: 'CloverSpace', url: 'https://cloverspace.org' }],
  creator: 'CloverSpace',
  publisher: 'CloverSpace',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cloverspace.org',
    siteName: 'CloverSpace',
    title:
      'CloverSpace | Turn Emergency Pest Calls Into $5K-$15K/Year Recurring Customers',
    description:
      'The #1 marketing agency for pest control companies. We build systems that transform one-time emergency calls into predictable recurring revenue.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CloverSpace - Pest Control Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloverSpace | Pest Control Marketing That Drives Recurring Revenue',
    description:
      'Turn emergency pest calls into $5K-$15K/year recurring customers with our proven marketing systems.',
    images: ['/images/og-image.png'],
    creator: '@cloverspace',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://cloverspace.org',
  },
}

// Schema.org JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://cloverspace.org/#organization',
      name: 'CloverSpace',
      url: 'https://cloverspace.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cloverspace.org/images/logo.png',
        width: 200,
        height: 60,
      },
      sameAs: [
        'https://twitter.com/cloverspace',
        'https://linkedin.com/company/cloverspace',
        'https://facebook.com/cloverspace',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-800-555-1234',
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://cloverspace.org/#website',
      url: 'https://cloverspace.org',
      name: 'CloverSpace',
      description:
        'The #1 marketing agency for pest control companies',
      publisher: {
        '@id': 'https://cloverspace.org/#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://cloverspace.org/#localbusiness',
      name: 'CloverSpace',
      description:
        'Marketing agency specializing in recurring revenue growth for pest control companies',
      url: 'https://cloverspace.org',
      telephone: '+1-800-555-1234',
      email: 'hello@cloverspace.org',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.2672,
        longitude: -97.7431,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://cloverspace.org/#service',
      name: 'Pest Control Marketing Services',
      provider: {
        '@id': 'https://cloverspace.org/#organization',
      },
      description:
        'Full-stack marketing services for pest control companies including websites, SEO, paid advertising, and revenue analytics.',
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Marketing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Conversion Websites',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Local SEO Domination',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Paid Advertising',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Revenue Analytics',
            },
          },
        ],
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Merriweather+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-gray-950">{children}</body>
    </html>
  )
}
