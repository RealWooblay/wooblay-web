"use client"

import Head from "next/head"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Features from "../components/features"
import HowItWorks from "../components/how-it-works"
import UseCases from "../components/use-cases"
import TestimonialsStats from "../components/testimonials-stats"
import Footer from "../components/footer"

const tickerItems = [
  "New task: 'Implement AI chatbot' - $5000 reward",
  "Task completed: 'Optimize database queries' - 2 ETH paid",
  "Open bounty: 'Design new logo' - 1000 USDC available",
  "Milestone reached: 'Mobile app v2.0' - Team earned 5 BTC",
]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Wooblay: Build. Innovate. Reward.</title>
        <meta
          name="description"
          content="A next-generation platform for on-chain tasks, transparent collaboration, and real innovation."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="overflow-hidden whitespace-nowrap bg-black/50 py-2">
        <div className="animate-ticker inline-block">
          {tickerItems.map((item, index) => (
            <span key={index} className="mx-4 text-neon-teal">
              {item}
            </span>
          ))}
        </div>
      </div>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <UseCases />
        <TestimonialsStats />
      </main>

      <Footer />
    </Layout>
  )
}

