import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
  typescript: true,
})

export interface PricingPlan {
  id: string
  name: string
  price: number
  interval: 'month' | 'year'
  stripePriceId?: string
  features: string[]
  popular?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 499,
    interval: 'month',
    features: [
      'SEO Audit & On-Page Optimization',
      'Google Ads Management (up to $1k spend)',
      'Social Media (2 platforms, 12 posts/mo)',
      'Monthly Email Campaign (1 blast)',
      'Basic Analytics Dashboard',
      'Dedicated Account Manager',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 1299,
    interval: 'month',
    popular: true,
    features: [
      'Full SEO Strategy + Link Building',
      'Google & Meta Ads (up to $5k spend)',
      'Social Media (4 platforms, 30 posts/mo)',
      'Email Automation Flows (unlimited)',
      'Landing Page Design (2/mo)',
      'Advanced Analytics & Reports',
      'Priority Support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 3499,
    interval: 'month',
    features: [
      'Enterprise SEO + Content Strategy',
      'Multi-channel Ads (unlimited spend)',
      'Full Social Media Management',
      'Email & SMS Marketing Automation',
      'Custom Web Design & Development',
      'Real-time Analytics & BI Reporting',
      '24/7 Dedicated Team',
      'Monthly Strategy Sessions',
    ],
  },
]
