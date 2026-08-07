import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getBlogPost, getAllBlogSlugs } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { format, parseISO } from 'date-fns'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | PerfectEdge Digitals Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main className="bg-brand-navy min-h-screen">
        {/* Hero */}
        <div className="relative pt-32 pb-12 bg-hero-gradient overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E")` }} />
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-brand-navy to-transparent" />
          <div className="relative max-w-3xl mx-auto section-padding">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-xs px-3 py-1 rounded-full bg-brand-mid/20 text-brand-light font-medium">{post.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-5">
              {post.title}
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-7">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-mid flex items-center justify-center text-xs font-bold text-white">
                  {post.author.split(' ').map(w => w[0]).join('')}
                </div>
                <div>
                  <p className="text-white/70 font-medium text-sm">{post.author}</p>
                  <p className="text-white/40 text-xs">{post.role}</p>
                </div>
              </div>
              <span>·</span>
              <span>{format(parseISO(post.date), 'MMMM d, yyyy')}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto section-padding py-14">
          <article className="prose prose-invert prose-blue prose-lg max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-white
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-white
            prose-p:text-white/65 prose-p:leading-relaxed
            prose-li:text-white/65
            prose-strong:text-white
            prose-a:text-brand-accent prose-a:no-underline hover:prose-a:text-brand-light
            prose-code:text-brand-light prose-code:bg-brand-dark/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-brand-dark prose-pre:border prose-pre:border-white/10
            prose-blockquote:border-brand-accent/50 prose-blockquote:text-white/60
            prose-hr:border-white/10
            prose-ul:space-y-1 prose-ol:space-y-1">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  remarkPlugins: [[remarkGfm] as any],
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  rehypePlugins: [[rehypeHighlight], [rehypeSlug]] as any,
                },
              }}
            />
          </article>

          {/* Author card */}
          <div className="mt-14 glass border-glow rounded-2xl p-6 flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-mid to-brand-accent flex items-center justify-center text-white font-bold text-lg shrink-0">
              {post.author.split(' ').map(w => w[0]).join('')}
            </div>
            <div>
              <p className="font-bold text-white">{post.author}</p>
              <p className="text-brand-accent text-sm mb-2">{post.role} at PerfectEdge Digitals</p>
              <p className="text-white/50 text-sm">Expert in {post.category} strategy with years of experience driving measurable results for growth-stage businesses.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-cta-gradient rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Put This Into Practice?</h3>
            <p className="text-white/70 mb-6">Book a free strategy call with our team and we'll show you how to apply these insights to your business.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-blue hover:bg-brand-glow font-semibold rounded-xl transition-colors">
              Book a Free Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Articles
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
