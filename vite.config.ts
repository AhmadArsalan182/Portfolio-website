import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    proxy: {},
    cors: true,
    hmr: {
      host: '4139-202-83-161-98.ngrok-free.app'
    }
  }
});
