'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, GitlabIcon as GitHub, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and secure payment integration.',
    image: '/placeholder.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://example-ecommerce.com',
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
  },
  {
    title: 'Task Management App',
    description: 'A responsive web application for efficient task organization and team collaboration.',
    image: '/placeholder.png',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
    liveLink: 'https://example-taskmanager.com',
    githubLink: 'https://github.com/yourusername/task-manager',
  },
  {
    title: 'Weather Forecast Dashboard',
    description: 'An interactive dashboard displaying real-time weather data and forecasts using external APIs.',
    image: '/placeholder.png',
    tags: ['React', 'Redux', 'Chart.js', 'OpenWeatherMap API'],
    liveLink: 'https://example-weatherapp.com',
    githubLink: 'https://github.com/yourusername/weather-dashboard',
  },
]

const ProjectCard = ({ project, isSelected, onClick }) => (
  <motion.div
    layout
    onClick={onClick}
    className={`dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden cursor-pointer transition-all duration-300 ${
      isSelected ? 'col-span-2 row-span-2' : ''
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="relative h-48 md:h-64">
      <Image
        src={project.image}
        alt={project.title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 transform hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-900 dark:text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="bg-purple-500 text-white text-xs px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
        >
          <ExternalLink size={18} className="mr-1" />
          Live Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
        >
          <GitHub size={18} className="mr-1" />
          GitHub
        </a>
      </div>
    </div>
  </motion.div>
)

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="py-20 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">Featured Projects</h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore a selection of my recent projects, showcasing my skills in web development,
            problem-solving, and creating user-centric applications.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isSelected={selectedProject === index}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              />
            ))}
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="/projects"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            View All Projects
            <ChevronRight size={20} className="ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}