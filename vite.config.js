import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // base: '/Trendy-Office/',
  server: {
    allowedHosts: ['9e25-45-245-99-157.ngrok-free.app']
  }
})