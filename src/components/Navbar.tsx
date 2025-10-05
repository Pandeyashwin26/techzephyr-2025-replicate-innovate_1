import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#stats', label: 'Stats' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 bg-white/70 dark:bg-slate-950/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold">TechZephyr 2025</a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <button className="md:hidden px-2 py-1 border rounded" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 px-4 py-3 space-y-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-slate-700 dark:text-slate-200">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  )
}
