import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom domain (kristenandron.com) serves from the root, so base is '/'.
// BrowserRouter's basename derives from import.meta.env.BASE_URL, so this
// also keeps client-side routing working from the apex.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
