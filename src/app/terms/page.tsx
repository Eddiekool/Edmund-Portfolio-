import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Terms of Service | PerfectEdge Digitals',
  description: 'PerfectEdge Digitals Terms of Service — the terms governing your use of our services.',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing or using PerfectEdge Digitals services, you agree to be bound by these Terms of Service. If you do not agree to all terms, you may not use our services. These terms apply to all clients, visitors, and users of our website and services.',
  },
  {
    title: '2. Service Description',
    content: 'PerfectEdge Digitals provides digital marketing services including but not limited to search engine optimisation (SEO), pay-per-click advertising (PPC), social media marketing, email marketing, web design and development, and analytics. The specific services provided are detailed in the service agreement or subscription plan selected by the client.',
  },
  {
    title: '3. Subscription Plans & Payment',
    content: 'Services are offered on a monthly subscription basis. Payment is due in advance at the beginning of each billing period. We use Stripe for secure payment processing. By providing payment information, you authorise recurring charges for the selected plan. All prices are in USD unless otherwise stated. Prices are subject to change with 30 days notice.',
  },
  {
    title: '4. Cancellation Policy',
    content: 'You may cancel your subscription at any time through your client portal or by contacting our team. Cancellation takes effect at the end of the current billing period. No partial refunds are provided for unused portions of a billing period. Cancelling does not entitle you to a refund of amounts already paid.',
  },
  {
    title: '5. Client Responsibilities',
    content: 'You agree to: provide accurate and complete information necessary for service delivery; grant appropriate access to platforms, accounts, and assets required for service delivery; review and provide feedback on deliverables within agreed timescales; comply with the acceptable use policies of all third-party platforms; and not engage any other agency for conflicting services without prior notice.',
  },
  {
    title: '6. Intellectual Property',
    content: 'Upon full payment, you own all creative work product produced specifically for you (ad copy, content, designs). We retain ownership of our methodologies, processes, tools, and templates. We may reference your business name and results as a case study in our portfolio and marketing materials unless you notify us otherwise in writing.',
  },
  {
    title: '7. Confidentiality',
    content: 'Both parties agree to keep confidential all non-public information shared during the service relationship. This includes business strategies, financial data, customer information, and proprietary methodologies. This obligation continues for 2 years after the end of the service relationship.',
  },
  {
    title: '8. Performance & Results',
    content: 'We apply industry best practices and significant expertise to every engagement. However, we cannot guarantee specific results, rankings, or revenue outcomes due to factors outside our control including algorithm changes, market conditions, and competitive landscapes. We commit to transparency, consistent effort, and honest reporting on all campaigns.',
  },
  {
    title: '9. Limitation of Liability',
    content: 'To the maximum extent permitted by law, PerfectEdge Digitals shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or business opportunities. Our total liability to you for any claim shall not exceed the fees paid by you in the three months preceding the claim.',
  },
  {
    title: '10. Third-Party Platforms',
    content: 'Our services involve operating on third-party platforms (Google, Meta, LinkedIn, etc.). We are not responsible for changes to these platforms\' policies, algorithms, or features that may affect service delivery or results. Ad spend on third-party platforms is billed directly by those platforms and is not included in our management fees.',
  },
  {
    title: '11. Governing Law & Disputes',
    content: 'These terms are governed by English law. Any disputes shall first be subject to good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration under the rules of the London Court of International Arbitration. Nothing prevents either party from seeking injunctive relief in a court of competent jurisdiction.',
  },
  {
    title: '12. Modifications',
    content: 'We reserve the right to modify these Terms of Service at any time. Material changes will be communicated with at least 14 days notice via email. Continued use of our services after changes take effect constitutes acceptance of the revised terms. If you do not agree to the changes, you may cancel your subscription before they take effect.',
  },
]

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        badge="Legal"
        title={<>Terms of <span className="text-gradient">Service</span></>}
        subtitle="Last updated: January 1, 2025"
      />
      <main className="bg-brand-navy pb-24">
        <div className="max-w-3xl mx-auto section-padding pt-12">
          <div className="glass border-glow rounded-2xl p-4 mb-10">
            <p className="text-white/55 text-sm leading-relaxed">
              Please read these Terms of Service carefully before using PerfectEdge Digitals services. These terms constitute a legally binding agreement between you and PerfectEdge Digitals Ltd.
            </p>
          </div>
          <div className="space-y-6">
            {sections.map((s) => (
              <div key={s.title} className="glass border-glow rounded-xl p-6">
                <h2 className="text-lg font-bold text-white mb-3">{s.title}</h2>
                <p className="text-white/55 text-sm leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-white/30 text-sm">Questions about these terms? Email us at <span className="text-brand-accent">legal@perfectedgedigitals.com</span></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
