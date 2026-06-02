import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Lock, BarChart2, FileText, MessageSquare, Settings, TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Client Dashboard | PerfectEdge Digitals',
  description: 'Access your PerfectEdge Digitals client dashboard — reports, campaign performance, and account management.',
}

const dashboardFeatures = [
  { icon: BarChart2, title: 'Live Campaign Analytics', desc: 'Real-time performance across all your channels — SEO, PPC, social, and email — in one view.' },
  { icon: FileText, title: 'Monthly Reports', desc: 'Plain-English reports delivered automatically with key insights and recommended next actions.' },
  { icon: TrendingUp, title: 'Goal Tracking', desc: 'Set revenue, traffic, and conversion goals. Track progress toward them every day.' },
  { icon: MessageSquare, title: 'Direct Comms', desc: 'Message your account team directly. Average response time under 2 hours.' },
  { icon: DollarSign, title: 'Budget & Billing', desc: 'View ad spend, manage your subscription, and download invoices anytime.' },
  { icon: Settings, title: 'Account Management', desc: 'Manage users, integrations, and account settings from one place.' },
]

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-navy pt-24">
        {/* Login gate */}
        <section className="py-24 max-w-lg mx-auto section-padding text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-mid/20 border-glow mb-8">
            <Lock className="w-8 h-8 text-brand-accent" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Client Portal</h1>
          <p className="text-white/55 mb-8">Sign in to access your campaigns, reports, and account team.</p>

          {/* Login form placeholder */}
          <div className="glass border-glow rounded-2xl p-8 mb-6 text-left">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-brand-dark border border-white/10 focus:border-brand-accent rounded-xl text-white text-sm placeholder:text-white/30 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-brand-dark border border-white/10 focus:border-brand-accent rounded-xl text-white text-sm placeholder:text-white/30 outline-none transition-colors"
                />
              </div>
              <button className="w-full py-3.5 bg-brand-mid hover:bg-brand-accent text-white font-semibold rounded-xl transition-all shadow-glow">
                Sign In
              </button>
            </div>
            <p className="text-center text-white/30 text-xs mt-5">
              Forgot your password?{' '}
              <a href="mailto:support@perfectedgedigitals.com" className="text-brand-accent hover:text-brand-light transition-colors">
                Contact support
              </a>
            </p>
          </div>

          <p className="text-white/30 text-sm">
            Not a client yet?{' '}
            <Link href="/#pricing" className="text-brand-accent hover:text-brand-light transition-colors font-medium">
              View our plans
            </Link>
          </p>
        </section>

        {/* Dashboard preview */}
        <section className="py-20 bg-brand-dark">
          <div className="max-w-7xl mx-auto section-padding">
            <div className="text-center mb-14">
              <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">Client Portal Features</p>
              <h2 className="text-3xl font-bold">Everything You Need, <span className="text-gradient">All in One Place</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dashboardFeatures.map((f) => (
                <div key={f.title} className="glass border-glow rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-lg bg-brand-mid/20 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Dashboard mockup preview */}
            <div className="mt-16 glass border-glow rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 bg-brand-dark/60 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-white/30 text-xs ml-3">dashboard.perfectedgedigitals.com</span>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Organic Traffic', value: '24,892', change: '+18%' },
                    { label: 'Total Leads', value: '347', change: '+34%' },
                    { label: 'Revenue (Attributed)', value: '$128k', change: '+62%' },
                    { label: 'Blended ROAS', value: '4.8×', change: '+0.6×' },
                  ].map((s) => (
                    <div key={s.label} className="bg-brand-dark rounded-xl p-4">
                      <p className="text-white/40 text-xs mb-1">{s.label}</p>
                      <p className="text-2xl font-bold text-white">{s.value}</p>
                      <p className="text-green-400 text-xs font-medium mt-1">{s.change} vs last period</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2 bg-brand-dark rounded-xl p-4 h-40 flex items-center justify-center">
                    <div className="flex items-end gap-2 h-24 w-full max-w-xs mx-auto">
                      {[40, 65, 50, 80, 70, 90, 85, 100, 95, 110, 105, 120].map((h, i) => (
                        <div key={i} className="flex-1 bg-brand-mid/60 rounded-t" style={{ height: `${h * 0.8}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="bg-brand-dark rounded-xl p-4 space-y-3">
                    {[
                      { ch: 'SEO', pct: 42, color: 'bg-blue-500' },
                      { ch: 'PPC', pct: 28, color: 'bg-violet-500' },
                      { ch: 'Email', pct: 18, color: 'bg-teal-500' },
                      { ch: 'Social', pct: 12, color: 'bg-sky-500' },
                    ].map((c) => (
                      <div key={c.ch}>
                        <div className="flex justify-between text-xs text-white/50 mb-1">
                          <span>{c.ch}</span><span>{c.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-brand-dark/60 rounded-full overflow-hidden">
                          <div className={`h-full ${c.color} rounded-full`} style={{ width: `${c.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-white/20 text-xs italic">Dashboard preview — actual data shown after login</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 max-w-3xl mx-auto section-padding text-center">
          <Users className="w-10 h-10 text-brand-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Not a Client Yet?</h2>
          <p className="text-white/55 mb-8">Join 500+ businesses accessing live dashboards and expert support through their PerfectEdge account.</p>
          <Link href="/#pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-mid hover:bg-brand-accent text-white font-semibold rounded-xl transition-all shadow-glow">
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
