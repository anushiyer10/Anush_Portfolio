import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'Anush_Portfolio', // your repo name
  build: {
    // Minify JS (default is 'esbuild', can also use 'terser')
    minify: 'esbuild',
    // Disable source maps for production (faster load)
    sourcemap: false,
    // Split vendor code to improve caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }
})
