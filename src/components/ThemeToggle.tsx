import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
    >
      <span className="i-theme w-4 h-4">
        {isDark ? '🌙' : '☀️'}
      </span>
      <span>{isDark ? 'Dark' : 'Light'}</span>
    </button>
  )
}
