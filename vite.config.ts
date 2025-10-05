import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Always use relative base so it works on GitHub Pages and Vercel
export default defineConfig({
  plugins: [react()],
  base: './',
})
