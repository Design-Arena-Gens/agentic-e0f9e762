"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'

export function NavBar() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10"> 
      <div className="container-max flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,#C6A15B,#7F6A3C)]" />
          <span className="text-sm tracking-widest uppercase text-white/80">AccrueFlow?</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <Link href="#trust" className="hover:text-white transition">Trust</Link>
          <Link href="#platform" className="hover:text-white transition">Platform</Link>
          <Link href="#insights" className="hover:text-white transition">Insights</Link>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
          >
            Request Access
          </motion.a>
        </nav>
      </div>
    </div>
  )
}
