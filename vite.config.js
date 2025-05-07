import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ No tailwindcss() here — it's handled via PostCSS
export default defineConfig({
  plugins: [react()],
})
