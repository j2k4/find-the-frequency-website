import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    strictPort: false,
    allowedHosts: ['b32f745fed42.ngrok-free.app'],
    hmr: {
      clientPort: 443
    }
  },
  preview: {
    host: true,
    strictPort: false,
    allowedHosts: ['b32f745fed42.ngrok-free.app']
  }
})