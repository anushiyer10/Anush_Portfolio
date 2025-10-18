import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'Anush_Portfolio'  // <-- Replace YOUR_REPO_NAME with your GitHub repo name
})
