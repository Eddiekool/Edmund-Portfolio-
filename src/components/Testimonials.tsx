import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, NovaTech Solutions',
    avatar: 'SC',
    rating: 5,
    text:
      "PerfectEdge took us from 800 monthly organic visits to over 24,000 in just 9 months. Their SEO and content strategy is genuinely world-class. We're now the #1 result for our main keyword.",
  },
  {
    name: 'Marcus Williams',
    role: 'Founder, FitLife Pro',
    avatar: 'MW',
    rating: 5,
    text:
      'Our Google Ads ROAS went from 1.8x to 6.4x in 3 months. The team rebuilt our campaigns from scratch, and the results speak for themselves. Best investment we made last year.',
  },
  {
    name: 'Priya Patel',
    role: 'Marketing Director, EcoStore',
    avatar: 'PP',
    rating: 5,
    text:
      "The email automation flows PerfectEdge built generate $40k+ in revenue every month on autopilot. Their segmentation and A/B testing expertise is something I've never seen at another agency.",
  },
  {
    name: 'James O\'Brien',
    role: 'COO, UrbanLux Hotels',
    avatar: 'JO',
    rating: 5,
    text:
      'We doubled our direct bookings in 6 months through their social media and paid ads strategy. The reporting dashboards give us complete visibility. Absolutely recommend.',
  },
  {
    name: 'Amara Osei',
    role: 'Founder, LegalEdge Africa',
    avatar: 'AO',
    rating: 5,
    text:
      'The new landing page they designed converted at 9.2% — triple what we had before. Their CRO expertise combined with driving targeted traffic was a game-changer for our firm.',
  },
  {
    name: 'David Thornton',
    role: 'VP Growth, CloudSync',
    avatar: 'DT',
    rating: 5,
    text:
      'Switched to PerfectEdge after burning money with two other agencies. Within 60 days they identified what was broken across our entire funnel and fixed it. Revenue up 180% YoY.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">Client Results</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Real Businesses, <span className="text-gradient">Real Growth</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Don't take our word for it — here's what our clients say after working with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass border-glow rounded-2xl p-6 hover:border-brand-accent/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <Quote className="w-6 h-6 text-brand-accent/50 mb-4" />
              <p className="text-white/65 text-sm leading-relaxed flex-1 mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-mid flex items-center justify-center text-sm font-bold text-white shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
