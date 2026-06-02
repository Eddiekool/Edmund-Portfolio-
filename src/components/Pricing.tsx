'use client'
import { Check, Sparkles } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { pricingPlans } from '@/lib/stripe'
import clsx from 'clsx'

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleCheckout = async (planId: string) => {
    setLoading(planId)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        toast.error(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      toast.error('Network error — please try again.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <section id="pricing" className="py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            No hidden fees. Cancel anytime. Choose the plan that matches your growth ambition.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={clsx(
                'relative rounded-2xl p-8 flex flex-col transition-all duration-300',
                plan.popular
                  ? 'bg-cta-gradient border border-brand-accent/50 shadow-glow scale-[1.03]'
                  : 'border-glow glass hover:-translate-y-1',
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-brand-accent rounded-full text-xs font-bold text-white shadow-glow">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mt-3">
                  <span className="text-4xl font-extrabold text-white">${plan.price.toLocaleString()}</span>
                  <span className="text-white/50 mb-1.5">/ {plan.interval}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-glow mt-0.5 shrink-0" />
                    <span className="text-sm text-white/70">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(plan.id)}
                disabled={loading === plan.id}
                className={clsx(
                  'w-full py-3.5 rounded-xl font-semibold text-sm transition-all',
                  plan.popular
                    ? 'bg-white text-brand-blue hover:bg-brand-glow disabled:opacity-60'
                    : 'bg-brand-mid hover:bg-brand-accent text-white disabled:opacity-60 shadow-glow',
                )}
              >
                {loading === plan.id ? 'Redirecting…' : `Get Started — $${plan.price.toLocaleString()}/mo`}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-10">
          All plans billed monthly. Cancel anytime with no penalties. Prices in USD.
        </p>
      </div>
    </section>
  )
}
