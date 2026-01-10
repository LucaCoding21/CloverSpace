import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cloverspace.studio"),
  title: {
    default: "AI SEO & GEO Agency Vancouver | Generative Engine Optimization Canada",
    template: "%s | CloverSpace - AI SEO Vancouver"
  },
  description: "Vancouver's leading AI SEO, GEO & AEO agency. We help Canadian businesses get recommended by ChatGPT, Perplexity & Google AI. Generative Engine Optimization experts in Vancouver, BC. Free AI visibility audit.",
  keywords: [
    // Location-specific keywords
    "AI SEO agency Vancouver",
    "GEO agency Vancouver",
    "AEO agency Vancouver",
    "AI SEO Canada",
    "GEO agency Canada",
    "AEO agency Canada",
    "generative engine optimization Vancouver",
    "answer engine optimization Vancouver",
    "AI search optimization Vancouver",
    "AI marketing agency Vancouver BC",
    "GEO agency British Columbia",
    // General keywords
    "GEO agency",
    "AEO agency",
    "generative engine optimization",
    "answer engine optimization",
    "AI SEO",
    "AI recommendations",
    "ChatGPT optimization",
    "Perplexity optimization",
    "AI search optimization",
    "local business marketing",
    "AI visibility",
    "get recommended by AI",
    "ChatGPT for business",
    "generative AI marketing",
    "local SEO Vancouver"
  ],
  authors: [{ name: "CloverSpace", url: "https://cloverspace.studio" }],
  creator: "CloverSpace",
  publisher: "CloverSpace",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  openGraph: {
    title: "AI SEO & GEO Agency Vancouver | CloverSpace Canada",
    description: "Vancouver's #1 AI SEO, GEO & AEO agency. Get your business recommended by ChatGPT, Perplexity & Google AI. Generative Engine Optimization experts serving Vancouver, BC and all of Canada. Free AI visibility audit.",
    url: "https://cloverspace.studio",
    siteName: "CloverSpace - AI SEO Vancouver",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CloverSpace - AI SEO & GEO Agency Vancouver, Canada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SEO & GEO Agency Vancouver | CloverSpace Canada",
    description: "Vancouver's leading AI SEO, GEO & AEO agency. Get recommended by ChatGPT & Perplexity. Free audit.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cloverspace.studio",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Marketing",
};

// JSON-LD Schema for Professional Service - Local Business in Vancouver
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness", "MarketingAgency"],
  "name": "CloverSpace - AI SEO & GEO Agency Vancouver",
  "alternateName": ["CloverSpace", "CloverSpace GEO", "CloverSpace AI SEO"],
  "description": "Vancouver's leading AI SEO, GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) agency. We help Canadian businesses get recommended by ChatGPT, Perplexity, Claude, and Google AI.",
  "url": "https://cloverspace.studio",
  "logo": "https://cloverspace.studio/images/cloverspace-logo-white.svg",
  "image": "https://cloverspace.studio/images/og-image.jpg",
  "email": "cloverspaceinfo@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vancouver",
    "addressLocality": "Vancouver",
    "addressRegion": "BC",
    "postalCode": "V6B",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "49.2827",
    "longitude": "-123.1207"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Vancouver",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "British Columbia"
      }
    },
    {
      "@type": "AdministrativeArea",
      "name": "British Columbia"
    },
    {
      "@type": "Country",
      "name": "Canada"
    },
    {
      "@type": "Country",
      "name": "United States"
    }
  ],
  "serviceType": [
    "AI SEO",
    "Generative Engine Optimization",
    "GEO",
    "Answer Engine Optimization",
    "AEO",
    "AI Search Optimization",
    "ChatGPT Optimization",
    "Perplexity Optimization",
    "AI Visibility Audit",
    "Local Business Marketing"
  ],
  "priceRange": "$$",
  "currenciesAccepted": "CAD",
  "paymentAccepted": "Credit Card, E-Transfer",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [],
  "knowsAbout": [
    "AI SEO",
    "Generative Engine Optimization",
    "GEO",
    "Answer Engine Optimization",
    "AEO",
    "ChatGPT Optimization",
    "Perplexity Optimization",
    "Claude AI Optimization",
    "Google AI Optimization",
    "AI Search",
    "Local Business Marketing Vancouver",
    "Real Estate Marketing",
    "Legal Marketing",
    "Healthcare Marketing",
    "Restaurant Marketing",
    "Home Services Marketing"
  ],
  "slogan": "Get Recommended by AI"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CloverSpace - AI SEO & GEO Agency Vancouver, Canada",
  "url": "https://cloverspace.studio",
  "description": "Vancouver's leading AI SEO, GEO and AEO agency. Get your business recommended by ChatGPT, Perplexity, and Google AI.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://cloverspace.studio/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CloverSpace",
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vancouver",
        "addressRegion": "BC",
        "addressCountry": "Canada"
      }
    }
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI SEO, GEO & AEO - Generative Engine Optimization Vancouver",
  "provider": {
    "@type": "Organization",
    "name": "CloverSpace",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "Canada"
    }
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Vancouver"
    },
    {
      "@type": "AdministrativeArea",
      "name": "British Columbia"
    },
    {
      "@type": "Country",
      "name": "Canada"
    },
    {
      "@type": "Country",
      "name": "United States"
    }
  ],
  "description": "Vancouver's premier AI SEO, GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) agency. We optimize Canadian businesses to get recommended by AI assistants including ChatGPT, Perplexity, Claude, and Google AI.",
  "audience": {
    "@type": "Audience",
    "audienceType": "Local Service Businesses in Vancouver and Canada"
  },
  "offers": {
    "@type": "Offer",
    "name": "Free AI SEO Audit",
    "description": "Free AI visibility audit to see how ChatGPT, Perplexity, and Google AI currently recommend your business",
    "priceCurrency": "CAD",
    "price": "0"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI SEO & GEO Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI SEO Foundation Package",
          "description": "Complete GEO setup including Google Business Profile optimization, schema markup, and AI visibility audit"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI SEO Growth Package",
          "description": "Ongoing AI SEO optimization with monthly content, tracking, and authority building"
        }
      }
    ]
  }
};

// FAQ Schema - Critical for AI search visibility
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AI SEO, GEO, and AEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI SEO optimizes your business for AI-powered search. GEO (Generative Engine Optimization) focuses on getting recommended by generative AI like ChatGPT. AEO (Answer Engine Optimization) ensures AI assistants cite your business as the answer. CloverSpace is Vancouver's leading agency for all three services."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best AI SEO agency in Vancouver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CloverSpace is Vancouver's premier AI SEO, GEO, and AEO agency. We specialize in helping Canadian businesses get recommended by ChatGPT, Perplexity, Claude, and Google AI through proven generative engine optimization strategies."
      }
    },
    {
      "@type": "Question",
      "name": "How is GEO different from traditional SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional SEO optimizes for Google's algorithm. GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) optimize for how AI pulls and cites information — your reviews, directory consistency, website structure, and web mentions. Different sources, different signals."
      }
    },
    {
      "@type": "Question",
      "name": "How long does AI SEO take to see results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some signals move fast — profile fixes and website changes can impact AI recommendations within weeks. Authority building takes longer. CloverSpace provides monthly progress reports showing exactly where you stand in AI visibility."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with businesses outside Vancouver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! While CloverSpace is based in Vancouver, BC, we work with businesses across Canada and the US. Our AI SEO and GEO strategies work for any local service business — real estate, legal, healthcare, restaurants, home services, and wedding vendors."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
