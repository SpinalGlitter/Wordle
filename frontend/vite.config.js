import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  base: "/static/",
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '../server/public/dist'),
    emptyOutDir: true
  }
});

