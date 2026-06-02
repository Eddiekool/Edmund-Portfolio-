'use client'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Zap, ChevronDown, Search, MousePointerClick, Share2, Mail, Globe, BarChart3 } from 'lucide-react'
import clsx from 'clsx'
import Link from 'next/link'

const services = [
  { label: 'SEO', href: '/services/seo', icon: Search, desc: 'Rank higher, grow organically' },
  { label: 'PPC Advertising', href: '/services/ppc', icon: MousePointerClick, desc: 'Maximise paid ad ROAS' },
  { label: 'Social Media', href: '/services/social-media', icon: Share2, desc: 'Build engaged audiences' },
  { label: 'Email Marketing', href: '/services/email-marketing', icon: Mail, desc: 'Automate revenue flows' },
  { label: 'Web Design', href: '/services/web-design', icon: Globe, desc: 'Convert visitors to buyers' },
  { label: 'Analytics', href: '/services/analytics', icon: BarChart3, desc: 'Data-driven decisions' },
]

const topLinks = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'glass border-b border-white/5 shadow-card' : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-accent to-brand-mid rounded-lg flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className="text-gradient">PerfectEdge</span>
              <span className="text-white/80"> Digitals</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Services dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors font-medium"
              >
                Services <ChevronDown className={clsx('w-3.5 h-3.5 transition-transform', servicesOpen && 'rotate-180')} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] glass border-glow rounded-2xl p-4 grid grid-cols-2 gap-2 shadow-card">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-mid/20 flex items-center justify-center shrink-0 group-hover:bg-brand-mid/40 transition-colors mt-0.5">
                        <s.icon className="w-4 h-4 text-brand-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{s.label}</p>
                        <p className="text-xs text-white/40">{s.desc}</p>
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 border-t border-white/5 mt-1 pt-3 px-1">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="text-xs text-brand-accent hover:text-brand-light transition-colors font-medium"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {topLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/dashboard" className="text-sm text-white/50 hover:text-white transition-colors font-medium">
              Client Login
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-mid hover:bg-brand-accent text-white text-sm font-semibold rounded-lg transition-colors shadow-glow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white/70 hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/5">
          <div className="section-padding py-4 space-y-1">
            <p className="text-xs text-white/30 font-semibold uppercase tracking-wider px-2 pb-2">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-white/5 transition-colors"
              >
                <s.icon className="w-4 h-4 text-brand-accent" />
                <span className="text-sm text-white/80 font-medium">{s.label}</span>
              </Link>
            ))}
            <div className="border-t border-white/5 my-3" />
            {topLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-2.5 text-white/70 hover:text-white font-medium text-sm transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="block px-2 py-2.5 text-white/50 hover:text-white font-medium text-sm transition-colors"
            >
              Client Login
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-5 py-2.5 bg-brand-mid hover:bg-brand-accent text-white text-sm font-semibold rounded-lg transition-colors mt-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
