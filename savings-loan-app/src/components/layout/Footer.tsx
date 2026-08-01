import { Link } from 'react-router-dom'
import { PiggyBank } from 'lucide-react'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Savings plans', href: '/#savings' },
      { label: 'Loan application', href: '/#loans' },
      { label: 'How it works', href: '/#how-it-works' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms of service', href: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/5 bg-ink-900 text-ink-300">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2 font-semibold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white">
                <PiggyBank size={18} />
              </span>
              <span className="text-lg">Vaultly</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm">
              Save toward your goals and borrow with confidence — one simple
              account for both.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs">
          © {new Date().getFullYear()} Vaultly. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
