import type { Metadata } from 'next'
import AreaPageLayout from '@/components/AreaPageLayout'

export const metadata: Metadata = {
  title: 'Yaletown Realtor Websites | Web Design for Downtown Agents',
  description:
    'Custom websites for Yaletown and downtown Vancouver realtors. Showcase luxury condos and urban listings with a site designed to convert high intent buyers in Vancouver\'s most vibrant urban neighbourhood.',
  keywords: [
    'Yaletown realtor website',
    'downtown Vancouver real estate agent',
    'Yaletown condo realtor',
    'Vancouver downtown realtor website',
    'luxury condo website Vancouver',
  ],
  alternates: {
    canonical: 'https://cloverspace.org/areas/yaletown',
  },
}

export default function YaletownPage() {
  return (
    <AreaPageLayout
      name="Yaletown"
      title="Websites Built for Yaletown & Downtown Realtors"
      description="Downtown Vancouver and Yaletown are driven by condo sales, investor interest, and first time buyers entering the market. Your website needs to showcase urban luxury and convert the high intent traffic this market generates."
      highlights={[
        'Vancouver\'s premier urban neighbourhood with the highest condo density',
        'Strong demand from young professionals, investors, and international buyers',
        'Walkable to restaurants, seawall, transit, and entertainment',
        'High search volume for condo specific keywords like "Yaletown condos for sale"',
        'Competitive market where online presence directly impacts lead flow',
      ]}
      whyHere={"Yaletown buyers search online first. They filter by price, building, and neighbourhood before ever contacting an agent. If your website doesn\u2019t showcase your downtown expertise with professional listings, virtual tours, and building specific knowledge, you\u2019re losing leads to competitors who do. We build websites that position you as the go to downtown Vancouver and Yaletown realtor."}
      propertyTypes={[
        'Luxury Condos',
        'High Rise Apartments',
        'Loft Conversions',
        'Penthouse Suites',
        'Pre Sale Condos',
        'Townhouses',
        'Live Work Units',
        'Investment Properties',
      ]}
      nearbyAreas={[
        { name: 'Kitsilano', href: '/areas/kitsilano' },
        { name: 'East Vancouver', href: '/areas/east-vancouver' },
        { name: 'North Vancouver', href: '/areas/north-vancouver' },
        { name: 'Burnaby', href: '/areas/burnaby' },
      ]}
      stats={[
        { value: '$850K', label: 'Avg. Condo Price' },
        { value: '2,500+', label: 'Condo Units Sold/Year' },
        { value: '#1', label: 'Urban Demand in BC' },
        { value: '95%', label: 'Transit Score' },
      ]}
      heroImage={{
        src: 'https://images.pexels.com/photos/2382868/pexels-photo-2382868.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Stunning downtown Vancouver skyline with modern high-rise buildings reflecting sunset colours',
      }}
      sectionImage={{
        src: 'https://images.pexels.com/photos/2096578/pexels-photo-2096578.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Moody urban waterfront with reflections of city lights on calm water at night',
      }}
    />
  )
}
