import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
import { Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Design & Development | PerfectEdge Digitals',
  description: 'High-converting websites and landing pages built for speed, mobile-first UX, and SEO. Average 85% CRO improvement across our client portfolio.',
}

export default function WebDesignPage() {
  return (
    <ServicePageLayout
      badge="Web Design & Development"
      title={<>Websites That <span className="text-gradient">Convert Visitors</span> Into Buyers</>}
      subtitle="We design and build websites that don't just look great — they perform. Every pixel is intentional, every CTA is tested, and every page is engineered to turn traffic into revenue."
      icon={Globe}
      metrics={[
        { value: '85%', label: 'Avg. conversion rate improvement' },
        { value: '400+', label: 'Landing pages built' },
        { value: '< 2s', label: 'Load time guaranteed' },
        { value: '9.2%', label: 'Highest client landing page CVR' },
      ]}
      includes={[
        'Full website design & development',
        'High-converting landing pages',
        'E-commerce store design',
        'Mobile-first responsive design',
        'Page speed & Core Web Vitals optimisation',
        'SEO-ready architecture',
        'CRO audits & A/B test implementation',
        'Brand identity & design system',
        'UI/UX wireframing & prototyping',
        'CMS integration (WordPress, Webflow)',
        'Analytics & tracking setup',
        '3 months post-launch support',
      ]}
      steps={[
        { number: '01', title: 'Discovery', desc: 'We learn your business, audience, competitors, and conversion goals before touching a design tool.' },
        { number: '02', title: 'Design', desc: 'Wireframes, then high-fidelity mockups. You review and approve at each stage before we build.' },
        { number: '03', title: 'Build', desc: 'Pixel-perfect development with clean code, fast load times, and full mobile responsiveness.' },
        { number: '04', title: 'Launch & Optimise', desc: 'Go live with tracking configured. We monitor and CRO-test for 3 months post-launch.' },
      ]}
      faqs={[
        { q: 'How long does a website project take?', a: 'Landing pages take 2–3 weeks. Full websites typically take 6–10 weeks from kickoff to launch, depending on scope and how quickly you provide feedback.' },
        { q: 'What platform will my site be built on?', a: 'We build on Next.js (for custom/performance-critical sites), Webflow (for content-heavy or client-managed sites), and WordPress (for specific requirements). We recommend the best tool for your needs.' },
        { q: 'Will my site rank well on Google?', a: 'Yes — SEO best practices are built into every project. We set up clean URL structures, schema markup, page speed optimisation, and Core Web Vitals compliance as standard.' },
        { q: 'Do you offer ongoing website maintenance?', a: 'All projects include 3 months of post-launch support. Ongoing maintenance retainers are available separately or included in our Growth and Enterprise marketing plans.' },
      ]}
      relatedHref="/services/ppc"
      relatedLabel="Drive qualified traffic with PPC Advertising"
    />
  )
}
