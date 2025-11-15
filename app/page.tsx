"use client";

import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { GlobeHero } from '@/components/Globe'
import { motion } from 'framer-motion'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="container-max w-full pt-12 md:pt-16">
        <section className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-6">
            <motion.h1 className="text-4xl md:text-5xl font-medium leading-tight text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AccrueFlow? v2.0
              <span className="block text-white/70">The Timeless Intelligence Platform</span>
            </motion.h1>
            <motion.p className="text-white/60"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
            >
              Digital Private Bank-grade experience. Frictionless authority. Built to inspire institutional trust without a single call.
            </motion.p>
            <motion.div className="flex gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <a href="#platform" className="btn btn-primary">Explore Platform</a>
              <a href="#trust" className="btn btn-ghost">Why Trust Us</a>
            </motion.div>
          </div>
          <div className="md:col-span-7">
            <GlobeHero />
          </div>
        </section>

        <section id="trust" className="mt-24 space-y-8">
          <div className="flex items-end justify-between">
            <h2 className="text-xl tracking-widest uppercase text-white/70">Institutional Trust</h2>
            <div className="h-px flex-1 ml-6 bg-white/10" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Timeless Aesthetic',
                desc: 'Understated luxury in motion. Every pixel earns confidence.'
              },
              {
                title: 'Operational Security',
                desc: 'Principled, privacy-first architecture with zero dark patterns.'
              },
              {
                title: 'Verifiable Intelligence',
                desc: 'Evidence-backed insights with clear provenance and lineage.'
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="card p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
              >
                <div className="text-sm tracking-widest uppercase text-brand-gold/90">{String(i + 1).padStart(2, '0')}</div>
                <div className="mt-3 text-lg text-white">{card.title}</div>
                <div className="mt-2 text-white/60">{card.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="platform" className="mt-24 space-y-8">
          <div className="flex items-end justify-between">
            <h2 className="text-xl tracking-widest uppercase text-white/70">The Platform</h2>
            <div className="h-px flex-1 ml-6 bg-white/10" />
          </div>
          <div className="grid md:grid-cols-12 gap-6">
            <motion.div className="card p-6 md:col-span-5" whileHover={{ y: -4 }}>
              <div className="text-white text-lg">Signals Engine</div>
              <div className="text-white/60 mt-2">Structured + unstructured data synthesized into prioritized decision signals.</div>
            </motion.div>
            <motion.div className="card p-6 md:col-span-7" whileHover={{ y: -4 }}>
              <div className="text-white text-lg">Briefing Workspace</div>
              <div className="text-white/60 mt-2">Client-grade briefings, evidence trails, and audit-ready annotations.</div>
            </motion.div>
            <motion.div className="card p-6 md:col-span-6" whileHover={{ y: -4 }}>
              <div className="text-white text-lg">Context Memory</div>
              <div className="text-white/60 mt-2">Continuously compounding context ? a secure institutional memory.</div>
            </motion.div>
            <motion.div className="card p-6 md:col-span-6" whileHover={{ y: -4 }}>
              <div className="text-white text-lg">Governance Layer</div>
              <div className="text-white/60 mt-2">Role-based access, provenance locks, and red team verification.</div>
            </motion.div>
          </div>
        </section>

        <section id="insights" className="mt-24 space-y-8">
          <div className="flex items-end justify-between">
            <h2 className="text-xl tracking-widest uppercase text-white/70">Insights</h2>
            <div className="h-px flex-1 ml-6 bg-white/10" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <motion.article key={i} className="card p-6" whileHover={{ y: -4 }}>
                <div className="text-white/70 text-xs">Briefing</div>
                <div className="text-white mt-2 text-lg">Quarterly Risk Radar ? Q{i}</div>
                <div className="text-white/60 mt-2">A discreet synthesis of macro signals shaping capital allocation.</div>
                <a className="mt-4 inline-flex text-brand-gold/90 hover:text-brand-gold" href="#">Open Briefing ?</a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24">
          <div className="card p-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
            <div>
              <div className="text-xl text-white">Request Private Access</div>
              <div className="text-white/60 mt-2">We onboard a limited number of relationships per quarter.</div>
            </div>
            <a href="mailto:access@accrueflow.com" className="btn btn-primary">Initiate Diligence</a>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
