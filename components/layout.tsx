"use client"

import { Inter, Montserrat } from "next/font/google"
import { motion } from "framer-motion"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading" })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-900 to-black text-white ${inter.variable} ${montserrat.variable} font-sans overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#7A5CFF", stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: "#00FFC8", stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
        </svg>
      </motion.div>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-64 h-64 bg-neon-purple opacity-20 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="w-96 h-96 bg-neon-teal opacity-20 rounded-full"
          animate={{
            x: [100, 0, 100],
            y: [50, 0, 50],
            scale: [1, 1.5, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="w-48 h-48 bg-neon-magenta opacity-20 rounded-full"
          animate={{
            x: [-50, 50, -50],
            y: [25, -25, 25],
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

