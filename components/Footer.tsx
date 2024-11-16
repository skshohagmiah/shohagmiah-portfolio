import Link from "next/link"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Shohag Miah. All rights reserved.</p>
        </div>
        <nav className="flex space-x-4 mb-4 sm:mb-0">
          <Link href="/" className="text-sm hover:text-gray-100 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-sm hover:text-gray-100 transition-colors">
            Projects
          </Link>
          <Link href="/blog" className="text-sm hover:text-gray-100 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-sm hover:text-gray-100 transition-colors">
            About
          </Link>
        </nav>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-gray-100 transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  )
}