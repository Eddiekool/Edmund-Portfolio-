import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  role: string
  category: string
  readTime: string
  featured: boolean
  image?: string
  content: string
}

function getBlogDir() {
  return path.join(CONTENT_DIR, 'blog')
}

export function getAllBlogPosts(): BlogPost[] {
  const dir = getBlogDir()
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
      const { data, content } = matter(raw)
      return {
        slug,
        content,
        title: data.title ?? '',
        excerpt: data.excerpt ?? '',
        date: data.date ?? '',
        author: data.author ?? '',
        role: data.role ?? '',
        category: data.category ?? '',
        readTime: data.readTime ?? '',
        featured: data.featured ?? false,
        image: data.image,
      } as BlogPost
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(getBlogDir(), `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    content,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    date: data.date ?? '',
    author: data.author ?? '',
    role: data.role ?? '',
    category: data.category ?? '',
    readTime: data.readTime ?? '',
    featured: data.featured ?? false,
    image: data.image,
  }
}

export function getAllBlogSlugs(): string[] {
  const dir = getBlogDir()
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
