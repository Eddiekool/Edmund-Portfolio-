import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl bg-ink-900 px-8 py-14 text-center sm:px-16">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Ready to grow your savings or get funded?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-ink-300">
          Create a free Vaultly account in under two minutes. No hidden fees,
          no fine print surprises.
        </p>
        <Link
          to="/signup"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
        >
          Get started for free
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
