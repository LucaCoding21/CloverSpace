import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Custom Realtor Website Design in Vancouver',
  description:
    'Get a stunning, mobile first website designed specifically for Vancouver realtors. Capture buyer and seller leads 24/7 with a site built to convert across Greater Vancouver, Burnaby, Richmond, and the Lower Mainland.',
  keywords: [
    'Vancouver realtor website design',
    'custom real estate website Vancouver',
    'realtor web design BC',
    'Vancouver real estate agent website',
    'mobile first realtor website',
    'real estate website developer Vancouver',
  ],
  alternates: {
    canonical: 'https://cloverspace.org/services/website-design',
  },
}

const features = [
  {
    title: 'Custom Design, Not Templates',
    description:
      'Every Vancouver realtor deserves a unique online presence. We design from scratch to match your personal brand, brokerage, and the neighbourhoods you serve.',
  },
  {
    title: 'Mobile First for Vancouver Buyers',
    description:
      'Over 70% of Vancouver homebuyers browse on their phones. Your site will look flawless and load fast on every device, from Kitsilano coffee shops to open houses in East Van.',
  },
  {
    title: 'MLS & IDX Integration',
    description:
      'Showcase your active listings directly on your website with seamless MLS and IDX integration. Keep buyers on your site instead of losing them to Realtor.ca.',
  },
  {
    title: 'Lead Capture Built In',
    description:
      'Strategic contact forms, CTA buttons, and property inquiry forms are woven into every page to turn casual browsers into qualified leads.',
  },
  {
    title: 'Lightning Fast Performance',
    description:
      'Built with modern technology for blazing fast load times. Google rewards fast sites with higher rankings, and that\'s critical in Vancouver\'s competitive real estate market.',
  },
  {
    title: 'Ongoing Support & Updates',
    description:
      'Your website stays current with regular updates, security patches, and content changes. We handle the tech so you can focus on closing deals.',
  },
]

const stats = [
  { value: '200+', label: 'Websites Launched' },
  { value: '3x', label: 'More Leads on Average' },
  { value: '<1s', label: 'Page Load Time' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
]

export default function WebsiteDesignPage() {
  return (
    <ServicePageLayout
      label="Custom Website Design"
      title="A Vancouver Realtor Website That Actually Converts"
      description="In Vancouver's crowded real estate market, a premium website isn't optional. We design custom sites that capture buyer and seller leads around the clock. No templates. Just a digital presence that builds instant credibility."
      features={features}
      stats={stats}
      heroImage={{
        src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Dramatic modern glass architecture reflecting city lights at dusk',
      }}
      sectionImage={{
        src: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        alt: 'Modern dark building facade with sharp geometric angles and dramatic shadows',
      }}

    />
  )
}
