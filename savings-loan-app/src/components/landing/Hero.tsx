import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
            <ShieldCheck size={14} />
            Bank-level security
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink-900 md:text-5xl">
            Save smarter.
            <br />
            Borrow better.
          </h1>

          <p className="mt-5 max-w-md text-lg text-ink-500">
            Vaultly gives you one account to grow your savings automatically
            and apply for a loan in minutes — no paperwork, no waiting in
            line.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              Open an account
              <ArrowRight size={16} />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-900/10 px-6 py-3 text-sm font-semibold text-ink-900 transition hover:border-ink-900/30"
            >
              See how it works
            </a>
          </div>

          <div className="mt-10 flex gap-8 text-sm text-ink-500">
            <div>
              <div className="text-2xl font-bold text-ink-900">4.8%</div>
              savings APY
            </div>
            <div>
              <div className="text-2xl font-bold text-ink-900">24hrs</div>
              avg. loan decision
            </div>
            <div>
              <div className="text-2xl font-bold text-ink-900">50k+</div>
              members
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-ink-900/5 bg-white p-6 shadow-xl shadow-ink-900/5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-ink-500">
                Savings balance
              </span>
              <TrendingUp className="text-brand-500" size={18} />
            </div>
            <div className="mt-2 text-3xl font-bold text-ink-900">
              $12,480.32
            </div>
            <div className="mt-1 text-sm font-medium text-brand-600">
              +$240 this month
            </div>

            <div className="mt-6 h-24 rounded-lg bg-gradient-to-r from-brand-100 to-brand-50" />

            <div className="mt-6 rounded-lg border border-ink-900/5 bg-ink-50/50 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-500">Loan application</span>
                <span className="font-semibold text-brand-600">Approved</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-ink-900/5">
                <div className="h-2 w-full rounded-full bg-brand-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
