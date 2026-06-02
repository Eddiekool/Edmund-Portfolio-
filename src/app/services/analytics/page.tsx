import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
import { BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Analytics & Reporting | PerfectEdge Digitals',
  description: 'Real-time dashboards, GA4 setup, multi-touch attribution, and actionable monthly reports. See exactly what\'s working and where to invest next.',
}

export default function AnalyticsPage() {
  return (
    <ServicePageLayout
      badge="Analytics & Reporting"
      title={<>Know Exactly What's <span className="text-gradient">Driving Revenue</span></>}
      subtitle="Most businesses are flying blind. We build the measurement infrastructure that gives you complete visibility across every marketing channel — and turns data into confident decisions."
      icon={BarChart3}
      metrics={[
        { value: '100%', label: 'Tracking accuracy achieved' },
        { value: '48hrs', label: 'Dashboard delivery time' },
        { value: '6×', label: 'Faster reporting vs. manual' },
        { value: '2.3×', label: 'Avg. budget efficiency improvement' },
      ]}
      includes={[
        'GA4 setup & configuration',
        'Google Tag Manager implementation',
        'Conversion tracking (all channels)',
        'Custom Looker Studio dashboards',
        'Multi-touch attribution modelling',
        'E-commerce revenue tracking',
        'CRM integration & reporting',
        'Offline conversion import',
        'Monthly strategy reports',
        'Weekly performance alerts',
        'Channel ROI analysis',
        'Predictive analytics & forecasting',
      ]}
      steps={[
        { number: '01', title: 'Tracking Audit', desc: 'Identify every gap in your current tracking — broken pixels, missing events, double-counting.' },
        { number: '02', title: 'Data Infrastructure', desc: 'Set up clean tracking across all channels with proper attribution and data quality controls.' },
        { number: '03', title: 'Dashboard Build', desc: 'Custom Looker Studio dashboards showing the metrics that matter for your specific business goals.' },
        { number: '04', title: 'Insights & Action', desc: 'Monthly reports with clear recommendations — not just numbers, but what to do with them.' },
      ]}
      faqs={[
        { q: 'Do you work with GA4 or Universal Analytics?', a: 'We work exclusively with GA4. Universal Analytics is sunset. If you haven\'t migrated yet, we\'ll handle the full transition and make sure historical data is preserved where possible.' },
        { q: 'What dashboards do you build?', a: 'We use Looker Studio (Google Data Studio) to build real-time dashboards. Typical dashboards include an executive overview, channel performance, funnel analysis, and content/SEO performance.' },
        { q: 'Can you track offline conversions?', a: 'Yes. We import offline conversion data (CRM deals, phone calls, in-store visits) back into Google Ads and GA4 so you get accurate attribution across the full customer journey.' },
        { q: 'How do you handle multi-channel attribution?', a: 'We use data-driven attribution in GA4, supplemented by UTM parameter discipline and import of offline data. For clients needing more sophisticated models, we build custom attribution logic.' },
      ]}
      relatedHref="/services/seo"
      relatedLabel="Turn analytics insights into SEO strategy"
    />
  )
}
