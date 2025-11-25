import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Deploy-a-React-App-to-GitHub-io/',  // 👈 REQUIRED FOR GITHUB PAGES
})