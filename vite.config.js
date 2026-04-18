import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // Change to your repo name if different
  server: {
    port: 3000,
    open: true
  }
})