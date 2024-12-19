//@ts-nocheck
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Server } from 'lucide-react';

const ServiceCard = ({ service }) => (
  <motion.div
    layout
    className="dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="p-6">
      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
        <service.icon className="w-6 h-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold dark:text-white mb-2">{service.title}</h3>
      <p className="text-gray-900 dark:text-gray-400 mb-4">{service.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {service.technologies.map((tech, index) => (
          <span key={index} className="bg-purple-500 text-white text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive and modern web applications with cutting-edge technologies and best practices.",
      icon: Code,
      technologies: ["React", "Next.js", "TailwindCSS", "TypeScript"],
      features: [
        "Single Page Applications",
        "Progressive Web Apps",
        "Responsive Designs",
        "Performance Optimization"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Building native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: Smartphone,
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      features: [
        "Cross-platform Solutions",
        "Native Performance",
        "Offline Functionality",
        "Push Notifications"
      ]
    },
    {
      title: "Backend Development",
      description: "Developing scalable and secure backend solutions using Go and Node.js with modern architecture patterns.",
      icon: Server,
      technologies: ["Go", "Node.js", "MongoDB", "PostgreSQL"],
      features: [
        "RESTful APIs",
        "Microservices",
        "Database Design",
        "Cloud Integration"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">My Services</h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Delivering comprehensive solutions across web, mobile, and backend development,
            with a focus on performance, scalability, and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}