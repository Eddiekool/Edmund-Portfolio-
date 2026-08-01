import { PiggyBank, Landmark, Zap, ShieldCheck, LineChart, Clock } from 'lucide-react'

const features = [
  {
    icon: PiggyBank,
    title: 'Automated savings',
    description:
      'Set a goal and Vaultly rounds up purchases and schedules transfers to hit it automatically.',
  },
  {
    icon: Landmark,
    title: 'Fast loan applications',
    description:
      'Apply in one form, upload documents digitally, and track your application status live.',
  },
  {
    icon: Zap,
    title: 'Instant decisions',
    description:
      'Most loan applications get a decision within 24 hours — some in minutes.',
  },
  {
    icon: LineChart,
    title: 'Competitive rates',
    description:
      'Earn up to 4.8% APY on savings and access loan rates based on your real financial profile.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by design',
    description:
      'Bank-level encryption and fraud monitoring protect every transaction, every time.',
  },
  {
    icon: Clock,
    title: '24/7 access',
    description:
      'Check balances, make payments, or apply for a loan anytime from any device.',
  },
]

export default function Features() {
  return (
    <section id="savings" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-ink-900">
          Everything you need in one account
        </h2>
        <p className="mt-3 text-ink-500">
          Vaultly combines savings tools and lending in a single, simple
          dashboard — no juggling multiple apps.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-ink-900/5 p-6 transition hover:border-brand-400/40 hover:shadow-lg hover:shadow-brand-500/5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon size={20} />
            </span>
            <h3 className="mt-4 font-semibold text-ink-900">{title}</h3>
            <p className="mt-2 text-sm text-ink-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
