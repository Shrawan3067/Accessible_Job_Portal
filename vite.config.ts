import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite supports vite.config.ts out of the box.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
