import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this site under the repo name path.
export default defineConfig({
  plugins: [react()],
  base: '/Kristen-Dresses/',
});
