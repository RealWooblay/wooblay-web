"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Zap } from "lucide-react"

const steps = [
  {
    icon: TrendingUp,
    title: "List Task",
    description: "Define and post your project needs",
  },
  {
    icon: Users,
    title: "Attract Talent",
    description: "Find skilled contributors",
  },
  {
    icon: Zap,
    title: "Execute",
    description: "Collaborate & distribute compensation instantly.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">How It Works</h2>
        <div className="relative">
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-700"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-0.5 bg-neon-teal"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <div className="flex justify-between items-center relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center w-1/3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-8 h-8 text-neon-teal" />
                </motion.div>
                <h3 className="text-lg font-bold mb-1 text-center">{step.title}</h3>
                <p className="text-sm text-gray-400 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

