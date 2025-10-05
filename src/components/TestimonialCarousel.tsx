import { useEffect, useRef, useState } from 'react'

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  const letters = parts.slice(0, 2).map(p => p[0]?.toUpperCase() ?? '')
  return letters.join('') || 'A'
}

function Avatar({ name, avatarUrl }: { name: string; avatarUrl?: string }) {
  const initials = getInitials(name)
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white shrink-0">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          decoding="async"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement
            el.removeAttribute('src')
          }}
        />
      ) : (
        <span className="font-semibold">
          {initials}
        </span>
      )}
    </div>
  )
}

const TESTIMONIALS: Array<{
  quote: string
  author: string
  role?: string
  url?: string
  avatarUrl?: string
}> = [
  {
    quote: '“Proud to see our brand presence built on a fast, modern stack. Clean animations, accessible components, and great performance.”',
    author: 'Ashwin',
    role: 'Founder, AshwinTech Solutions',
    url: 'https://ashwintechsolutions.site/',
    avatarUrl: undefined
  },
  {
    quote: '“Exactly the landing experience we needed—responsive, polished, and quick to iterate.”',
    author: 'Harshit Raj',
    role: 'Founder, Inos Solution',
    avatarUrl: undefined
  }
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
              <div className="flex items-start gap-4">
                <Avatar name={t.author} avatarUrl={t.avatarUrl} />
                <div>
                  <p className="text-lg leading-relaxed">{t.quote}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    — {t.url ? (
                      <a href={t.url} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">{t.author}</a>
                    ) : (
                      t.author
                    )}
                    {t.role ? ` · ${t.role}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
