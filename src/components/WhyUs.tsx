import { ShieldCheck, Rocket, BarChart2, HeadphonesIcon, RefreshCw, Target } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Results-First Approach',
    description: 'Every campaign is built around measurable KPIs — traffic, leads, revenue. No vanity metrics.',
  },
  {
    icon: Rocket,
    title: 'Fast Execution',
    description: 'We launch campaigns within 72 hours of onboarding. Speed is your competitive advantage.',
  },
  {
    icon: BarChart2,
    title: 'Transparent Reporting',
    description: 'Live dashboards and plain-English monthly reports so you always know exactly where your money goes.',
  },
  {
    icon: ShieldCheck,
    title: 'No Long-Term Contracts',
    description: 'Month-to-month billing. We earn your business every single month through performance.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Account Team',
    description: 'A real human team — not an agency that outsources your account — manages your growth.',
  },
  {
    icon: RefreshCw,
    title: 'Full-Funnel Strategy',
    description: 'We connect every channel — SEO, ads, email, social — into one unified growth engine.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-mid/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto section-padding relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">Why PerfectEdge</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              We Don't Just Run Campaigns — <span className="text-gradient">We Build Growth Systems</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Most agencies deliver reports. We deliver revenue. Our integrated approach means every dollar
              you invest works harder because all your channels amplify each other.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-mid hover:bg-brand-accent text-white font-semibold rounded-xl transition-all shadow-glow"
            >
              Book a Free Strategy Call
            </a>
          </div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="p-5 rounded-xl border-glow glass hover:bg-white/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-mid/20 flex items-center justify-center mb-4 group-hover:bg-brand-mid/40 transition-colors">
                  <r.icon className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="font-semibold text-white mb-1.5">{r.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
