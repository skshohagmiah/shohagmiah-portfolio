'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { createBlogPost } from "@/actions/createBlogPosts"

const MDXPreview = dynamic(() => import('@/components/MDXPreview'), { ssr: false })

export default function CreateBlogPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [readTime, setReadTime] = useState('')
  const [image, setImage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    formData.append('category', category)
    formData.append('excerpt', excerpt)
    formData.append('readTime', readTime)
    formData.append('image', image)

    const result = await createBlogPost(formData)
    if (result.success) {
      alert('Blog post created successfully!')
      router.push(`/blog/${result.slug}`)
    } else {
      alert('Failed to create blog post. Please try again.')
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 border p-4 rounded-md" >
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="">
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="readTime">Read Time</Label>
          <Input
            id="readTime"
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
            required
          />
        </div>
        <div className="col-span-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
          />
        </div>
        <div className="col-span-2">
          <Label htmlFor="content">Content (Markdown)</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            required
          />
        </div>
        <div className="col-span-2">
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <div className="prose max-w-none border p-4 rounded-lg dark:prose-invert">
            <MDXPreview content={content} />
          </div>
        </div>
        <div className="flex items-center justify-center col-span-2">
          <Button type="submit" className="mx-auto">
            Create Post
          </Button>
        </div>
      </form>
    </div>
  )
}

