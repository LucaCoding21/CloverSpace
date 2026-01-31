import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Realtor Branding & Digital Marketing Vancouver',
  description:
    'Build a personal brand that attracts referrals and listings on autopilot. Our branding and digital marketing services help Vancouver realtors stand out from the competition across the Lower Mainland.',
  keywords: [
    'Vancouver realtor branding',
    'real estate personal branding Vancouver',
    'realtor digital marketing Vancouver',
    'Vancouver real estate agent marketing',
    'realtor brand identity BC',
    'real estate social media marketing Vancouver',
  ],
  alternates: {
    canonical: 'https://cloverspace.studio/services/branding',
  },
}

const features = [
  {
    title: 'Personal Brand Strategy',
    description:
      'Define what makes you different from every other Vancouver realtor. We craft a brand story, visual identity, and messaging framework that attracts your ideal clients.',
  },
  {
    title: 'Visual Identity & Logo',
    description:
      'A professional logo, colour palette, and typography system that works across your website, business cards, signage, and social media. Designed to feel premium and memorable.',
  },
  {
    title: 'Social Media Presence',
    description:
      'Branded templates and content strategies for Instagram, Facebook, and LinkedIn. Showcase your Vancouver listings and market expertise with a consistent, professional look.',
  },
  {
    title: 'Listing Marketing Materials',
    description:
      'Feature sheets, sold postcards, open house materials, and digital ads, all designed to match your brand and make your Vancouver listings stand out.',
  },
  {
    title: 'Email Marketing',
    description:
      'Branded newsletters with Vancouver market updates, new listings, and neighbourhood insights that keep you top of mind with past clients and your sphere of influence.',
  },
  {
    title: 'Reputation Management',
    description:
      'Build a portfolio of five star reviews across Google, Yelp, and RankMyAgent. We help you develop a review strategy that builds trust with Vancouver homebuyers researching agents.',
  },
]

const stats = [
  { value: '80%', label: 'Brand Recognition Lift' },
  { value: '2x', label: 'More Referrals' },
  { value: '50+', label: 'Brand Assets Delivered' },
  { value: '100%', label: 'Cohesive Identity' },
]

export default function BrandingPage() {
  return (
    <ServicePageLayout
      label="Branding & Digital Marketing"
      title="Build a Vancouver Realtor Brand That Attracts Clients"
      description="Most realtors look and sound exactly the same online. We help Vancouver agents craft a distinct personal brand that earns trust at first glance, attracts referrals organically, and makes your name the one clients remember."
      features={features}
      stats={stats}
      heroImage={{
        src: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Abstract close up of printed typography and design elements with rich tonal contrast',
      }}
      sectionImage={{
        src: 'https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Abstract dark geometric architecture with dramatic interplay of light and shadow',
      }}

    />
  )
}
