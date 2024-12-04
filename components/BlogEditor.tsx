// components/BlogEditor.tsx
'use client'

import { useState } from 'react';
import { createBlogPost } from '@/lib/actions/blog-actions';
import MarkdownPreview from './MarkdownPreview';


export default function BlogEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form action={createBlogPost}>
        <div className="mb-4">
          <label 
            htmlFor="title" 
            className="block text-sm font-medium text-gray-700"
          >
            Blog Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="mb-4">
          <label 
            htmlFor="content" 
            className="block text-sm font-medium text-gray-700"
          >
            Blog Content
          </label>
          <textarea
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            rows={10}
            placeholder="Write your blog in Markdown"
            required
          />
        </div>

        {/* Markdown Cheat Sheet */}
        <div className="mb-4 p-4 bg-gray-100 rounded">
          <h4 className="font-bold mb-2">Markdown Cheat Sheet</h4>
          <ul className="list-disc pl-5">
            <li>`# Heading 1`</li>
            <li>`## Heading 2`</li>
            <li>`*Italic*`</li>
            <li>`**Bold**`</li>
            <li>`[Link](url)`</li>
          </ul>
        </div>

        {/* Markdown Preview */}
        {content && <MarkdownPreview content={content} />}

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Create Blog Post
        </button>
      </form>
    </div>
  );
}