import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

interface ThemeContextValue {
  theme: 'light' | 'dark'
  setTheme: (t: 'light' | 'dark') => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getInitialTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
  if (stored) return stored
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<'light' | 'dark'>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      const stored = localStorage.getItem('theme')
      if (!stored) {
        setThemeState(media.matches ? 'dark' : 'light')
      }
    }
    media.addEventListener?.('change', handler)
    return () => media.removeEventListener?.('change', handler)
  }, [])

  const setTheme = (t: 'light' | 'dark') => setThemeState(t)
  const toggleTheme = () => setThemeState((p) => (p === 'dark' ? 'light' : 'dark'))

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
