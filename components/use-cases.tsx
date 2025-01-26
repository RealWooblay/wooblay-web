"use client"

import { motion } from "framer-motion"
import { Briefcase, Code, Rocket } from "lucide-react"

const useCases = [
  {
    icon: Briefcase,
    title: "Contractor Teams",
    description: "Streamline your remote workflow and ensure fair compensation",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Ignite community innovation by rewarding contributors with real value.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Access top talent and accelerate your development cycle.",
  },
]

export default function UseCases() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">Market Sectors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800/50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-teal to-neon-purple"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              />
              <div className="flex items-center mb-4">
                <motion.div
                  className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <useCase.icon className="w-6 h-6 text-neon-teal" />
                </motion.div>
                <h3 className="text-xl font-bold">{useCase.title}</h3>
              </div>
              <p className="text-gray-400">{useCase.description}</p>
              <motion.div
                className="absolute bottom-0 right-0 w-0 h-0 border-b-[30px] border-r-[30px] border-b-transparent border-r-neon-purple"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

