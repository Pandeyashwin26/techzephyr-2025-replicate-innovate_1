import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="pt-12 md:pt-20 pb-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">TechZephyr 2025 — Replicate & Innovate</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">A pixel-perfect, performant landing page showcasing modern React, Tailwind, and Framer Motion.</p>
          <div className="mt-6 flex gap-3">
            <a href="#features" className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Explore features</a>
            <a href="#contact" className="px-5 py-2 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">Contact us</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 border border-slate-200 dark:border-slate-800" />
        </motion.div>
      </div>
    </section>
  )
}
