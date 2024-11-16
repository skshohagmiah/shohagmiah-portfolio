'use client';
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Clock, Search } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const blogPosts = [
    {
      title: "10 Essential JavaScript Concepts Every Developer Should Know",
      excerpt: "Dive into the core JavaScript concepts that will elevate your coding skills and make you a more efficient developer.",
      image: "/placeholder.png",
      date: "May 15, 2023",
      readTime: "8 min read",
      category: "JavaScript",
      slug: "essential-javascript-concepts",
    },
    {
      title: "Building Responsive Layouts with CSS Grid",
      excerpt: "Learn how to create complex, responsive layouts easily using CSS Grid, with practical examples and best practices.",
      image: "/placeholder.png",
      date: "June 2, 2023",
      readTime: "6 min read",
      category: "CSS",
      slug: "responsive-layouts-css-grid",
    },
    {
      title: "Getting Started with React Hooks",
      excerpt: "Explore the power of React Hooks and how they can simplify your components and make your code more reusable.",
      image: "/placeholder.png",
      date: "June 20, 2023",
      readTime: "10 min read",
      category: "React",
      slug: "react-hooks-introduction",
    },
    {
      title: "Mastering Git: Advanced Tips and Tricks",
      excerpt: "Take your Git skills to the next level with these advanced techniques that will streamline your workflow and collaboration.",
      image: "/placeholder.png",
      date: "July 5, 2023",
      readTime: "12 min read",
      category: "Git",
      slug: "advanced-git-tips",
    },
    {
      title: "Introduction to TypeScript: Why and How to Use It",
      excerpt: "Discover the benefits of TypeScript and learn how to integrate it into your JavaScript projects for improved code quality and developer experience.",
      image: "/placeholder.png",
      date: "July 18, 2023",
      readTime: "9 min read",
      category: "TypeScript",
      slug: "typescript-introduction",
    },
    {
      title: "Optimizing React Performance: Best Practices and Tools",
      excerpt: "Learn how to identify and resolve performance bottlenecks in your React applications, ensuring smooth user experiences.",
      image: "/placeholder.png",
      date: "August 3, 2023",
      readTime: "11 min read",
      category: "React",
      slug: "react-performance-optimization",
    },
  ]

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))]

  const filteredPosts = blogPosts.filter(post => 
    (categoryFilter === 'all' || post.category === categoryFilter) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Blog Posts</h1>
          <p className="text-xl text-gray-400">Explore our latest articles, tutorials, and insights</p>
        </header>

        <div className="mb-8 flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={`${post.title} cover`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <Badge className="mb-2">{post.category}</Badge>
                <CardTitle className="text-xl font-bold mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-purple-400 text-white transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-800 border-t border-gray-700 p-6">
                <div className="flex justify-between items-center w-full">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-400">No posts found. Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}