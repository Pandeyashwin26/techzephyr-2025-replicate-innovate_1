import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use subpath only for GitHub Pages project site
  base: isGitHubPages ? '/techzephyr-2025-replicate-innovate_1/' : '/',
})
