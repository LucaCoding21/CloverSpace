import type { Metadata } from 'next'
import AreaPageLayout from '@/components/AreaPageLayout'

export const metadata: Metadata = {
  title: 'Kitsilano Realtor Websites | Web Design for Kits Agents',
  description:
    'Custom websites for Kitsilano realtors. Stand out in one of Vancouver\'s most desirable neighbourhoods with a site that captures buyer and seller leads across Kits, Kits Point, and Arbutus Ridge.',
  keywords: [
    'Kitsilano realtor website',
    'Kits real estate agent website',
    'Kitsilano Vancouver realtor',
    'Kits Point real estate',
    'web design Kitsilano realtor',
  ],
  alternates: {
    canonical: 'https://cloverspace.studio/areas/kitsilano',
  },
}

export default function KitsilanoPage() {
  return (
    <AreaPageLayout
      name="Kitsilano"
      title="Websites Built for Kitsilano Realtors"
      description="Kitsilano is one of Vancouver's most competitive real estate markets. With beaches, top rated schools, and a walkable lifestyle that buyers love, you need a website that matches the premium feel of this neighbourhood."
      highlights={[
        'One of Vancouver\'s most sought after neighbourhoods with consistently high demand',
        'Mix of heritage homes, modern condos, and luxury waterfront properties',
        'Strong buyer interest from young professionals, families, and downsizers',
        'High value listings mean high value commissions, and your website needs to reflect that',
        'Close to UBC, beaches, and transit making it a perennial favourite',
      ]}
      whyHere={"Kitsilano buyers are savvy and do their research online before reaching out. They compare agents, read reviews, and judge credibility by your digital presence. A generic template website won\u2019t cut it in a neighbourhood where the average home price demands a premium experience. We build Kitsilano realtor websites that match the quality buyers expect from agents in this market."}
      propertyTypes={[
        'Detached Homes',
        'Heritage Houses',
        'Condos & Apartments',
        'Luxury Waterfront',
        'Townhouses',
        'Duplexes',
        'Character Homes',
        'Pre Sale Developments',
      ]}
      nearbyAreas={[
        { name: 'Yaletown', href: '/areas/yaletown' },
        { name: 'East Vancouver', href: '/areas/east-vancouver' },
        { name: 'North Vancouver', href: '/areas/north-vancouver' },
        { name: 'Burnaby', href: '/areas/burnaby' },
      ]}
      stats={[
        { value: '$2.1M', label: 'Avg. Detached Home Price' },
        { value: '850+', label: 'Annual Sales Volume' },
        { value: 'Top 5', label: 'Most Searched Vancouver Area' },
        { value: '98%', label: 'Walkability Score' },
      ]}
      heroImage={{
        src: 'https://images.pexels.com/photos/2382868/pexels-photo-2382868.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Stunning aerial view of Vancouver skyline at sunset with mountains and waterfront',
      }}
      sectionImage={{
        src: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Beautiful Vancouver beach and waterfront neighbourhood with ocean and mountain views',
      }}
    />
  )
}
