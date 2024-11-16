'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedProfileImage from './AnimatedProfileImage'

const GRID_WIDTH = 80
const GRID_HEIGHT = 40

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const beams = useRef<Beam[]>([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Initialize beams (increased from 5 to 20)
        for (let i = 0; i < 20; i++) {
            beams.current.push(new Beam(canvas.width, canvas.height))
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw grid (reduced density)
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
            ctx.lineWidth = 1

            for (let x = 0; x < canvas.width; x += GRID_WIDTH) {
                ctx.beginPath()
                ctx.moveTo(x, 0)
                ctx.lineTo(x, canvas.height)
                ctx.stroke()
            }

            for (let y = 0; y < canvas.height; y += GRID_HEIGHT) {
                ctx.beginPath()
                ctx.moveTo(0, y)
                ctx.lineTo(canvas.width, y)
                ctx.stroke()
            }

            // Update and draw beams
            beams.current.forEach((beam) => {
                beam.update(canvas.width, canvas.height)
                beam.draw(ctx)
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return (
        <div className="relative min-h-screen flex flex-col gap-8 md:flex-row-reverse items-center justify-center overflow-hidden bg-gray-900">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
            <div className='flex items-center justify-center'>
                <AnimatedProfileImage />
            </div>
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4  bg-gradient-to-r from-purple-300 to-purple-700 bg-clip-text text-transparent"
                >
                    Shohag Miah
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 mb-6"
                >
                    Computer Programmer | Web Developer | DSA Enthusiast
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-3xl mx-auto text-gray-400 mb-8"
                >
                    <p className="mb-4">
                        With 2 years of experience in web development, I specialize in creating responsive and user-friendly applications.
                        My passion for Data Structures and Algorithms drives me to continuously improve my problem-solving skills.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex justify-center space-x-4"
                >
                    <a
                        href="#projects"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

class Beam {
    x: number
    y: number
    radius: number
    speed: number
    angle: number
    hue: number

    constructor(width: number, height: number) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.radius = Math.random() * 1.5 + 0.5 // Reduced size for more subtle effect
        this.speed = Math.random() * 1.5 + 0.5 // Slightly reduced speed
        this.angle = Math.random() * Math.PI * 2
        this.hue = Math.random() * 60 + 200 // Blue to purple hues
    }

    update(width: number, height: number) {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        if (this.x < 0 || this.x > width) this.angle = Math.PI - this.angle
        if (this.y < 0 || this.y > height) this.angle = -this.angle
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 0.6)`
        ctx.fill()
    }
}