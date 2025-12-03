import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cloverspace.co"),
  title: {
    default: "Web Design Surrey BC | CloverSpace - Websites That Bring You Business",
    template: "%s | CloverSpace Web Design Surrey"
  },
  description: "Surrey's trusted web design agency for local businesses. We build fast, modern websites in 5-7 days that actually bring you customers. Serving Surrey, Vancouver & the Lower Mainland. Free consultation.",
  keywords: [
    "web design Surrey",
    "web design Surrey BC",
    "website design Vancouver",
    "web developer Surrey",
    "small business website design",
    "affordable web design Surrey",
    "local business website Vancouver",
    "restaurant website design Surrey",
    "professional web design BC",
    "fast website design",
    "website designer near me",
    "Lower Mainland web design",
    "custom website Surrey",
    "business website that converts",
    "SEO website design Vancouver"
  ],
  authors: [{ name: "CloverSpace", url: "https://cloverspace.co" }],
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
    title: "Web Design Surrey BC | Websites That Bring You Business",
    description: "Surrey's trusted web design agency. We build fast, modern websites in 5-7 days that actually bring you customers. Free consultation available.",
    url: "https://cloverspace.co",
    siteName: "CloverSpace",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CloverSpace - Web Design Surrey BC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Surrey BC | Websites That Bring You Business",
    description: "Surrey's trusted web design agency. Fast, modern websites in 5-7 days that bring you customers.",
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
    canonical: "https://cloverspace.co",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Web Design",
};

// JSON-LD Schema for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CloverSpace",
  "description": "Professional web design and development agency serving local businesses in Surrey, Vancouver, and the Lower Mainland, BC.",
  "url": "https://cloverspace.co",
  "logo": "https://cloverspace.co/images/cloverspace-logo-white.svg",
  "image": "https://cloverspace.co/images/og-image.jpg",
  "email": "cloverspaceinfo@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Surrey",
    "addressRegion": "BC",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "49.1913",
    "longitude": "-122.8490"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Surrey"
    },
    {
      "@type": "City",
      "name": "Vancouver"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Lower Mainland"
    }
  ],
  "serviceType": ["Web Design", "Web Development", "SEO", "Local Business Websites"],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://twitter.com/cloverspace",
    "https://linkedin.com/company/cloverspace",
    "https://instagram.com/cloverspace"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CloverSpace",
  "url": "https://cloverspace.co",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://cloverspace.co/?s={search_term_string}",
    "query-input": "required name=search_term_string"
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
