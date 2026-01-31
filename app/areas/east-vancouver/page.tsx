import type { Metadata } from 'next'
import AreaPageLayout from '@/components/AreaPageLayout'

export const metadata: Metadata = {
  title: 'East Vancouver Realtor Websites | Web Design for East Van Agents',
  description:
    'Custom websites for East Vancouver realtors. Serve buyers and sellers across Mount Pleasant, Commercial Drive, Hastings Sunrise, and Kensington Cedar Cottage with a website built for the East Van market.',
  keywords: [
    'East Vancouver realtor website',
    'East Van real estate agent',
    'Mount Pleasant realtor Vancouver',
    'Commercial Drive real estate',
    'Hastings Sunrise realtor website',
    'Kensington Cedar Cottage realtor',
  ],
  alternates: {
    canonical: 'https://cloverspace.studio/areas/east-vancouver',
  },
}

export default function EastVancouverPage() {
  return (
    <AreaPageLayout
      name="East Vancouver"
      title="Websites Built for East Vancouver Realtors"
      description="East Vancouver is where community meets opportunity. From the vibrant arts scene on Commercial Drive to the family friendly streets of Kensington Cedar Cottage, East Van realtors need a website that speaks to the diverse buyers drawn to this side of the city."
      highlights={[
        'Rapidly appreciating neighbourhoods attracting first time buyers and investors',
        'Diverse community spanning Mount Pleasant, Commercial Drive, Hastings Sunrise, and Renfrew',
        'Growing demand for character homes, laneway houses, and townhomes',
        'One of the most searched areas by first time Vancouver homebuyers',
        'Strong rental market creating investor interest across East Van',
      ]}
      whyHere={"East Vancouver buyers are often first time homeowners researching extensively online. They compare dozens of listings and agents before making contact. A professional website that highlights your East Van expertise in specific neighbourhoods, pricing trends, and community knowledge is what converts browsers into clients. We build websites that establish you as the local East Vancouver expert."}
      propertyTypes={[
        'Character Homes',
        'Laneway Houses',
        'Condos & Apartments',
        'Townhouses',
        'Duplexes',
        'Heritage Homes',
        'New Construction',
        'Multi Family Properties',
      ]}
      nearbyAreas={[
        { name: 'Kitsilano', href: '/areas/kitsilano' },
        { name: 'Yaletown', href: '/areas/yaletown' },
        { name: 'Burnaby', href: '/areas/burnaby' },
        { name: 'North Vancouver', href: '/areas/north-vancouver' },
      ]}
      stats={[
        { value: '$1.5M', label: 'Avg. Home Price' },
        { value: '12%', label: 'Annual Appreciation' },
        { value: '6', label: 'Distinct Neighbourhoods' },
        { value: '75%', label: 'First Time Buyer Market' },
      ]}
      heroImage={{
        src: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Vibrant urban neighbourhood streetscape with colourful buildings and community atmosphere',
      }}
      sectionImage={{
        src: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Charming residential neighbourhood with tree-lined streets and character homes',
      }}
    />
  )
}
