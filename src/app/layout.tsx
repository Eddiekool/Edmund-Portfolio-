import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'PerfectEdge Digitals | Full-Service Digital Marketing Agency',
  description:
    'Grow your business with expert SEO, PPC, Social Media Marketing, Email Campaigns, Web Design, and Analytics. Get the competitive edge with PerfectEdge Digitals.',
  keywords: 'digital marketing, SEO, PPC, social media marketing, email marketing, web design, analytics',
  openGraph: {
    title: 'PerfectEdge Digitals',
    description: 'Full-service digital marketing that drives real results.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#0f2040',
              color: '#fff',
              border: '1px solid rgba(59,130,246,0.3)',
            },
          }}
        />
      </body>
    </html>
  )
}
