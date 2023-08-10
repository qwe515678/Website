import './globals.css'
import React from 'react'
import {Inter} from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin", 'cyrillic']})
export const metadata: Metadata = {
  title: "Dmitry's Portfolio",
  description: "A personal portfolio website built on Next.js + Sanity.",
  openGraph: {
    images: "/(site)/icons/graph.jpg"
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>{children}</body>
    </html>
  )
}
