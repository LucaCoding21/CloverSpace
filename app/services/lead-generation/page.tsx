import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Real Estate Lead Generation Vancouver | Realtor Leads',
  description:
    'Generate qualified buyer and seller leads for your Vancouver real estate business. Our conversion focused strategies turn website visitors into booked appointments across Greater Vancouver.',
  keywords: [
    'real estate lead generation Vancouver',
    'Vancouver realtor leads',
    'buyer leads Vancouver real estate',
    'seller leads Vancouver BC',
    'real estate conversion optimization',
    'realtor lead capture Vancouver',
  ],
  alternates: {
    canonical: 'https://cloverspace.studio/services/lead-generation',
  },
}

const features = [
  {
    title: 'Conversion Optimized Landing Pages',
    description:
      'Purpose built pages for each campaign, whether you\'re targeting first time Vancouver buyers, luxury Westside sellers, or condo investors in downtown.',
  },
  {
    title: 'Strategic CTA Placement',
    description:
      'Calls to action placed at the exact moments visitors are most likely to engage. Every button, form, and popup is tested and optimized for the Vancouver market.',
  },
  {
    title: 'Home Valuation Funnels',
    description:
      'Capture seller leads with instant home valuation tools. Vancouver homeowners enter their address and you get a qualified lead with their property details.',
  },
  {
    title: 'Property Alert Signups',
    description:
      'Let Vancouver buyers subscribe to listing alerts for their preferred neighbourhoods. You build an email list of engaged prospects searching in your service area.',
  },
  {
    title: 'Retargeting & Follow Up',
    description:
      'Most visitors don\'t convert on the first visit. We set up retargeting campaigns that keep you top of mind with Vancouver homebuyers who visited your site.',
  },
  {
    title: 'Lead Tracking & CRM Integration',
    description:
      'Every lead is tracked from first click to booked appointment. We integrate with your CRM so you see exactly which channels drive your best Vancouver clients.',
  },
]

const stats = [
  { value: '5x', label: 'More Leads on Average' },
  { value: '35%', label: 'Conversion Rate' },
  { value: '24/7', label: 'Lead Capture Active' },
  { value: '<$15', label: 'Average Cost Per Lead' },
]

export default function LeadGenerationPage() {
  return (
    <ServicePageLayout
      label="Lead Generation"
      title="Turn Vancouver Website Visitors Into Booked Appointments"
      description="Stop chasing cold leads. We build conversion systems that turn your website into an automated pipeline, capturing qualified buyers and sellers across Greater Vancouver while you focus on closing deals."
      features={features}
      stats={stats}
      heroImage={{
        src: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Vast mountain landscape with dramatic clouds and mist rolling through alpine valleys',
      }}
      sectionImage={{
        src: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Urban waterfront cityscape at twilight with warm and cool tones across the skyline',
      }}

    />
  )
}
