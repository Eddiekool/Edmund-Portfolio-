import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { Search, MousePointerClick, Share2, Mail, Globe, BarChart3, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | PerfectEdge Digitals',
  description: 'Full-suite digital marketing services: SEO, PPC, Social Media, Email Marketing, Web Design, and Analytics. All channels, one team, one goal.',
}

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimisation',
    slug: 'seo',
    description: 'Dominate Google rankings with technical SEO, content strategy, and high-authority link building that drives compounding organic traffic.',
    highlights: ['Technical SEO Audit', 'Keyword Research', 'Link Building', 'Content Strategy', 'Core Web Vitals'],
    metric: '340% avg. organic traffic growth',
  },
  {
    icon: MousePointerClick,
    title: 'PPC Advertising',
    slug: 'ppc',
    description: 'Precision-targeted campaigns across Google, Meta, LinkedIn and TikTok. Data-driven bidding and creative testing that maximises ROAS.',
    highlights: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Retargeting', 'Conversion Tracking'],
    metric: '4.2× average client ROAS',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    slug: 'social-media',
    description: 'Build engaged communities and convert followers into customers across all major platforms with compelling, on-brand content.',
    highlights: ['Content Creation', 'Community Management', 'Reels & TikTok', 'Influencer Outreach', 'Analytics'],
    metric: '5.8% avg. engagement rate',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    slug: 'email-marketing',
    description: 'Automated nurture sequences and broadcast campaigns delivering an average $42 ROI for every $1 spent — your highest-leverage channel.',
    highlights: ['Automation Flows', 'Segmentation', 'A/B Testing', 'Deliverability', 'Lifecycle Marketing'],
    metric: '$2M+ monthly email revenue generated',
  },
  {
    icon: Globe,
    title: 'Web Design & Development',
    slug: 'web-design',
    description: 'High-converting landing pages and full websites built for speed, mobile-first UX, and SEO. Designed to turn visitors into paying customers.',
    highlights: ['Landing Pages', 'E-commerce', 'UI/UX Design', 'CRO', 'Page Speed Optimisation'],
    metric: '85% avg. conversion rate improvement',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    slug: 'analytics',
    description: 'Real-time dashboards and monthly strategy reports that give you full visibility into every marketing channel and confident next steps.',
    highlights: ['GA4 Setup', 'Custom Dashboards', 'Attribution', 'Monthly Reports', 'Predictive Analytics'],
    metric: '100% tracking accuracy',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        badge="Our Services"
        title={<>One Team. <span className="text-gradient">Every Channel.</span> Real Results.</>}
        subtitle="Six interconnected services that work together as a unified growth engine. Pick one or let us run the full suite — the choice is yours."
      />
      <main className="bg-brand-navy pb-24">
        <div className="max-w-7xl mx-auto section-padding pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.slug} className="glass border-glow rounded-2xl p-8 hover:border-brand-accent/40 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-mid/20 flex items-center justify-center group-hover:bg-brand-mid/40 transition-colors">
                    <s.icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <span className="text-xs text-brand-glow font-medium px-3 py-1 rounded-full bg-brand-mid/20">{s.metric}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{s.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.highlights.map((h) => (
                    <span key={h} className="text-xs px-2.5 py-1 rounded-full bg-brand-dark/60 text-white/60 border border-white/10">{h}</span>
                  ))}
                </div>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-brand-accent hover:text-brand-light font-semibold transition-colors group-hover:gap-3"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center glass border-glow rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-3">Not Sure Where to Start?</h2>
            <p className="text-white/55 mb-8 max-w-xl mx-auto">Book a free 30-minute strategy call and we'll identify the highest-impact services for your specific goals and budget.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-mid hover:bg-brand-accent text-white font-semibold rounded-xl transition-all shadow-glow">
              Book a Free Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
