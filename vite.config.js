import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: false,
    hmr: {
      protocol: 'http',
      port: 5173,
      overlay: true // Enable the HMR error overlay to see errors
    }
  },
  preview: {
    port: 4173,
    host: true
  },
  // Re-enable optimization but with safe settings
  optimizeDeps: {
    disabled: false,
    esbuildOptions: {
      target: 'es2020'
    }
  },
  build: {
    minify: 'terser',
    sourcemap: true, // Enable sourcemaps for debugging
    chunkSizeWarningLimit: 1000
  },
  css: {
    devSourcemap: true // Enable CSS sourcemaps
  }
})
