import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config() // Load environment variables from .env file

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  define: {
    'process.env.GOOGLE_API_KEY': JSON.stringify(process.env.GOOGLE_API_KEY)
  }
})
