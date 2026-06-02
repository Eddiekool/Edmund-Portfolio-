import { CheckCircle, ArrowLeft, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-hero-gradient flex items-center justify-center section-padding">
      <div className="max-w-lg w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-mid/20 border border-brand-accent/30 mb-8">
          <CheckCircle className="w-10 h-10 text-brand-accent" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">You're In!</h1>
        <p className="text-white/60 text-lg leading-relaxed mb-8">
          Welcome to PerfectEdge Digitals. Your subscription is now active. Check your inbox for a welcome
          email with your onboarding details — we'll be in touch within 24 hours.
        </p>
        <div className="glass border-glow rounded-2xl p-6 mb-8 text-left">
          <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-brand-accent" />
            What Happens Next
          </h3>
          <ol className="space-y-2 text-white/60 text-sm">
            <li className="flex gap-2"><span className="text-brand-accent font-bold">1.</span> Welcome email sent to your inbox</li>
            <li className="flex gap-2"><span className="text-brand-accent font-bold">2.</span> Onboarding call scheduled within 24 hours</li>
            <li className="flex gap-2"><span className="text-brand-accent font-bold">3.</span> Account audit & strategy document delivered</li>
            <li className="flex gap-2"><span className="text-brand-accent font-bold">4.</span> Campaign launch within 72 hours</li>
          </ol>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </main>
  )
}
