import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js
export default {
  base: '/your-subdirectory/', // if your site is not at the root
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
