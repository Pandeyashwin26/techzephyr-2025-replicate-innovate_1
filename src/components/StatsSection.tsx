import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      entries => {
        const [entry] = entries
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration)
            setValue(Math.floor(target * p))
            if (p < 1) requestAnimationFrame(tick)
            else setValue(target)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return { value, ref }
}

export default function StatsSection() {
  const stats = [
    { label: 'Users onboarded', target: 1200 },
    { label: 'Components', target: 24 },
    { label: 'FPS animations', target: 60 },
    { label: 'Lighthouse score', target: 100 },
  ]

  return (
    <section id="stats" className="py-14 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(s => {
            const { value, ref } = useCountUp(s.target)
            return (
              <div key={s.label} className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 text-center bg-white dark:bg-slate-950">
                <span ref={ref} className="block text-3xl font-bold text-blue-600 dark:text-blue-500">{value}</span>
                <span className="text-sm text-slate-600 dark:text-slate-300">{s.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
