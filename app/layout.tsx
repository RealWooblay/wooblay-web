import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wooblay',
  description: 'A next-generation platform for on-chain tasks, transparent collaboration, and real innovation.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
