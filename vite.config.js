import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/MyPortfolio/",  // Replace with your exact GitHub repository name
  plugins: [react()],
});
