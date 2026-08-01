import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, PiggyBank } from 'lucide-react'

const navLinks = [
  { label: 'Savings', href: '/#savings' },
  { label: 'Loans', href: '/#loans' },
  { label: 'How it works', href: '/#how-it-works' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-semibold text-ink-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white">
            <PiggyBank size={18} />
          </span>
          <span className="text-lg">Vaultly</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink-500 transition hover:text-ink-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <NavLink
            to="/login"
            className="text-sm font-medium text-ink-700 hover:text-ink-900"
          >
            Log in
          </NavLink>
          <NavLink
            to="/signup"
            className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Get started
          </NavLink>
        </div>

        <button
          className="text-ink-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-900/5 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-700"
              >
                {link.label}
              </a>
            ))}
            <NavLink to="/login" className="text-sm font-medium text-ink-700">
              Log in
            </NavLink>
            <NavLink
              to="/signup"
              className="w-full rounded-lg bg-ink-900 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Get started
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
