import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
import { Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Social Media Marketing | PerfectEdge Digitals',
  description: 'Build engaged audiences and drive revenue from Instagram, TikTok, LinkedIn, and Facebook. Full management, content creation, and community building.',
}

export default function SocialMediaPage() {
  return (
    <ServicePageLayout
      badge="Social Media Marketing"
      title={<>Turn Followers Into <span className="text-gradient">Paying Customers</span></>}
      subtitle="We manage your social media end-to-end — strategy, content creation, publishing, community management, and paid amplification — across every platform that matters to your audience."
      icon={Share2}
      metrics={[
        { value: '100M+', label: 'Organic impressions generated' },
        { value: '5.8%', label: 'Avg. engagement rate' },
        { value: '4', label: 'Platforms managed per client' },
        { value: '30', label: 'Posts created per month' },
      ]}
      includes={[
        'Social media strategy & content calendar',
        'Instagram management & Reels',
        'TikTok content & trend strategy',
        'LinkedIn thought leadership (B2B)',
        'Facebook Page management',
        'X (Twitter) presence management',
        'Short-form video production',
        'Graphic design & visual branding',
        'Community management & DM responses',
        'Influencer outreach & partnerships',
        'Monthly analytics & audience insights',
        'Paid social amplification',
      ]}
      steps={[
        { number: '01', title: 'Brand & Audience Audit', desc: 'Deep dive into your brand voice, competitor landscape, and audience psychographics.' },
        { number: '02', title: 'Content Strategy', desc: 'Build a content pillar framework, platform strategy, and 90-day content calendar.' },
        { number: '03', title: 'Create & Publish', desc: 'Our content team creates, designs, and schedules every post. You approve before it goes live.' },
        { number: '04', title: 'Grow & Engage', desc: 'Active community management, daily engagement, and strategic amplification of top content.' },
      ]}
      faqs={[
        { q: 'Do you create the content or do we provide it?', a: 'We create everything — copywriting, graphics, video editing. You provide brand assets and product info. We handle the rest, and everything goes through your approval before publishing.' },
        { q: 'How many platforms do you manage?', a: 'Our Starter plan covers 2 platforms, Growth covers 4, and Enterprise covers all platforms relevant to your brand. We recommend prioritising 2–3 platforms rather than spreading thin across all.' },
        { q: 'Do you handle paid social ads too?', a: 'Social media management focuses on organic growth. Paid social ads are managed under our PPC service. Many clients use both together for maximum reach and conversion.' },
        { q: 'What industries do you specialise in?', a: 'We work across B2B tech, e-commerce, hospitality, professional services, and consumer brands. Our team is trained to adapt to any industry\'s tone and audience.' },
      ]}
      relatedHref="/services/email-marketing"
      relatedLabel="Convert your social audience with Email Marketing"
    />
  )
}
