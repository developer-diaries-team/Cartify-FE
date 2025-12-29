import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
// https://vitejs.dev/config/
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist', // Vite uses 'dist' by default, not 'build'
    sourcemap: true,
  }
})
