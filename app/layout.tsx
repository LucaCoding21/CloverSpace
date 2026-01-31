import type { Metadata, Viewport } from 'next'
import { Inter, Outfit, Merriweather_Sans } from 'next/font/google'
import Script from 'next/script'
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
  metadataBase: new URL('https://cloverspace.studio'),
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
  authors: [{ name: 'CloverSpace', url: 'https://cloverspace.studio' }],
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
    url: 'https://cloverspace.studio',
    siteName: 'CloverSpace',
    title:
      'CloverSpace | Vancouver Realtor Websites & Real Estate Web Design',
    description:
      'Custom websites built for Vancouver realtors. Generate more leads, rank higher on Google, and close deals faster across Greater Vancouver and the Lower Mainland.',
    images: [
      {
        url: 'https://cloverspace.studio/images/cta.jpg',
        width: 1200,
        height: 630,
        alt: 'CloverSpace - Vancouver Realtor Website Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloverSpace | Vancouver Realtor Websites & Real Estate Web Design',
    description:
      'Custom websites that help Vancouver realtors generate more leads and close deals faster.',
    creator: '@cloverspace',
    images: ['https://cloverspace.studio/images/cta.jpg'],
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
  verification: {
    google: 'Wa7ukSivQDcbZ_IuaqrvGJ18Itxk9QTenFBEnBXOrsg',
  },
  alternates: {
    canonical: 'https://cloverspace.studio',
  },
  other: {
    'geo.region': 'CA-BC',
    'geo.placename': 'Vancouver',
    'geo.position': '49.2827;-123.1207',
    ICBM: '49.2827, -123.1207',
  },
}

// Schema.org JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://cloverspace.studio/#organization',
      name: 'CloverSpace',
      url: 'https://cloverspace.studio',
      description:
        'CloverSpace is a Vancouver-based web design and digital marketing agency specializing in building high-converting websites for realtors and real estate agents across Greater Vancouver and the Lower Mainland.',
      foundingDate: '2024',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cloverspace.studio/images/logo.png',
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
      '@id': 'https://cloverspace.studio/#website',
      url: 'https://cloverspace.studio',
      name: 'CloverSpace',
      description:
        'Custom realtor websites built for Vancouver real estate agents. SEO, lead generation, and web design for Greater Vancouver and the Lower Mainland.',
      publisher: {
        '@id': 'https://cloverspace.studio/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://cloverspace.studio/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://cloverspace.studio/#localbusiness',
      name: 'CloverSpace',
      description:
        'Vancouver website agency specializing in custom websites, SEO, and lead generation for realtors and real estate agents in Greater Vancouver and the Lower Mainland.',
      url: 'https://cloverspace.studio',
      email: 'cloverspaceinfo@gmail.com',
      image: 'https://cloverspace.studio/images/og-image.png',
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
      parentOrganization: {
        '@id': 'https://cloverspace.studio/#organization',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://cloverspace.studio/#service-website-design',
      name: 'Custom Realtor Website Design',
      provider: { '@id': 'https://cloverspace.studio/#organization' },
      description:
        'Professionally designed, mobile-responsive websites built specifically for Vancouver realtors to attract clients and generate leads.',
      url: 'https://cloverspace.studio/services/website-design',
      areaServed: [
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'AdministrativeArea', name: 'Greater Vancouver' },
        { '@type': 'AdministrativeArea', name: 'Lower Mainland' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://cloverspace.studio/#service-seo',
      name: 'Local SEO for Vancouver Realtors',
      provider: { '@id': 'https://cloverspace.studio/#organization' },
      description:
        'Search engine optimization tailored for real estate agents in Vancouver, helping you rank higher on Google and attract local homebuyers and sellers.',
      url: 'https://cloverspace.studio/services/seo',
      areaServed: [
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'AdministrativeArea', name: 'Greater Vancouver' },
        { '@type': 'AdministrativeArea', name: 'Lower Mainland' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://cloverspace.studio/#service-lead-generation',
      name: 'Real Estate Lead Generation',
      provider: { '@id': 'https://cloverspace.studio/#organization' },
      description:
        'Data-driven lead generation strategies that help Vancouver realtors capture, nurture, and convert more prospects into clients.',
      url: 'https://cloverspace.studio/services/lead-generation',
      areaServed: [
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'AdministrativeArea', name: 'Greater Vancouver' },
        { '@type': 'AdministrativeArea', name: 'Lower Mainland' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://cloverspace.studio/#service-branding',
      name: 'Realtor Branding & Digital Marketing',
      provider: { '@id': 'https://cloverspace.studio/#organization' },
      description:
        'Complete branding and digital marketing solutions for Vancouver real estate professionals looking to build a strong, recognizable personal brand.',
      url: 'https://cloverspace.studio/services/branding',
      areaServed: [
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'AdministrativeArea', name: 'Greater Vancouver' },
        { '@type': 'AdministrativeArea', name: 'Lower Mainland' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://cloverspace.studio/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://cloverspace.studio',
        },
      ],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q1DSHSPD08"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q1DSHSPD08');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-gray-950">
        <div className="sr-only" aria-hidden="true">
          CloverSpace is a web design and digital marketing agency based in Vancouver, BC, Canada.
          We specialize in building custom, high-converting websites for realtors and real estate agents
          across Greater Vancouver and the Lower Mainland. Our services include custom realtor website design,
          local SEO for Vancouver realtors, real estate lead generation, and realtor branding and digital marketing.
          We serve real estate professionals in Vancouver (Kitsilano, Yaletown, East Vancouver), Burnaby,
          North Vancouver, Richmond, Surrey, and the broader Greater Vancouver area. Our websites are built
          for performance with sub-1-second load times, mobile-first responsive design, and SEO optimization
          to help realtors rank higher on Google and generate more leads. Contact us at cloverspaceinfo@gmail.com
          or visit https://cloverspace.studio to book a free strategy call.
        </div>
        {children}
      </body>
    </html>
  )
}
