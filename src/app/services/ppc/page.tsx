import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
import { MousePointerClick } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PPC Advertising | PerfectEdge Digitals',
  description: 'Maximise ROAS with expert Google, Meta, and LinkedIn ad management. We\'ve managed $50M+ in ad spend with an average 4.2× ROAS for our clients.',
}

export default function PPCPage() {
  return (
    <ServicePageLayout
      badge="Pay-Per-Click Advertising"
      title={<>Turn Ad Spend Into <span className="text-gradient">Predictable Revenue</span></>}
      subtitle="Data-driven PPC campaigns across Google, Meta, LinkedIn, and TikTok. We build, manage, and optimise campaigns that consistently deliver 3–6× ROAS — and we have the receipts to prove it."
      icon={MousePointerClick}
      metrics={[
        { value: '4.2×', label: 'Average client ROAS' },
        { value: '$50M+', label: 'Ad spend managed' },
        { value: '72hrs', label: 'Campaign launch time' },
        { value: '-38%', label: 'Avg. CPA reduction' },
      ]}
      includes={[
        'Google Search & Shopping Ads',
        'Google Performance Max',
        'Meta (Facebook & Instagram) Ads',
        'LinkedIn Ads (B2B)',
        'TikTok Ads',
        'YouTube & Display Ads',
        'Retargeting & audience strategy',
        'Landing page CRO recommendations',
        'Conversion tracking & attribution',
        'A/B testing (copy, creative, audiences)',
        'Negative keyword management',
        'Weekly performance reporting',
      ]}
      steps={[
        { number: '01', title: 'Account Audit', desc: 'We identify exactly where your budget is being wasted and where the biggest ROAS opportunities are.' },
        { number: '02', title: 'Campaign Blueprint', desc: 'Restructure campaigns by intent, build creative briefs, set up proper conversion tracking.' },
        { number: '03', title: 'Launch & Learn', desc: 'Go live with new campaigns, gather 30 days of clean data, and begin systematic optimisation.' },
        { number: '04', title: 'Scale Winners', desc: 'Double down on what works, cut what doesn\'t, and expand to new audiences and channels.' },
      ]}
      faqs={[
        { q: 'What\'s the minimum ad budget you work with?', a: 'Our Starter plan works with ad budgets from $1,000/month. For optimal Smart Bidding performance on Google, we recommend at least $3,000–5,000/month in ad spend.' },
        { q: 'Do you charge a percentage of ad spend?', a: 'No. Our management fee is a flat monthly retainer. Your ad budget goes 100% to the platforms, not to us. This aligns our incentives with your performance, not your spend.' },
        { q: 'How quickly will I see results?', a: 'Most clients see improved performance within the first 30 days as we eliminate wasted spend. Full optimisation typically takes 60–90 days as Smart Bidding algorithms learn from your conversion data.' },
        { q: 'Which platforms do you specialise in?', a: 'Google Ads is our primary expertise, followed closely by Meta (Facebook/Instagram). We also run LinkedIn Ads for B2B clients and TikTok Ads for consumer brands.' },
      ]}
      relatedHref="/services/analytics"
      relatedLabel="Measure every click with our Analytics service"
    />
  )
}
