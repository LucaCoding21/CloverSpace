import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "GEO for Wedding Vendors | CloverSpace - Get Recommended by AI",
    template: "%s | CloverSpace Wedding GEO"
  },
  description: "Generative Engine Optimization for wedding vendors. We help photographers, venues, florists, and planners get recommended by ChatGPT, Perplexity, and Google AI. Free visibility audit.",
  keywords: [
    "GEO for weddings",
    "wedding vendor marketing",
    "wedding photographer marketing",
    "wedding venue marketing",
    "AI recommendations weddings",
    "ChatGPT wedding vendors",
    "generative engine optimization",
    "wedding SEO",
    "wedding florist marketing",
    "wedding DJ marketing",
    "get more wedding bookings",
    "AI search optimization weddings",
    "wedding planner marketing",
    "wedding videographer marketing"
  ],
  openGraph: {
    title: "GEO for Wedding Vendors | Get Recommended by AI",
    description: "When couples ask ChatGPT for vendor recommendations, does it say your name? We help wedding pros get recommended by AI. Free visibility audit.",
    url: "https://cloverspace.studio/wedding",
    siteName: "CloverSpace",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CloverSpace - GEO for Wedding Vendors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO for Wedding Vendors | Get Recommended by AI",
    description: "When couples ask AI for vendor recommendations, does it recommend you? Free visibility audit.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cloverspace.studio/wedding",
  },
};

// Wedding-specific JSON-LD Schema
const weddingJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CloverSpace - Wedding GEO",
  "description": "Generative Engine Optimization (GEO) agency specializing in helping wedding vendors get recommended by AI assistants like ChatGPT, Perplexity, Claude, and Google AI.",
  "url": "https://cloverspace.studio/wedding",
  "logo": "https://cloverspace.studio/images/cloverspace-logo-white.svg",
  "image": "https://cloverspace.studio/images/og-image.jpg",
  "email": "cloverspaceinfo@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vancouver",
    "addressRegion": "BC",
    "addressCountry": "CA"
  },
  "serviceType": [
    "Generative Engine Optimization",
    "GEO Audit",
    "AI Search Optimization",
    "Wedding Vendor Marketing"
  ],
  "knowsAbout": [
    "Generative Engine Optimization",
    "ChatGPT Optimization",
    "AI Search",
    "Wedding Marketing",
    "Wedding Photographers",
    "Wedding Venues",
    "Wedding Florists",
    "Wedding Planners",
    "Wedding DJs"
  ]
};

export default function WeddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weddingJsonLd) }}
      />
      {children}
    </>
  );
}
