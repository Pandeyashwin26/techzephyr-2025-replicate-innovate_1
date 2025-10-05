import { motion } from 'framer-motion'

export function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow"
    >
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">{desc}</p>
    </motion.div>
  )
}

const FEATURES = [
  { title: 'Responsive Navigation', desc: 'Smooth scrolling navbar with animated mobile menu.' },
  { title: 'Scroll Progress', desc: 'Top bar showing page completion percentage.' },
  { title: 'Dark/Light Mode', desc: 'Theme switcher with system preference and persistence.' },
  { title: 'Hero Parallax', desc: 'Engaging hero with motion effects.' },
  { title: 'Interactive Cards', desc: 'Hover elevation and motion for delight.' },
  { title: 'Animated Stats', desc: 'Numbers count up when visible.' },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Features</h2>
          <p className="text-slate-600 dark:text-slate-300">Carefully crafted UX enhancements and performance-friendly animations.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {FEATURES.map(f => (
            <FeatureCard key={f.title} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
