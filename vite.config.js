import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    // Ensure assets are placed correctly
    assetsDir: 'assets',
    // Ensure CNAME and other public files are copied
    copyPublicDir: true,
  },
});
