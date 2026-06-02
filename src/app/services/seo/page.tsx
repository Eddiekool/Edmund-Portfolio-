import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
import { Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEO Services | PerfectEdge Digitals',
  description: 'Dominate Google rankings with technical SEO, content strategy, and high-authority link building. Proven results — average 340% organic traffic growth in 12 months.',
}

export default function SEOPage() {
  return (
    <ServicePageLayout
      badge="Search Engine Optimisation"
      title={<>Rank Higher. <span className="text-gradient">Grow Faster.</span></>}
      subtitle="We build sustainable organic growth engines — technical SEO, content strategy, and link acquisition that compound over time and deliver traffic you don't have to keep paying for."
      icon={Search}
      metrics={[
        { value: '340%', label: 'Avg. organic traffic growth' },
        { value: '9mo', label: 'Avg. time to page one' },
        { value: '2,000+', label: 'Keywords ranked #1' },
        { value: '98%', label: 'Client retention rate' },
      ]}
      includes={[
        'Full technical SEO audit',
        'Keyword research & mapping',
        'On-page content optimisation',
        'Core Web Vitals improvement',
        'Schema markup implementation',
        'High-authority link building',
        'Content strategy & calendar',
        'Competitor gap analysis',
        'Monthly rank tracking',
        'Google Search Console management',
        'Internal linking strategy',
        'Quarterly strategy reviews',
      ]}
      steps={[
        { number: '01', title: 'Deep Audit', desc: 'We analyse every technical, on-page, and off-page factor affecting your rankings.' },
        { number: '02', title: 'Strategy Build', desc: 'Custom keyword map, content plan, and link-building roadmap tailored to your goals.' },
        { number: '03', title: 'Execute', desc: 'Technical fixes, content creation, and link outreach running in parallel from week one.' },
        { number: '04', title: 'Optimise & Scale', desc: 'Monthly reporting, rank tracking, and continuous refinement to compound your growth.' },
      ]}
      faqs={[
        { q: 'How long does SEO take to show results?', a: 'Most clients see meaningful ranking improvements within 3–6 months and significant traffic growth by month 9. SEO compounds — the longer you invest, the higher the returns.' },
        { q: 'Do you guarantee first-page rankings?', a: 'No ethical SEO agency can guarantee specific rankings — Google\'s algorithm changes constantly. We do guarantee measurable improvement in organic traffic and keyword positions, backed by our track record.' },
        { q: 'How does link building work?', a: 'We earn links through digital PR, original research, broken link outreach, and resource placements. All links are from real, relevant, high-authority websites — no PBNs or black-hat tactics.' },
        { q: 'Will you create the content or do we?', a: 'Both options are available. Most clients use our content team for efficiency. We handle keyword research, briefing, writing, and optimisation. You approve before publication.' },
      ]}
      relatedHref="/services/analytics"
      relatedLabel="Track your SEO growth with our Analytics service"
    />
  )
}
