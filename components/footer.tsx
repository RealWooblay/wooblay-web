"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-black/50 py-12 relative">
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-teal to-neon-purple"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Wooblay
            </Link>
          </div>
          {/* <nav className="flex flex-wrap justify-center md:justify-end space-x-6 mb-8 md:mb-0">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link href="/docs" className="text-gray-400 hover:text-white transition-colors duration-300">
              Documentation
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </nav> */}
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Wooblay. All rights reserved.</p>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="lg"
          className="bg-neon-purple hover:bg-neon-purple/80 text-white transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/50"
        >
          Transform Your Team Today
        </Button>
      </div>
    </footer>
  )
}

