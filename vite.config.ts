import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Temporarily on the github.io subpath while DNS for kristenandron.com is set
// up at Squarespace. Switch back to '/' once the custom domain is live so the
// site serves correctly from the apex.
export default defineConfig({
  plugins: [react()],
  base: '/Kristen-Dresses/',
});
