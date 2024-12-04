import { MDXRemote } from 'next-mdx-remote/rsc'

export default function MDXPreview({ content }: { content: string }) {
  return <MDXRemote source={content} />
}

