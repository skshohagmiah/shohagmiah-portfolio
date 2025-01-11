//@ts-nocheck
'use client'

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, User, Code2, Brain, CircleDot, Sun, Moon, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const CodeBlock = ({ title, children, delay }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-xl mb-4 w-full max-w-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
    >
      <div className={`flex items-center gap-2 px-4 py-2 ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm font-medium`}>{title}</span>
      </div>
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </motion.div>
  );
};

const TypewriterText = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);
    
    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <span className="text-indigo-400">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};


const BackgroundGrid = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}></div>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${isDark ? '#4a5568' : '#cbd5e0'} 1px, transparent 1px), linear-gradient(to bottom, ${isDark ? '#4a5568' : '#cbd5e0'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: isDark ? 0.1 : 0.2
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
    </div>
  );
};

const SocialLinks = () => {
  const links = [
    { icon: Github, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
  ];

  return (
    <div className="flex space-x-4 mt-6">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-indigo-500 transition-colors"
        >
          <link.icon size={24} />
        </motion.a>
      ))}
    </div>
  );
};

export default function EnhancedHeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300`}>
      <BackgroundGrid />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className='flex items-center justify-center'>
              <Image src={'/me.webp'} width={250} height={250} alt='shohag miah' className='rounded-full shadow-md'/>
            </div>
            <CodeBlock title="profile.js" delay={0}>
              <div className={isDark ? 'text-gray-300' : 'text-gray-800'}>
                <span className="text-indigo-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = {"{"}<br />
                &nbsp;&nbsp;<span className="text-green-400">name</span>: <span className="text-rose-500 dark:text-yellow-300">"Shohag Miah"</span>,<br />
                &nbsp;&nbsp;<span className="text-green-400">title</span>: <span className="text-rose-500 dark:text-yellow-300">"Computer Programmer"</span>,<br />
                &nbsp;&nbsp;<span className="text-green-400">experience</span>: <span className="text-orange-400">2</span>,<br />
                &nbsp;&nbsp;<span className="text-green-400">location</span>: <span className="text-rose-500 dark:text-yellow-300">"Earth.dev"</span><br />
                {"}"};
              </div>
            </CodeBlock>

            <CodeBlock title="skills.js" delay={0.2}>
              <div className={isDark ? 'text-gray-300' : 'text-gray-800'}>
                <span className="text-indigo-400">const</span>{" "}
                <span className="text-blue-400">skills</span> = [<span className="text-rose-500 dark:text-yellow-300">"Web Development"</span>, <span className="text-rose-500 dark:text-yellow-300">"DSA"</span>, <span className="text-rose-500 dark:text-yellow-300">"Problem Solving"</span>];<br /><br />
                <span className="text-indigo-400">const</span>{" "}
                <span className="text-blue-400">technologies</span> = {"{"}<br />
                &nbsp;&nbsp;<span className="text-green-400">frontend</span>: [<span className="text-rose-500 dark:text-yellow-300">"React"</span>, <span className="text-rose-500 dark:text-yellow-300">"Next.js"</span>],<br />
                &nbsp;&nbsp;<span className="text-green-400">backend</span>: [<span className="text-rose-500 dark:text-yellow-300">"Node.js"</span>, <span className="text-rose-500 dark:text-yellow-300">"Go"</span>],<br />
                &nbsp;&nbsp;<span className="text-green-400">database</span>: [<span className="text-rose-500 dark:text-yellow-300">"MongoDB"</span>, <span className="text-rose-500 dark:text-yellow-300">"PostgreSQL"</span>]<br />
                {"}"};
              </div>
            </CodeBlock>

            <CodeBlock title="terminal" delay={0.4}>
              <div className={`font-mono ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                <span className="text-green-400">$</span> <TypewriterText text="npm run start-career" delay={0.6} />
              </div>
            </CodeBlock>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className={`${isDark ? 'bg-gray-800/50' : 'bg-white/50'} p-8 rounded-lg backdrop-blur-sm shadow-xl`}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Shohag Miah
              </h1>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8 text-lg leading-relaxed`}>
                With 2 years of experience in web development, I specialize in creating responsive 
                and user-friendly applications. My passion for Data Structures and Algorithms drives 
                me to continuously improve my problem-solving skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300"
                >
                  <Code2 size={20} />
                  View Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className={`border-2 ${isDark ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-400' : 'border-indigo-500 text-indigo-500 hover:bg-indigo-500'} hover:text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all duration-300`}
                >
                  <User size={20} />
                  Get in Touch
                </motion.a>
              </div>
              <SocialLinks />
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Terminal, label: 'Clean Code', value: '2000+ commits' },
                { icon: Brain, label: 'Problem Solving', value: '500+ solutions' },
                { icon: Code2, label: 'Projects', value: '20+ completed' },
                { icon: CircleDot, label: 'Technologies', value: '15+ mastered' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={`${isDark ? 'bg-gray-800/30' : 'bg-white/30'} p-6 rounded-lg backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-indigo-400 mb-3" />
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>{stat.label}</div>
                  <div className={`text-xl font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

