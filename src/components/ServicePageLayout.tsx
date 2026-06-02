import { Check, ArrowRight, LucideIcon } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

interface Step { number: string; title: string; desc: string }
interface Metric { value: string; label: string }
interface FAQ { q: string; a: string }

interface ServicePageProps {
  badge: string
  title: React.ReactNode
  subtitle: string
  icon: LucideIcon
  includes: string[]
  steps: Step[]
  metrics: Metric[]
  faqs: FAQ[]
  relatedHref: string
  relatedLabel: string
}

export default function ServicePageLayout({
  badge, title, subtitle, icon: Icon,
  includes, steps, metrics, faqs,
  relatedHref, relatedLabel,
}: ServicePageProps) {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-mid/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-brand-navy to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-glow glass text-sm text-brand-light mb-6">
              <Icon className="w-4 h-4" />
              {badge}
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-5">{title}</h1>
            <p className="text-lg sm:text-xl text-white/55 leading-relaxed mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-mid hover:bg-brand-accent text-white font-semibold rounded-xl transition-all shadow-glow">
                Get a Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/#pricing" className="inline-flex items-center gap-2 px-7 py-3.5 border-glow glass hover:bg-white/5 text-white font-semibold rounded-xl transition-all">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-brand-navy">
        {/* Metrics */}
        <section className="py-16 bg-brand-dark">
          <div className="max-w-7xl mx-auto section-padding">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-4xl font-extrabold text-gradient mb-1">{m.value}</div>
                  <div className="text-white/50 text-sm">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">What's Included</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Everything You Need, <span className="text-gradient">Nothing You Don't</span>
              </h2>
              <p className="text-white/55 mb-8 leading-relaxed">
                Our service packages are built to cover every lever that drives results — no upsells required, no hidden add-ons.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-light font-semibold transition-colors">
                Get custom scope for your business <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 glass border-glow rounded-xl px-4 py-3">
                  <Check className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-brand-dark">
          <div className="max-w-7xl mx-auto section-padding">
            <div className="text-center mb-14">
              <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Process</p>
              <h2 className="text-3xl sm:text-4xl font-bold">How We <span className="text-gradient">Deliver Results</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="glass border-glow rounded-2xl p-6">
                  <div className="text-5xl font-black text-brand-mid/40 mb-4 leading-none">{step.number}</div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 max-w-3xl mx-auto section-padding">
          <div className="text-center mb-12">
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 className="text-3xl font-bold">Common <span className="text-gradient">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass border-glow rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related service CTA */}
        <section className="py-16 bg-brand-dark">
          <div className="max-w-4xl mx-auto section-padding text-center">
            <p className="text-white/40 text-sm mb-4">Pair this with</p>
            <Link href={relatedHref} className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity">
              {relatedLabel} →
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 max-w-4xl mx-auto section-padding text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/55 text-lg mb-8">Book a free 30-min strategy call. No commitment, no pressure.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-mid hover:bg-brand-accent text-white font-semibold rounded-xl transition-all shadow-glow text-base">
            Book Your Free Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
