import type { Metadata, Viewport } from 'next'
import { Inter, Outfit, Merriweather_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather-sans',
})

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
      'CloverSpace | Vancouver Realtor Websites & Real Estate Web Design',
    template: '%s | CloverSpace',
  },
  description:
    'Custom websites built for Vancouver realtors and real estate agents. Generate more leads, rank higher on Google, build instant trust, and close deals faster across Greater Vancouver, Burnaby, Richmond, and the Lower Mainland.',
  keywords: [
    'Vancouver realtor website',
    'Vancouver real estate agent website',
    'realtor website design Vancouver',
    'real estate web design Vancouver BC',
    'Vancouver realtor SEO',
    'real estate lead generation Vancouver',
    'realtor marketing Vancouver',
    'Vancouver real estate website design',
    'custom realtor website BC',
    'real estate digital marketing Vancouver',
    'Vancouver realtor branding',
    'Greater Vancouver real estate website',
    'Burnaby realtor website',
    'Richmond real estate agent website',
    'North Vancouver realtor web design',
    'Surrey realtor website',
    'real estate IDX website Vancouver',
    'MLS website design Vancouver',
    'Vancouver luxury real estate website',
    'first time homebuyer Vancouver realtor',
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
    locale: 'en_CA',
    url: 'https://cloverspace.org',
    siteName: 'CloverSpace',
    title:
      'CloverSpace | Vancouver Realtor Websites & Real Estate Web Design',
    description:
      'Custom websites built for Vancouver realtors. Generate more leads, rank higher on Google, and close deals faster across Greater Vancouver and the Lower Mainland.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CloverSpace - Vancouver Real Estate Website Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloverSpace | Vancouver Realtor Websites & Real Estate Web Design',
    description:
      'Custom websites that help Vancouver realtors generate more leads and close deals faster.',
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
        'https://www.instagram.com/cloverspace.studio/',
        'https://twitter.com/cloverspace',
        'https://linkedin.com/company/cloverspace',
        'https://facebook.com/cloverspace',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'cloverspaceinfo@gmail.com',
        contactType: 'sales',
        areaServed: ['CA', 'US'],
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://cloverspace.org/#website',
      url: 'https://cloverspace.org',
      name: 'CloverSpace',
      description:
        'Custom realtor websites built for Vancouver real estate agents. SEO, lead generation, and web design for Greater Vancouver and the Lower Mainland.',
      publisher: {
        '@id': 'https://cloverspace.org/#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://cloverspace.org/#localbusiness',
      name: 'CloverSpace',
      description:
        'Vancouver website agency specializing in custom websites, SEO, and lead generation for realtors and real estate agents in Greater Vancouver and the Lower Mainland.',
      url: 'https://cloverspace.org',
      email: 'cloverspaceinfo@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vancouver',
        addressRegion: 'BC',
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 49.2827,
        longitude: -123.1207,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
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
      name: 'Vancouver Realtor Website Services',
      provider: {
        '@id': 'https://cloverspace.org/#organization',
      },
      description:
        'Custom website design, local SEO, and lead generation services for Vancouver realtors and real estate professionals across Greater Vancouver, Burnaby, Richmond, North Vancouver, and Surrey.',
      areaServed: [
        {
          '@type': 'City',
          name: 'Vancouver',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Greater Vancouver',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Lower Mainland',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Realtor Marketing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Realtor Website Design',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Local SEO for Vancouver Realtors',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Real Estate Lead Generation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Realtor Branding & Digital Marketing',
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable} ${merriweatherSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-gray-950">{children}</body>
    </html>
  )
}
