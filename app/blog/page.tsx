import Link from 'next/link'
import Image from 'next/image'
import { getSortedPostsData } from '../../lib/blog-utils'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from 'lucide-react'

export default function BlogList() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="max-w-7xl min-h-screen mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">My Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {allPostsData.map((post, index) => (
          <Card key={index} className="dark:bg-gray-800 dark:border-gray-700 overflow-hidden flex flex-col">
            <CardHeader className="p-0">
              {/* <Image
                src={post?.image}
                alt={`${post?.title} cover`}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              /> */}
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <Badge className="mb-2">{post?.category}</Badge>
              <CardTitle className="text-xl font-bold mb-2">
                <Link href={`/blog/${post?.slug}`} className="hover:text-purple-400 dark:text-white transition-colors">
                  {post?.title}
                </Link>
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="mr-2 h-4 w-4" />
                <span>{post?.readTime}</span>
              </div>
            </CardContent>
            <CardFooter className="dark:bg-gray-800 border-t dark:border-gray-700 p-6">
              <div className="flex justify-between items-center w-full">
                <span className="text-sm text-gray-400">{post?.date}</span>
                <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300" asChild>
                  <Link href={`/blog/${post?.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

