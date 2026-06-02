import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Target, Eye, Heart, Zap, Award, Globe2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | PerfectEdge Digitals',
  description: 'Meet the team behind PerfectEdge Digitals. Our story, values, and the experts who deliver results for 500+ clients worldwide.',
}

const team = [
  { name: 'Edmund Kool', role: 'Founder & CEO', initials: 'EK', bio: '12 years scaling digital brands across 3 continents. Former Head of Growth at two Series B SaaS companies.' },
  { name: 'Sarah Chen', role: 'Head of Strategy', initials: 'SC', bio: 'Ex-McKinsey consultant turned growth strategist. Specialises in multi-channel attribution and data-driven decision making.' },
  { name: 'David Thornton', role: 'Head of SEO', initials: 'DT', bio: '10 years building organic growth engines for enterprise brands. Ranked #1 for 2,000+ competitive keywords for clients.' },
  { name: 'Marcus Williams', role: 'Head of Paid Media', initials: 'MW', bio: 'Managed $50M+ in Google and Meta ad spend. Certified Google Partner with expertise in Performance Max and Smart Bidding.' },
  { name: 'Amara Osei', role: 'Email Marketing Lead', initials: 'AO', bio: 'Built email programmes generating $2M+ monthly for e-commerce brands. Expert in deliverability and lifecycle marketing.' },
  { name: 'Priya Patel', role: 'Social Media Director', initials: 'PP', bio: 'Grew communities for 50+ brands. Viral content architect with campaigns generating 100M+ organic impressions.' },
  { name: 'James O\'Brien', role: 'Web Design Lead', initials: 'JO', bio: 'Conversion-focused designer with 400+ landing pages built. Average CRO improvement of 85% across portfolio.' },
  { name: 'Lisa Nakamura', role: 'Analytics & Data Lead', initials: 'LN', bio: 'Data scientist turned marketing analyst. Builds custom attribution models and BI dashboards that drive strategy.' },
]

const values = [
  { icon: Target, title: 'Results Over Vanity', desc: 'We care about revenue, not impressions. Every report we send is tied to business outcomes.' },
  { icon: Eye, title: 'Radical Transparency', desc: 'You see exactly what we do, what we spend, and why. No black boxes, no hidden markups.' },
  { icon: Heart, title: 'Long-Term Partnership', desc: 'We win when you win. Our incentives are aligned with your growth, not just your retainer.' },
  { icon: Zap, title: 'Bias for Action', desc: 'We move fast. Campaigns launch in 72 hours. Insights turn into experiments within a week.' },
  { icon: Award, title: 'Excellence in Craft', desc: 'Every email, ad, and page is built with obsessive attention to quality and conversion.' },
  { icon: Globe2, title: 'Global Perspective', desc: 'Teams in 3 continents. We understand markets across North America, Europe, and Africa.' },
]

const milestones = [
  { year: '2018', event: 'Founded in Lagos with 3 clients and a bold vision' },
  { year: '2019', event: 'Expanded to London — first international office' },
  { year: '2021', event: 'Hit 200 clients, launched full analytics division' },
  { year: '2022', event: 'Opened New York office; surpassed $100M managed ad spend' },
  { year: '2023', event: '500+ clients served, 30+ countries, team of 45' },
  { year: '2025', event: 'Launched proprietary growth intelligence platform' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero
        badge="Our Story"
        title={<>Built by Marketers, <span className="text-gradient">Driven by Results</span></>}
        subtitle="We started PerfectEdge Digitals because we were tired of agencies that talked big and delivered little. Since 2018, we've helped 500+ businesses grow with digital marketing that actually moves the needle."
      />

      <main className="bg-brand-navy">
        {/* Mission & Vision */}
        <section className="py-20 max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass border-glow rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-brand-mid/20 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-brand-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
              <p className="text-white/60 leading-relaxed">
                To give every growth-stage business access to the same calibre of digital marketing expertise that Fortune 500 companies take for granted — delivered with full transparency and tied directly to business outcomes.
              </p>
            </div>
            <div className="glass border-glow rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-brand-mid/20 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-brand-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
              <p className="text-white/60 leading-relaxed">
                A world where digital marketing is measured in revenue, not reach. Where every business owner knows exactly what their marketing spend returns — and trusts that number completely.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-brand-dark">
          <div className="max-w-7xl mx-auto section-padding">
            <div className="text-center mb-14">
              <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Stand For</p>
              <h2 className="text-4xl font-bold">Our Core <span className="text-gradient">Values</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="glass border-glow rounded-2xl p-6 hover:border-brand-accent/40 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-brand-mid/20 flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 max-w-7xl mx-auto section-padding">
          <div className="text-center mb-14">
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">The Team</p>
            <h2 className="text-4xl font-bold">Meet the <span className="text-gradient">Experts</span></h2>
            <p className="text-white/50 mt-3 max-w-xl mx-auto">Our team brings together specialists from top agencies, consultancies, and tech companies — united by a single goal: your growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="glass border-glow rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-mid to-brand-accent flex items-center justify-center text-white font-bold text-lg mb-4 shadow-glow">
                  {member.initials}
                </div>
                <h3 className="font-bold text-white">{member.name}</h3>
                <p className="text-brand-accent text-xs font-medium mb-3">{member.role}</p>
                <p className="text-white/45 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-brand-dark">
          <div className="max-w-4xl mx-auto section-padding">
            <div className="text-center mb-14">
              <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Journey</p>
              <h2 className="text-4xl font-bold">From Startup to <span className="text-gradient">Global Agency</span></h2>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-px h-full w-px bg-brand-mid/30" />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <div key={m.year} className={`flex items-center gap-8 ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="glass border-glow rounded-xl p-4 inline-block max-w-xs">
                        <p className="text-brand-accent text-sm font-bold mb-1">{m.year}</p>
                        <p className="text-white/70 text-sm">{m.event}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-brand-accent shadow-glow shrink-0 z-10" />
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 max-w-4xl mx-auto section-padding text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-white/55 text-lg mb-8">Join 500+ businesses that trust PerfectEdge Digitals to drive their growth.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-brand-mid hover:bg-brand-accent text-white font-semibold rounded-xl transition-all shadow-glow">
              Book a Strategy Call
            </a>
            <a href="/case-studies" className="px-8 py-4 border-glow glass hover:bg-white/5 text-white font-semibold rounded-xl transition-all">
              View Case Studies
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
