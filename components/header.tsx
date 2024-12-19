'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Home, User, Briefcase, BookOpen, Mail } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Works', href: '/#works', icon: Briefcase },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/#contact', icon: Mail },
  ]

  return (
    <header className="shadow-lg sticky top-0 z-50 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-purple-400 transition-colors duration-200 hover:text-purple-300">
              Shohag Miah
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-4 items-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <ModeToggle />
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="mt-6">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                        >
                          <item.icon className="w-5 h-5 mr-3" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}