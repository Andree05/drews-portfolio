
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // This ensures process.env is defined even if the key is missing, avoiding a crash
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ""),
    'process.env': {} 
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    port: 3000
  }
});
