import { getPostData, getSortedPostsData } from '../../../lib/blog-utils'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Clock } from 'lucide-react'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug)

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <Image
          src={postData.image}
          alt={`${postData.title} cover`}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        {/* <h1 className="text-4xl font-bold mb-4">{postData.title}</h1> */}
        <div className="flex items-center justify-between mb-6">
          <Badge>{postData.category}</Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="mr-2 h-4 w-4" />
            <span>{postData.readTime}</span>
          </div>
        </div>
        <div className="text-gray-600 mb-4">{postData.date}</div>
        <div className="prose max-w-none dark:prose-invert">
          <MDXRemote source={postData.content} />
        </div>
      </article>
    </div>
  )
}

