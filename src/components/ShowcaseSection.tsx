import { useEffect, useState } from 'react'

const IMAGES = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0e6?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555421689-03c5ab22e4d8?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1200&auto=format&fit=crop',
]

export default function ShowcaseSection() {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="showcase" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Showcase</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map(src => (
            <button key={src} onClick={() => setActive(src)} className="group relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
              <img src={src} alt="Showcase" loading="lazy" className="h-40 w-full object-cover group-hover:scale-105 transition-transform" />
            </button>
          ))}
        </div>
      </div>
      {active && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setActive(null)}>
          <img src={active} alt="Preview" className="max-h-[80vh] rounded-lg shadow-2xl" />
        </div>
      )}
    </section>
  )
}
