import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the same build works on GitHub Pages (/my-portfolio/) and Firebase (/).
// Output stays in `build/` so the existing deploy workflows and firebase.json keep working.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { outDir: 'build' },
});
