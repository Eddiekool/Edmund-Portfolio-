import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { Clock, MessageSquare, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | PerfectEdge Digitals',
  description: 'Get in touch with PerfectEdge Digitals. Book a free strategy call, send a message, or visit one of our offices in New York, London, or Lagos.',
}

const offices = [
  { city: 'New York', address: '350 Fifth Avenue, Suite 4100, New York, NY 10118', phone: '+1 (555) 123-4567' },
  { city: 'London', address: '30 St Mary Axe, London, EC3A 8BF, United Kingdom', phone: '+44 20 1234 5678' },
  { city: 'Lagos', address: '1 Macpherson Avenue, Ikoyi, Lagos, Nigeria', phone: '+234 1 234 5678' },
]

const faqs = [
  { q: 'How quickly will you respond?', a: 'We respond to all enquiries within 4 business hours. For urgent matters, call our main line directly.' },
  { q: 'What\'s included in the free strategy call?', a: 'A 30-minute session where we review your current digital presence, identify your top 3 growth opportunities, and give you an honest assessment — no sales pressure, no obligation.' },
  { q: 'Do you work with businesses outside your listed regions?', a: 'Yes. We serve clients in 30+ countries. All services are delivered remotely with optional in-person strategy sessions for clients in our three office cities.' },
  { q: 'How do I know if you\'re the right agency?', a: 'We\'re the right fit if you want measurable results, transparent reporting, and a team that treats your budget as seriously as their own. We\'ll tell you honestly in the strategy call if we\'re not the best fit.' },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-navy pt-24">
        {/* Header */}
        <div className="relative py-16 bg-hero-gradient overflow-hidden">
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-brand-navy to-transparent" />
          <div className="relative max-w-7xl mx-auto section-padding text-center">
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">Let's Talk</p>
            <h1 className="text-5xl font-extrabold mb-4">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-white/55 text-lg max-w-xl mx-auto">Book a free strategy call, ask us anything, or tell us about your project. We respond within 4 hours.</p>
          </div>
        </div>

        {/* Quick info bar */}
        <div className="bg-brand-dark border-y border-white/5">
          <div className="max-w-7xl mx-auto section-padding py-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Clock, text: 'Response within 4 business hours' },
              { icon: MessageSquare, text: 'Free 30-min strategy call included' },
              { icon: Phone, text: 'Available Mon–Fri, 8am–7pm across 3 timezones' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-brand-accent shrink-0" />
                <span className="text-white/60 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main contact form section */}
        <Contact />

        {/* Office locations */}
        <section className="py-20 bg-brand-dark">
          <div className="max-w-7xl mx-auto section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our <span className="text-gradient">Offices</span></h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {offices.map((o) => (
                <div key={o.city} className="glass border-glow rounded-2xl p-6">
                  <h3 className="font-bold text-white text-lg mb-3">{o.city}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">{o.address}</p>
                  <p className="text-brand-accent text-sm font-medium">{o.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 max-w-3xl mx-auto section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked <span className="text-gradient">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass border-glow rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
