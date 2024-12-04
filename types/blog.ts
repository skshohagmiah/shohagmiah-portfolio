// types/blog.ts
export interface BlogPost {
    slug: string;
    title: string;
    content: string;
    date: string;
    excerpt?: string;
    tags?: string[];
  }
  
  export interface BlogFrontMatter {
    title: string;
    date: string;
    tags?: string[];
    excerpt?: string;
  }