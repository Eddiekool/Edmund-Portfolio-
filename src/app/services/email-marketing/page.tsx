import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Email Marketing | PerfectEdge Digitals',
  description: 'Email automation, lifecycle campaigns, and broadcast strategies that generate $42 for every $1 spent. Build a revenue engine that runs while you sleep.',
}

export default function EmailMarketingPage() {
  return (
    <ServicePageLayout
      badge="Email Marketing"
      title={<>Revenue That Runs <span className="text-gradient">While You Sleep</span></>}
      subtitle="Email delivers the highest ROI of any marketing channel — $42 for every $1 spent. We build the automation flows, nurture sequences, and broadcast campaigns that turn your email list into a reliable revenue machine."
      icon={Mail}
      metrics={[
        { value: '$42', label: 'ROI per $1 spent (industry avg)' },
        { value: '47%', label: 'Avg. open rate we achieve' },
        { value: '$2M+', label: 'Monthly email revenue generated' },
        { value: '99%', label: 'Deliverability rate' },
      ]}
      includes={[
        'Email platform setup & migration',
        'Welcome & onboarding sequences',
        'Abandoned cart recovery flows',
        'Post-purchase nurture series',
        'Lead nurture automation (B2B)',
        'Win-back & re-engagement campaigns',
        'Broadcast newsletter campaigns',
        'Segmentation & personalisation',
        'A/B testing (subject lines, content, CTA)',
        'Deliverability monitoring & repair',
        'List hygiene & management',
        'Monthly performance analytics',
      ]}
      steps={[
        { number: '01', title: 'Platform Audit', desc: 'Review your current ESP, list health, deliverability, and existing automations.' },
        { number: '02', title: 'Flow Architecture', desc: 'Map the full lifecycle — welcome, nurture, purchase, retention — and design the automation logic.' },
        { number: '03', title: 'Write & Build', desc: 'Our copywriters craft every email. Designers build the templates. Developers set up the flows.' },
        { number: '04', title: 'Test & Optimise', desc: 'A/B test continuously, monitor deliverability daily, and improve performance every month.' },
      ]}
      faqs={[
        { q: 'Which email platforms do you work with?', a: 'We work with Klaviyo, Mailchimp, ActiveCampaign, HubSpot, ConvertKit, and most major ESPs. We\'ll recommend the best platform for your use case if you\'re starting fresh.' },
        { q: 'How do you handle deliverability?', a: 'We set up SPF, DKIM, and DMARC records, warm up new sender IPs, maintain list hygiene, and monitor spam rates daily. Our clients average 99%+ deliverability.' },
        { q: 'Do I need a large list to get value?', a: 'No. We\'ve driven significant revenue for clients with lists as small as 1,000 subscribers by focusing on segmentation and automation quality. Volume matters less than engagement and relevance.' },
        { q: 'How quickly can you launch email campaigns?', a: 'We can launch basic broadcast campaigns within 2 weeks. Full automation suite build-out typically takes 4–6 weeks for a complete implementation.' },
      ]}
      relatedHref="/services/seo"
      relatedLabel="Grow your list with organic SEO traffic"
    />
  )
}
