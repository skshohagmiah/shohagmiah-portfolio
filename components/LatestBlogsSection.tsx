import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { getSortedPostsData } from "@/lib/blog-utils"

export default function Homeblogsection() {
  const allPostsData = getSortedPostsData()

  return (
    <section className="dark:bg-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Latest from the Blog</h2>
          <p className="text-xl text-gray-400">Insights, tutorials, and tech discussions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        {allPostsData.slice(0,6).map((post, index) => (
          <Card key={index} className="dark:bg-gray-800 dark:border-gray-700 overflow-hidden flex flex-col">
            <CardHeader className="p-0">
              <Image
                src={post?.image || ""}
                alt={`${post?.title} cover`}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <Badge className="mb-2">{post?.category}</Badge>
              <CardTitle className="text-xl font-bold mb-2">
                <Link href={`/blog/${post?.slug}`} className="hover:text-purple-400 dark:text-white transition-colors">
                  {post?.title}
                </Link>
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt?.slice(0, 100)}</p>
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

        <div className="text-center mt-12">
          <Button variant="ghost" size="lg" asChild>
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}