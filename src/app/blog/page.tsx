import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { getAllBlogPosts } from '@/lib/mdx'
import { format, parseISO } from 'date-fns'
import { Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog & Insights | PerfectEdge Digitals',
  description: 'Expert digital marketing insights, guides, and strategies from the PerfectEdge Digitals team. Learn SEO, PPC, email marketing, and more.',
}

const categories = ['All', 'SEO', 'PPC', 'Social Media', 'Email Marketing', 'Strategy', 'Analytics']

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const rest = posts.filter((p) => p.slug !== featured?.slug)

  return (
    <>
      <Navbar />
      <PageHero
        badge="Insights & Guides"
        title={<>Learn From the <span className="text-gradient">Experts</span></>}
        subtitle="Practical, no-fluff guides from the team that manages growth for 500+ businesses. Published monthly."
      />
      <main className="bg-brand-navy pb-24">
        <div className="max-w-7xl mx-auto section-padding pt-12">
          {/* Category filter (static display) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`text-sm px-4 py-1.5 rounded-full font-medium cursor-default transition-colors ${
                  i === 0
                    ? 'bg-brand-mid text-white'
                    : 'border-glow text-white/50 hover:text-white'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="group block glass border-glow rounded-2xl overflow-hidden mb-10 hover:border-brand-accent/40 transition-all">
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-brand-mid/20 text-brand-light font-medium">{featured.category}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent font-medium">Featured</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-gradient transition-all">{featured.title}</h2>
                <p className="text-white/55 leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-white/40 text-sm">
                    <span>By {featured.author}</span>
                    <span>·</span>
                    <span>{format(parseISO(featured.date), 'MMMM d, yyyy')}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm group-hover:gap-3 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Post grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group glass border-glow rounded-2xl p-6 hover:border-brand-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <span className="text-xs px-3 py-1 rounded-full bg-brand-mid/20 text-brand-light font-medium self-start mb-4">{post.category}</span>
                <h3 className="font-bold text-white text-lg mb-2 flex-1 group-hover:text-gradient transition-all">{post.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-white/35 text-xs mt-auto">
                  <span>{format(parseISO(post.date), 'MMM d, yyyy')}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/40">No posts yet. Check back soon.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
