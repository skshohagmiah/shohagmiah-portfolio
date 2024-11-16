'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Home, User, Briefcase, BookOpen, Mail } from 'lucide-react'
import { ModeToggle } from './ModeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Works', href: '/works', icon: Briefcase },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  return (
    <header className=" shadow-lg sticky top-0 z-50 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-purple-400 transition-colors duration-200 hover:text-purple-300">
              Shohag Miah
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium  hover:bg-gray-200 transition-colors duration-200"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            <ModeToggle />
            </ul>
          </nav>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md  transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium  transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
        </div>
      )}
    </header>
  )
}