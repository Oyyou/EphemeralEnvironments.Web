import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      'api': path.resolve(__dirname, 'src/api'),
      'components': path.resolve(__dirname, 'src/components'),
      'routes': path.resolve(__dirname, 'src/routes'),
    }
  }
})
