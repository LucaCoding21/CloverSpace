import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cloverspace.studio"),
  title: {
    default: "CloverSpace | Generative Engine Optimization (GEO) Agency",
    template: "%s | CloverSpace GEO"
  },
  description: "Get recommended by AI. We help local businesses get discovered by ChatGPT, Perplexity, Claude, and Google AI. Generative Engine Optimization for real estate, legal, healthcare, restaurants, and more. Free visibility audit.",
  keywords: [
    "GEO agency",
    "generative engine optimization",
    "AI recommendations",
    "ChatGPT optimization",
    "Perplexity optimization",
    "AI search optimization",
    "local business marketing",
    "AI visibility",
    "get recommended by AI",
    "ChatGPT for business",
    "AI SEO",
    "generative AI marketing",
    "local SEO",
    "GEO for business"
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
    title: "CloverSpace | Get Recommended by AI",
    description: "When customers ask AI for recommendations, does it say your name? We help local businesses get discovered by ChatGPT, Perplexity, and Google AI. Free visibility audit.",
    url: "https://cloverspace.studio",
    siteName: "CloverSpace",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CloverSpace - Generative Engine Optimization Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CloverSpace | Get Recommended by AI",
    description: "When customers ask AI for recommendations, does it say your name? Free visibility audit.",
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

// JSON-LD Schema for Professional Service
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CloverSpace",
  "description": "Generative Engine Optimization (GEO) agency helping local businesses get recommended by AI assistants like ChatGPT, Perplexity, Claude, and Google AI.",
  "url": "https://cloverspace.studio",
  "logo": "https://cloverspace.studio/images/cloverspace-logo-white.svg",
  "image": "https://cloverspace.studio/images/og-image.jpg",
  "email": "cloverspaceinfo@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vancouver",
    "addressRegion": "BC",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "49.2827",
    "longitude": "-123.1207"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Canada"
    }
  ],
  "serviceType": [
    "Generative Engine Optimization",
    "GEO Audit",
    "AI Search Optimization",
    "Local Business Marketing"
  ],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "knowsAbout": [
    "Generative Engine Optimization",
    "ChatGPT Optimization",
    "AI Search",
    "Local Business Marketing",
    "Real Estate Marketing",
    "Legal Marketing",
    "Healthcare Marketing",
    "Restaurant Marketing",
    "Home Services Marketing"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CloverSpace - Generative Engine Optimization Agency",
  "url": "https://cloverspace.studio",
  "description": "Get your business recommended by AI",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://cloverspace.studio/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Generative Engine Optimization for Local Businesses",
  "provider": {
    "@type": "Organization",
    "name": "CloverSpace"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Canada"
    }
  ],
  "description": "We optimize local businesses to get recommended by AI assistants including ChatGPT, Perplexity, Claude, and Google AI. Helping real estate agents, lawyers, doctors, restaurants, and service providers get discovered by customers.",
  "audience": {
    "@type": "Audience",
    "audienceType": "Local Service Businesses"
  },
  "offers": {
    "@type": "Offer",
    "name": "Free GEO Audit",
    "description": "Free AI visibility audit to see how AI currently recommends your business"
  }
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
