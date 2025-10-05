import { useEffect, useRef, useState } from 'react'

const TESTIMONIALS = [
  { quote: 'This landing page is blazing fast and delightful.', author: 'Alex J.' },
  { quote: 'Animations feel smooth and never get in the way.', author: 'Priya S.' },
  { quote: 'A great example of modern frontend craftsmanship.', author: 'Liam K.' },
]

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (hover) return
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 3000)
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [hover])

  return (
    <section id="testimonials" className="py-14 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-3xl px-4" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What people say</h2>
        <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 min-h-[160px]">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.author} className={`transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0 absolute inset-8'}`}>
              <p className="text-lg">“{t.quote}”</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
