import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import reactIcons from 'vite-plugin-react-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
})
