"use client"

import { motion } from "framer-motion"
import { BarChart, Bar, ResponsiveContainer } from "recharts"

const stats = [
  { label: "of devs work remotely", value: 86 },
  { label: "feel undervalued", value: 48 },
  { label: "deserve fair compensation", value: 100 },
]

export default function Stats() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-4xl font-bold text-neon-teal mb-2">{stat.value}%</h3>
              <p className="text-gray-400 mb-4">{stat.label}</p>
              <div className="h-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[{ value: stat.value }]}>
                    <Bar dataKey="value" fill="#00FFC8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

