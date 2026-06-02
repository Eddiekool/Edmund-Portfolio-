import { Zap, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react'

const nav = {
  Services: ['SEO', 'PPC Advertising', 'Social Media', 'Email Marketing', 'Web Design', 'Analytics'],
  Company: ['About Us', 'Case Studies', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
}

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5">
      {/* CTA band */}
      <div className="bg-cta-gradient">
        <div className="max-w-7xl mx-auto section-padding py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Ready to get your competitive edge?</h3>
            <p className="text-white/70 mt-1">Start with a free strategy audit — no commitment required.</p>
          </div>
          <a
            href="#pricing"
            className="shrink-0 px-8 py-3.5 bg-white text-brand-blue hover:bg-brand-glow font-bold rounded-xl transition-colors shadow-glow"
          >
            View Plans
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-accent to-brand-mid rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-bold text-base">
                <span className="text-gradient">PerfectEdge</span>
                <span className="text-white/70"> Digitals</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Full-service digital marketing that turns your online presence into a revenue-generating machine.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border-glow flex items-center justify-center text-white/40 hover:text-white hover:bg-brand-mid/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {Object.entries(nav).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} PerfectEdge Digitals. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Payments secured by Stripe · SSL Encrypted
          </p>
        </div>
      </div>
    </footer>
  )
}
