// components/MarkdownPreview.tsx
'use client'

import { markdownToHtml } from '@/lib/utils/slugify';
import { useState, useEffect } from 'react';


interface MarkdownPreviewProps {
  content: string;
}

export default function MarkdownPreview({ content }: MarkdownPreviewProps) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    async function convertMarkdown() {
      const html = await markdownToHtml(content);
      setHtmlContent(html);
    }

    convertMarkdown();
  }, [content]);

  return (
    <div className="markdown-preview p-4 bg-gray-50 rounded-lg mb-4">
      <h3 className="text-xl font-bold mb-2">Preview</h3>
      <div 
        className="prose" 
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    </div>
  );
}