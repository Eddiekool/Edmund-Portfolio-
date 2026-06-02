'use client'
import { ArrowRight, TrendingUp, Users, Globe } from 'lucide-react'

const stats = [
  { icon: TrendingUp, value: '340%', label: 'Avg. ROI' },
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Globe, value: '30+', label: 'Countries' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-mid/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-accent/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto section-padding py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow glass text-sm text-brand-light mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
            Full-Service Digital Marketing Agency
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 animate-fade-up">
            Grow Faster With{' '}
            <span className="text-gradient">Digital Marketing</span>{' '}
            That Delivers
          </h1>

          {/* Subline */}
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            SEO, PPC, Social Media, Email, Web Design & Analytics — all under one roof.
            We turn your digital presence into a revenue-generating machine.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#pricing"
              className="group flex items-center gap-2 px-8 py-4 bg-brand-mid hover:bg-brand-accent text-white font-semibold rounded-xl transition-all shadow-glow hover:shadow-glow-lg text-base"
            >
              View Pricing Plans
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 px-8 py-4 border-glow glass hover:bg-white/5 text-white font-semibold rounded-xl transition-all text-base"
            >
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon className="w-5 h-5 text-brand-accent" />
                </div>
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs text-white/50 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-brand-navy to-transparent pointer-events-none" />
    </section>
  )
}
