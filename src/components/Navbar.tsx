'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import clsx from 'clsx'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
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
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-accent to-brand-mid rounded-lg flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className="text-gradient">PerfectEdge</span>
              <span className="text-white/80"> Digitals</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#pricing"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-mid hover:bg-brand-accent text-white text-sm font-semibold rounded-lg transition-colors shadow-glow"
          >
            Get Started
          </a>

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
          <div className="section-padding py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-white/70 hover:text-white py-2 font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-5 py-2.5 bg-brand-mid hover:bg-brand-accent text-white text-sm font-semibold rounded-lg transition-colors mt-4"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
