import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="p-6 shadow-sm sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
        <h1 className="text-xl font-semibold">TechZephyr 2025 — Replicate & Innovate</h1>
      </header>
      <main className="p-6">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="text-3xl font-bold mb-2">Landing page scaffold</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Deployed starter with React + Vite + Tailwind + Framer Motion. Replace this with your sections.
          </p>
        </motion.section>
      </main>
      <footer className="p-6 text-sm text-slate-500">© 2025 Catch Us If You Can</footer>
    </div>
  )
}
