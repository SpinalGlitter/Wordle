import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  base: "/dist/",
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '../server/public/dist'),
    emptyOutDir: true
  }
});

