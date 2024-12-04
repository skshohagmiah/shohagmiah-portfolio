
import Link from 'next/link';
import Image from 'next/image';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
};

export default async function BlogListing({ blogPosts }: { blogPosts: BlogPost[] }) {
  


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Blog Posts
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card 
            key={post.id} 
            className="dark:bg-gray-800 dark:border-gray-700 
            overflow-hidden flex flex-col transition-all 
            hover:shadow-xl hover:scale-[1.02]"
          >
            <CardHeader className="p-0">
              <Image
                src={post.image || '/placeholder-image.jpg'}
                alt={`${post.title} cover`}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <Badge 
                variant="secondary" 
                className="mb-2"
              >
                {post.category}
              </Badge>
              <CardTitle className="text-xl font-bold mb-2">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="hover:text-purple-400 
                  dark:text-white transition-colors"
                >
                  {post.title}
                </Link>
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Clock className="mr-2 h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </CardContent>
            <CardFooter 
              className="dark:bg-gray-800 border-t 
              dark:border-gray-700 p-6"
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-sm text-gray-400">
                  {post.date}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-purple-400 hover:text-purple-300" 
                  asChild
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

    </div>
  );
}