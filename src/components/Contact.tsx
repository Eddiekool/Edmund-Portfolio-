'use client'
import { useState } from 'react'
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
    toast.success('Message sent! We\'ll be in touch within 24 hours.')
  }

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }))

  const inputClass =
    'w-full px-4 py-3 bg-brand-dark border border-white/10 focus:border-brand-accent rounded-xl text-white text-sm placeholder:text-white/30 outline-none transition-colors'

  return (
    <section id="contact" className="py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Scale Your Business?</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              Book a free 30-minute strategy call. We'll audit your current digital presence and show you exactly
              where the biggest growth opportunities are — no strings attached.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, label: 'hello@perfectedgedigitals.com' },
                { icon: Phone, label: '+1 (555) 123-4567' },
                { icon: MapPin, label: 'New York, NY • Lagos, NG • London, UK' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-mid/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <span className="text-white/70 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="glass border-glow rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-14 h-14 text-brand-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-white/55">Our team will reach out within 24 hours to schedule your strategy session.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-1.5">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={update('name')}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-1.5">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={update('email')}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">Company Name</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={update('company')}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">Service of Interest</label>
                  <select value={form.service} onChange={update('service')} className={inputClass}>
                    <option value="">Select a service…</option>
                    <option>SEO</option>
                    <option>PPC / Paid Ads</option>
                    <option>Social Media Marketing</option>
                    <option>Email Marketing</option>
                    <option>Web Design & Development</option>
                    <option>Analytics & Reporting</option>
                    <option>Full-Suite Package</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">Tell us about your goals *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What are you trying to achieve? What's your current situation?"
                    value={form.message}
                    onChange={update('message')}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-brand-mid hover:bg-brand-accent disabled:opacity-60 text-white font-semibold rounded-xl transition-all shadow-glow"
                >
                  {loading ? 'Sending…' : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
