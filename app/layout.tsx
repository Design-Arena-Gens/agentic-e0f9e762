import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AccrueFlow? v2.0 ? Timeless Intelligence Platform',
  description: 'Digital Private Bank-grade intelligence. Timeless authority, institutional trust.',
  themeColor: '#0A0C10',
  icons: {
    icon: '/icon.svg'
  },
  openGraph: {
    title: 'AccrueFlow? v2.0 ? Timeless Intelligence Platform',
    description: 'Digital Private Bank-grade intelligence. Timeless authority, institutional trust.',
    url: 'https://agentic-e0f9e762.vercel.app',
    siteName: 'AccrueFlow',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
