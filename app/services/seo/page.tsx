import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'SEO for Vancouver Realtors | Local Real Estate SEO',
  description:
    'Dominate Google search results for Vancouver real estate keywords. Our local SEO services help realtors rank for neighbourhood specific searches across Greater Vancouver, Burnaby, Richmond, North Vancouver, and Surrey.',
  keywords: [
    'Vancouver realtor SEO',
    'real estate SEO Vancouver',
    'local SEO for realtors Vancouver',
    'Vancouver real estate Google ranking',
    'realtor SEO services BC',
    'real estate search engine optimization Vancouver',
  ],
  alternates: {
    canonical: 'https://cloverspace.studio/services/seo',
  },
}

const features = [
  {
    title: 'Local Vancouver Keyword Strategy',
    description:
      'We research and target the exact terms Vancouver homebuyers and sellers search for, from "Kitsilano realtor" to "condos for sale in Yaletown," so you show up when it matters.',
  },
  {
    title: 'Google Business Profile Optimization',
    description:
      'Get into the local map pack for Vancouver real estate searches. We optimize your profile with the right categories, photos, and review strategies to outrank competing agents.',
  },
  {
    title: 'Neighbourhood Landing Pages',
    description:
      'We create dedicated pages targeting each neighbourhood you serve, like Mount Pleasant, Burnaby, Richmond, and North Vancouver, so you rank for hyperlocal searches.',
  },
  {
    title: 'On Page SEO & Technical Audit',
    description:
      'Every page is optimized with proper heading structure, meta tags, schema markup, and fast load times. We fix the technical issues holding your site back in search results.',
  },
  {
    title: 'Content Strategy & Blog',
    description:
      'Regular market reports, neighbourhood guides, and buyer/seller tips keep your site fresh and give Google new reasons to rank you. We create content Vancouver buyers actually want to read.',
  },
  {
    title: 'Monthly Reporting & Analytics',
    description:
      'See exactly how your rankings improve with monthly reports covering keyword positions, traffic growth, and lead generation metrics for the Vancouver market.',
  },
]

const stats = [
  { value: '150%', label: 'Average Traffic Increase' },
  { value: 'Top 3', label: 'Google Map Pack' },
  { value: '40+', label: 'Keywords Ranked' },
  { value: '6 Months', label: 'To See Real Results' },
]

export default function SeoPage() {
  return (
    <ServicePageLayout
      label="Local SEO Services"
      title="Get Found by Vancouver Homebuyers on Google"
      description="When every agent is fighting for the same Google rankings, generic SEO won't cut it. Our hyperlocal strategies put you in front of homebuyers actively searching for realtors in specific Vancouver neighbourhoods."
      features={features}
      stats={stats}
      heroImage={{
        src: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'City lights at night creating abstract bokeh patterns over a dark urban landscape',
      }}
      sectionImage={{
        src: 'https://images.pexels.com/photos/1434580/pexels-photo-1434580.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Aerial view of illuminated city streets forming a grid pattern at night',
      }}

    />
  )
}
