//@ts-nocheck
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Globe, Database, Terminal, Cpu, Layers, Lock, Cloud, Palette } from 'lucide-react'

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Crafting responsive and interactive user interfaces using modern web technologies.',
    details: [
      'Proficient in HTML5, CSS3, and JavaScript (ES6+)',
      'Experience with React.js and Next.js frameworks',
      'State management with Redux and Context API',
      'Styling with Tailwind CSS and Styled Components',
    ],
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Building robust server-side applications and RESTful APIs.',
    details: [
      'Node.js and Express.js for server-side logic',
      'API development and integration',
      'Database design and management (SQL and NoSQL)',
      'Authentication and authorization implementation',
    ],
  },
  {
    icon: Cpu,
    title: 'Data Structures & Algorithms',
    description: 'Strong foundation in computer science fundamentals for efficient problem-solving.',
    details: [
      'Proficient in array manipulation and string algorithms',
      'Experience with tree and graph algorithms',
      'Understanding of dynamic programming techniques',
      'Knowledge of time and space complexity analysis',
    ],
  },
  {
    icon: Globe,
    title: 'Web Performance',
    description: 'Optimizing web applications for speed, efficiency, and user experience.',
    details: [
      'Implementing lazy loading and code splitting',
      'Optimizing assets and reducing load times',
      'Utilizing browser caching and CDNs',
      'Performance profiling and bottleneck identification',
    ],
  },
  {
    icon: Terminal,
    title: 'DevOps & Version Control',
    description: 'Streamlining development workflows and managing code collaboratively.',
    details: [
      'Proficient in Git and GitHub for version control',
      'Experience with CI/CD pipelines',
      'Familiarity with Docker containerization',
      'Deployment to cloud platforms (e.g., Vercel, Netlify)',
    ],
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    description: 'Bridging frontend and backend to create comprehensive web solutions.',
    details: [
      'End-to-end application development',
      'RESTful API design and implementation',
      'Database integration and management',
      'Server-side rendering and static site generation',
    ],
  }
]

const SkillCard = ({ icon: Icon, title, description, details }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden "
    
    >
      <div 
        className="p-6 cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center mb-4">
          <Icon className="w-8 h-8 text-purple-500 mr-3" />
          <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-900 dark:text-gray-300 mb-2">{description}</p>
        <p className="text-purple-400 text-sm">
          {isOpen ? 'Click to collapse' : 'Click to expand'}
        </p>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6"
          >
            <ul className="list-disc list-inside">
              {details.map((detail, index) => (
                <li key={index} className="mb-1">{detail}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 "   >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">Skills & Expertise</h2>
          <p className=" text-gray-600 dark:text-gray-400 text-base max-w-3xl mx-auto">
            With 2 years of hands-on experience in web development and a passion for continuous learning, 
            I've cultivated a diverse skill set that enables me to create efficient, scalable, and user-friendly digital solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}