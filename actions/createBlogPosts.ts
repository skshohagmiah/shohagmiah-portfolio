'use server'

import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export async function createBlogPost(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const category = formData.get('category') as string
  const excerpt = formData.get('excerpt') as string
  const readTime = formData.get('readTime') as string
  const image = formData.get('image') as string

  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  const date = new Date().toISOString().split('T')[0]

  const frontmatter = {
    title,
    date,
    category,
    excerpt,
    readTime,
    image,
  }

  const fileContent = matter.stringify(content, frontmatter)

  const postsDirectory = path.join(process.cwd(), 'posts')
  await fs.mkdir(postsDirectory, { recursive: true })
  await fs.writeFile(path.join(postsDirectory, `${slug}.mdx`), fileContent)

  return { success: true, slug }
}

