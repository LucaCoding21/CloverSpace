import type { Metadata } from 'next'
import AreaPageLayout from '@/components/AreaPageLayout'

export const metadata: Metadata = {
  title: 'North Vancouver Realtor Websites | Web Design for North Van Agents',
  description:
    'Custom websites for North Vancouver realtors. Attract buyers and sellers across Lower Lonsdale, Lynn Valley, Deep Cove, and Edgemont with a website built for the North Shore real estate market.',
  keywords: [
    'North Vancouver realtor website',
    'North Van real estate agent',
    'Lower Lonsdale realtor',
    'Lynn Valley real estate website',
    'North Shore realtor website',
    'Deep Cove real estate agent',
  ],
  alternates: {
    canonical: 'https://cloverspace.studio/areas/north-vancouver',
  },
}

export default function NorthVancouverPage() {
  return (
    <AreaPageLayout
      name="North Vancouver"
      title="Websites Built for North Vancouver Realtors"
      description="North Vancouver offers the rare combination of mountain lifestyle and urban convenience. From the trails of Lynn Valley to the waterfront energy of Lower Lonsdale, North Shore realtors need a website that captures what makes this community unique."
      highlights={[
        'Premium lifestyle destination with mountains, waterfront, and nature at your door',
        'Strong demand from families seeking top rated schools and outdoor recreation',
        'Lower Lonsdale rapidly transforming with new condos and the Shipyards District',
        'High value detached homes in Edgemont, Upper Lonsdale, and Deep Cove',
        'Limited land supply drives consistent price appreciation across the North Shore',
      ]}
      whyHere={"North Vancouver buyers are choosing a lifestyle, not just a property. They research neighbourhoods deeply, comparing school catchments, commute times, and community amenities. A North Shore realtor who demonstrates deep local knowledge through their website with neighbourhood guides, market insights, and area specific content wins these clients. We build websites that showcase your North Vancouver expertise and convert visitors into consultations."}
      propertyTypes={[
        'Detached Homes',
        'Waterfront Properties',
        'Condos & Apartments',
        'Townhouses',
        'Luxury Homes',
        'Character Homes',
        'New Developments',
        'Acreage Properties',
      ]}
      nearbyAreas={[
        { name: 'Kitsilano', href: '/areas/kitsilano' },
        { name: 'Yaletown', href: '/areas/yaletown' },
        { name: 'East Vancouver', href: '/areas/east-vancouver' },
        { name: 'Burnaby', href: '/areas/burnaby' },
      ]}
      stats={[
        { value: '$2.3M', label: 'Avg. Detached Home Price' },
        { value: 'Top 3', label: 'School District in BC' },
        { value: '180+', label: 'Km of Trails' },
        { value: '92%', label: 'Buyer Satisfaction Score' },
      ]}
      heroImage={{
        src: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Dramatic mountain landscape with snow capped peaks and misty valleys at golden hour',
      }}
      sectionImage={{
        src: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Scenic mountain lake surrounded by lush evergreen forest reflecting the peaks',
      }}
    />
  )
}
