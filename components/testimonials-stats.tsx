"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const testimonials = [
  {
    quote: "Woobly transformed our remote team's productivity.",
    author: "Jane Doe, CTO",
  },
  {
    quote: "The transparency in task rewards is game-changing.",
    author: "John Smith, Open Source Contributor",
  },
  {
    quote: "Wooblay helped us scale faster than ever, transforming our workflow and team engagement.",
    author: "Alice Johnson, Founder",
  },
]

const stats = [
  { label: "Remote Developers", value: 86 },
  { label: "Feel Undervalued", value: 48 },
  { label: "Deserve Fair Compensation", value: 100 },
]

export default function TestimonialsStats() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-8">What People Say</h2>
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 rounded-lg p-6 max-w-2xl mx-auto text-center"
          >
            <p className="text-xl mb-4">"{testimonials[currentTestimonial].quote}"</p>
            <p className="text-neon-teal">{testimonials[currentTestimonial].author}</p>
          </motion.div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-8">The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.h3
                  className="text-4xl font-bold text-neon-teal mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                >
                  {stat.value}%
                </motion.h3>
                <p className="text-gray-400">{stat.label}</p>
                <motion.div
                  className="h-2 bg-neon-purple mt-2 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.value}%` }}
                  transition={{ duration: 1, delay: 1 + index * 0.1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

