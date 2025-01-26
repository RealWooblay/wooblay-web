"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-teal to-neon-purple"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Woobly: Build. Innovate. Reward.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A task-based, on-chain platform for teams and developers
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-neon-purple hover:bg-neon-purple/80 text-white transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/50"
            >
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-neon-teal to-neon-purple opacity-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M150 0L185.45 114.55L300 150L185.45 185.45L150 300L114.55 185.45L0 150L114.55 114.55L150 0Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FFC8" />
              <stop offset="1" stopColor="#7A5CFF" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  )
}

