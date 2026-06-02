import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy | PerfectEdge Digitals',
  description: 'PerfectEdge Digitals Privacy Policy — how we collect, use, and protect your personal data.',
}

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, including when you fill out a contact form, sign up for our newsletter, or engage with our services. This includes:

• Name, email address, phone number, and company name
• Information about your business and marketing goals
• Payment information (processed securely through Stripe — we never store card details)
• Communications you send us

We also automatically collect certain information when you visit our website, including IP address, browser type, pages visited, time spent, and referring URL via Google Analytics 4.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information (confirmations, invoices, receipts)
• Send marketing communications, where you have opted in
• Respond to enquiries and provide customer support
• Monitor and analyse usage patterns to improve the website
• Detect, prevent, and address fraud or technical issues
• Comply with legal obligations`,
  },
  {
    title: '3. Data Sharing & Third Parties',
    content: `We do not sell, trade, or rent your personal data to third parties. We may share your information with:

• Service providers who assist in delivering our services (e.g., Stripe for payments, Google Analytics for analytics, email service providers)
• Professional advisers including lawyers and accountants where necessary
• Regulators and other authorities as required by applicable law

All third-party service providers are contractually bound to use your data only to perform services for us and are required to maintain appropriate security measures.`,
  },
  {
    title: '4. Cookies & Tracking Technologies',
    content: `Our website uses cookies and similar tracking technologies to enhance your experience. We use:

• Essential cookies: required for the website to function
• Analytics cookies: Google Analytics 4 to understand usage patterns
• Marketing cookies: used only where you have given consent

You can control cookie settings through your browser. Note that disabling certain cookies may affect website functionality. We honour "Do Not Track" browser signals.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain personal data for as long as necessary to provide our services and comply with legal obligations. Typically:

• Client data: retained for 7 years after the end of a client relationship (legal compliance)
• Newsletter subscribers: retained until you unsubscribe
• Contact form enquiries: retained for 2 years
• Analytics data: retained per Google Analytics retention settings (default 14 months)

You may request deletion of your data at any time by contacting us at privacy@perfectedgedigitals.com.`,
  },
  {
    title: '6. Your Rights (GDPR & CCPA)',
    content: `Depending on your location, you may have the following rights regarding your personal data:

• Right of access: request a copy of the personal data we hold about you
• Right to rectification: request correction of inaccurate data
• Right to erasure ("right to be forgotten")
• Right to restrict processing
• Right to data portability
• Right to object to processing based on legitimate interests
• Right to withdraw consent at any time

To exercise any of these rights, contact us at privacy@perfectedgedigitals.com. We will respond within 30 days.`,
  },
  {
    title: '7. Data Security',
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include:

• SSL/TLS encryption for all data transmission
• Stripe PCI DSS compliance for payment processing
• Access controls limiting who can access personal data
• Regular security audits
• Incident response procedures

No method of transmission over the internet is 100% secure. In the event of a data breach that poses a risk to your rights, we will notify you within 72 hours as required by applicable law.`,
  },
  {
    title: '8. International Transfers',
    content: `PerfectEdge Digitals operates from offices in the United States, United Kingdom, and Nigeria. Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers, including Standard Contractual Clauses approved by the European Commission where applicable.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by email (where we have your address) or by posting a prominent notice on our website at least 14 days before the changes take effect. The date at the top of this page indicates when the policy was last revised.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer:

Email: privacy@perfectedgedigitals.com
Postal: PerfectEdge Digitals Ltd, 30 St Mary Axe, London, EC3A 8BF, United Kingdom

You also have the right to lodge a complaint with your local data protection supervisory authority.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <PageHero
        badge="Legal"
        title={<>Privacy <span className="text-gradient">Policy</span></>}
        subtitle="Last updated: January 1, 2025"
      />
      <main className="bg-brand-navy pb-24">
        <div className="max-w-3xl mx-auto section-padding pt-12">
          <div className="glass border-glow rounded-2xl p-4 mb-10">
            <p className="text-white/55 text-sm leading-relaxed">
              This Privacy Policy describes how PerfectEdge Digitals Ltd ("we," "us," or "our") collects, uses, and protects your personal data when you visit our website or use our services. We are committed to protecting your privacy and handling your data in an open and transparent manner.
            </p>
          </div>
          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.title} className="glass border-glow rounded-xl p-6">
                <h2 className="text-lg font-bold text-white mb-4">{s.title}</h2>
                <p className="text-white/55 text-sm leading-relaxed whitespace-pre-line">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
