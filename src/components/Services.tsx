import { Search, MousePointerClick, Share2, Mail, Globe, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimisation',
    description:
      'Dominate Google rankings with technical SEO, content strategy, and high-authority link building that drives organic traffic month over month.',
    highlights: ['Keyword Research', 'On-page Optimisation', 'Link Building', 'Core Web Vitals'],
    color: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
  },
  {
    icon: MousePointerClick,
    title: 'Pay-Per-Click Advertising',
    description:
      'Maximise ROAS with precision-targeted Google, Meta, and LinkedIn ad campaigns. Data-driven bidding, creative testing, and continuous optimisation.',
    highlights: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Conversion Tracking'],
    color: 'from-indigo-500/20 to-indigo-600/5',
    iconColor: 'text-indigo-400',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description:
      'Build engaged communities and convert followers into customers across Instagram, TikTok, LinkedIn, X, and Facebook with compelling content.',
    highlights: ['Content Creation', 'Community Management', 'Influencer Outreach', 'Analytics'],
    color: 'from-violet-500/20 to-violet-600/5',
    iconColor: 'text-violet-400',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description:
      'Automated nurture sequences, broadcast campaigns, and lifecycle emails that deliver an average $42 ROI for every $1 spent.',
    highlights: ['Automation Flows', 'Segmentation', 'A/B Testing', 'Deliverability'],
    color: 'from-sky-500/20 to-sky-600/5',
    iconColor: 'text-sky-400',
  },
  {
    icon: Globe,
    title: 'Web Design & Development',
    description:
      'High-converting landing pages and full websites built for speed, mobile-first UX, and SEO — designed to turn visitors into paying customers.',
    highlights: ['Landing Pages', 'E-commerce', 'UI/UX Design', 'CRO'],
    color: 'from-cyan-500/20 to-cyan-600/5',
    iconColor: 'text-cyan-400',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description:
      'Real-time dashboards and monthly strategy reports that give you full visibility into what is working and where to double down.',
    highlights: ['GA4 Setup', 'Custom Dashboards', 'Attribution', 'Monthly Reports'],
    color: 'from-teal-500/20 to-teal-600/5',
    iconColor: 'text-teal-400',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-gradient">Dominate Online</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Six interconnected services working together as one cohesive growth engine for your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group relative rounded-2xl border-glow p-6 bg-gradient-to-br ${s.color} hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center mb-5 ${s.iconColor}`}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs px-2.5 py-1 rounded-full bg-brand-dark/60 text-white/60 border border-white/10"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
