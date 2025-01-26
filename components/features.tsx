"use client"

import { motion } from "framer-motion"
import { ShieldCheck, BarChart3, Lock, Wallet } from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: ShieldCheck,
    title: "On-Chain Incentives",
    description: "Secure, verifiable payments and stake transfers.",
  },
  {
    icon: BarChart3,
    title: "AI-Driven Metrics",
    description: "Real-time performance tracking.",
  },
  {
    icon: Lock,
    title: "Private & Public Tasks",
    description: "For both confidential projects and community-driven initiatives.",
  },
  {
    icon: Wallet,
    title: "Web3 Abstraction",
    description: "You wont event notice.",
  },
]

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-neon-teal/20"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
            >
              <motion.div
                animate={{
                  scale: hoveredFeature === index ? [1, 1.2, 1] : 1,
                  rotate: hoveredFeature === index ? [0, 10, -10, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-12 h-12 mb-4 text-neon-teal" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

