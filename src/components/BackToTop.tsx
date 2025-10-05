import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 rounded-full bg-blue-600 text-white px-4 py-2 shadow-lg hover:bg-blue-700"
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}
