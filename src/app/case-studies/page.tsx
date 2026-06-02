import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies | PerfectEdge Digitals',
  description: 'Real results from real clients. See how PerfectEdge Digitals drove measurable growth across SEO, PPC, Social Media, and Email for businesses worldwide.',
}

const cases = [
  {
    client: 'NovaTech Solutions',
    industry: 'B2B SaaS',
    initials: 'NT',
    services: ['SEO', 'Content Strategy'],
    challenge: 'NovaTech was generating 800 monthly organic visits from a domain with no SEO strategy. Competitors dominated every relevant keyword.',
    solution: 'Full technical audit, content silo architecture, keyword mapping across 3 buyer journey stages, and aggressive link acquisition through digital PR.',
    results: [
      { metric: '+2,900%', label: 'Organic traffic growth' },
      { metric: '#1', label: 'Ranking for primary keyword' },
      { metric: '9mo', label: 'Time to page one' },
      { metric: '240', label: 'Keywords in top 10' },
    ],
    quote: 'PerfectEdge took us from 800 monthly organic visits to over 24,000 in just 9 months. We\'re now the #1 result for our main keyword.',
    author: 'Sarah Chen, CEO',
    color: 'from-blue-500/15 to-transparent',
  },
  {
    client: 'FitLife Pro',
    industry: 'E-commerce (Health & Fitness)',
    initials: 'FL',
    services: ['PPC', 'Meta Ads'],
    challenge: 'Google Ads ROAS was stuck at 1.8× with a $15k/month budget. 60% of spend was going to irrelevant search terms.',
    solution: 'Complete campaign rebuild — negative keyword audit, intent-based campaign segmentation, landing page CRO, and transition to Target ROAS bidding after 50+ conversions.',
    results: [
      { metric: '6.4×', label: 'Final ROAS (from 1.8×)' },
      { metric: '$96k', label: 'Monthly revenue from £15k spend' },
      { metric: '-38%', label: 'Cost per acquisition' },
      { metric: '12wk', label: 'Time to full results' },
    ],
    quote: 'Our Google Ads ROAS went from 1.8× to 6.4× in 3 months. Best investment we made last year.',
    author: 'Marcus Williams, Founder',
    color: 'from-violet-500/15 to-transparent',
  },
  {
    client: 'EcoStore',
    industry: 'E-commerce (Sustainability)',
    initials: 'ES',
    services: ['Email Marketing', 'Automation'],
    challenge: 'EcoStore had a 45,000-subscriber email list generating £8k/month. No automation flows, 18% open rate, and high unsubscribe rate from irrelevant broadcast blasts.',
    solution: 'Full platform migration to Klaviyo, list segmentation by purchase history, 7 automation flows built (welcome, abandoned cart, post-purchase, win-back), and broadcast cadence optimisation.',
    results: [
      { metric: '£40k+', label: 'Monthly email revenue' },
      { metric: '47%', label: 'Average open rate' },
      { metric: '12%', label: 'Cart recovery rate' },
      { metric: '-62%', label: 'Unsubscribe rate' },
    ],
    quote: 'The email automation flows generate £40k+ every month on autopilot. Their deliverability expertise is unmatched.',
    author: 'Priya Patel, Marketing Director',
    color: 'from-teal-500/15 to-transparent',
  },
  {
    client: 'UrbanLux Hotels',
    industry: 'Hospitality',
    initials: 'UL',
    services: ['Social Media', 'Paid Social', 'PPC'],
    challenge: '85% of bookings came through OTA platforms (costing 18% commission). Direct booking rate was just 12%. Social media engagement was minimal.',
    solution: 'Instagram and TikTok content strategy showcasing rooms and experiences, Meta retargeting campaigns for website visitors, Google Hotel Ads setup, and direct booking incentive campaign.',
    results: [
      { metric: '+100%', label: 'Direct bookings in 6 months' },
      { metric: '38%', label: 'New direct booking rate' },
      { metric: '4.1M', label: 'Organic social impressions' },
      { metric: '£280k', label: 'Saved in OTA commissions annually' },
    ],
    quote: 'We doubled our direct bookings in 6 months. The reporting dashboards give us complete visibility into every channel.',
    author: 'James O\'Brien, COO',
    color: 'from-cyan-500/15 to-transparent',
  },
  {
    client: 'LegalEdge Africa',
    industry: 'Professional Services (Legal)',
    initials: 'LA',
    services: ['Web Design', 'SEO', 'PPC'],
    challenge: 'Existing website converted at 3.1%. Organic search was negligible. Google Ads was running but generating unqualified leads at high CPL.',
    solution: 'New conversion-focused landing page design, practice area content cluster for SEO, Google Ads restructure with legal-specific intent targeting and negative keywords.',
    results: [
      { metric: '9.2%', label: 'New landing page conversion rate' },
      { metric: '-58%', label: 'Cost per qualified lead' },
      { metric: '+180%', label: 'Organic enquiries in 6 months' },
      { metric: '4.8★', label: 'Google Reviews (from 3.9★)' },
    ],
    quote: 'The new landing page converted at 9.2% — triple what we had before. A genuine game-changer for our firm.',
    author: 'Amara Osei, Founder',
    color: 'from-indigo-500/15 to-transparent',
  },
  {
    client: 'CloudSync',
    industry: 'B2B SaaS',
    initials: 'CS',
    services: ['Full Suite', 'Analytics'],
    challenge: 'After two years with two different agencies, CloudSync had fragmented tracking, no attribution, and had seen revenue plateau despite increasing marketing spend.',
    solution: 'Full attribution audit and rebuild, GA4 + CRM integration, campaign restructure across all channels, content strategy for mid-funnel, and email nurture sequences for trial-to-paid conversion.',
    results: [
      { metric: '+180%', label: 'Revenue year-over-year' },
      { metric: '2.4×', label: 'Trial-to-paid conversion rate' },
      { metric: '-44%', label: 'Blended CAC' },
      { metric: '100%', label: 'Attribution accuracy' },
    ],
    quote: 'Within 60 days they identified what was broken across our entire funnel and fixed it. Revenue up 180% YoY.',
    author: 'David Thornton, VP Growth',
    color: 'from-sky-500/15 to-transparent',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        badge="Case Studies"
        title={<>Real Clients, <span className="text-gradient">Real Numbers</span></>}
        subtitle="We don't hide behind vague claims. Every result here is real, verifiable, and achieved for actual clients across six industries and three continents."
      />
      <main className="bg-brand-navy pb-24">
        <div className="max-w-7xl mx-auto section-padding pt-12 space-y-10">
          {cases.map((c, i) => (
            <div key={c.client} className={`glass border-glow rounded-2xl overflow-hidden bg-gradient-to-br ${c.color}`}>
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-mid/30 flex items-center justify-center text-white font-bold text-lg">{c.initials}</div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{c.client}</h2>
                      <p className="text-white/40 text-sm">{c.industry}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {c.services.map((s) => (
                      <span key={s} className="text-xs px-3 py-1 rounded-full bg-brand-mid/20 text-brand-light font-medium">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">The Challenge</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Our Solution</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {c.results.map((r) => (
                    <div key={r.label} className="bg-brand-dark/40 rounded-xl p-4 text-center">
                      <div className="text-2xl font-extrabold text-gradient mb-1">{r.metric}</div>
                      <div className="text-white/45 text-xs">{r.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="border-l-2 border-brand-accent/40 pl-5">
                  <p className="text-white/70 text-sm italic mb-2">"{c.quote}"</p>
                  <p className="text-white/40 text-xs font-medium">{c.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto section-padding mt-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-brand-accent" />
            <span className="text-brand-accent font-semibold text-sm">Want results like these?</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Let's Build Your Success Story</h2>
          <p className="text-white/55 mb-8">Book a free strategy call. We'll show you exactly what's possible for your business — with real projections, not guesses.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-mid hover:bg-brand-accent text-white font-semibold rounded-xl transition-all shadow-glow">
            Book a Free Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
