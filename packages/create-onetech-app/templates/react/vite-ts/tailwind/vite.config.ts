import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// enjoy tailwindcss https://tailwindcss.com/docs/installation/using-vite
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
