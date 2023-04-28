import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Discord-Sidebar-using-Tailwind/',
  plugins: [
    react()
  ],
})
