import type { Metadata } from 'next'
import AreaPageLayout from '@/components/AreaPageLayout'

export const metadata: Metadata = {
  title: 'Burnaby Realtor Websites | Web Design for Burnaby Agents',
  description:
    'Custom websites for Burnaby realtors. Capture buyer and seller leads across Metrotown, Brentwood, Burnaby Heights, and Deer Lake with a website designed for the Burnaby real estate market.',
  keywords: [
    'Burnaby realtor website',
    'Burnaby real estate agent website',
    'Metrotown realtor',
    'Brentwood Burnaby real estate',
    'Burnaby Heights realtor website',
    'web design Burnaby realtor',
  ],
  alternates: {
    canonical: 'https://cloverspace.studio/areas/burnaby',
  },
}

export default function BurnabyPage() {
  return (
    <AreaPageLayout
      name="Burnaby"
      title="Websites Built for Burnaby Realtors"
      description="Burnaby is one of the fastest growing cities in the Lower Mainland, with massive development around Metrotown and Brentwood transforming the skyline. Burnaby realtors need a modern website that captures the wave of buyers entering this market."
      highlights={[
        'Rapidly growing city with major development hubs at Metrotown and Brentwood',
        'More affordable entry point than Vancouver proper, attracting first time buyers',
        'Excellent SkyTrain connectivity making Burnaby a commuter favourite',
        'Strong pre sale market with dozens of new condo developments launching annually',
        'Diverse neighbourhoods from Burnaby Heights to Deer Lake to Edmonds',
      ]}
      whyHere={"Burnaby\u2019s real estate market is booming with new developments and a steady stream of buyers priced out of Vancouver proper. These buyers start their search on Google, and if your website doesn\u2019t appear when they search for \u201CBurnaby realtor\u201D or \u201Ccondos for sale in Metrotown,\u201D you\u2019re losing business to agents who\u2019ve invested in their online presence. We build websites that make Burnaby realtors the obvious choice."}
      propertyTypes={[
        'Pre Sale Condos',
        'High Rise Condos',
        'Townhouses',
        'Detached Homes',
        'Apartments',
        'Duplexes',
        'New Developments',
        'Investment Properties',
      ]}
      nearbyAreas={[
        { name: 'East Vancouver', href: '/areas/east-vancouver' },
        { name: 'North Vancouver', href: '/areas/north-vancouver' },
        { name: 'Kitsilano', href: '/areas/kitsilano' },
        { name: 'Yaletown', href: '/areas/yaletown' },
      ]}
      stats={[
        { value: '$780K', label: 'Avg. Condo Price' },
        { value: '15+', label: 'New Developments/Year' },
        { value: '250K+', label: 'Population & Growing' },
        { value: '3', label: 'SkyTrain Lines Connected' },
      ]}
      heroImage={{
        src: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Dense urban skyline of modern towers and condos at golden hour',
      }}
      sectionImage={{
        src: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Aerial view of a vibrant urban neighbourhood with parks and residential streets',
      }}
    />
  )
}
