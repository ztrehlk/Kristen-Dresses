import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom domain (kristenandron.com) serves from the root, so base is '/'.
// If we ever revert to the github.io subpath, change this back to
// '/Kristen-Dresses/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
