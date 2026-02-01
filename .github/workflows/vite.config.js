import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/NEW-REPOSITORY/', // Add this line! Match your repo name exactly.
})