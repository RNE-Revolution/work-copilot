import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Library build: dist/index.js (ESM) + dist/styles.css.
export default defineConfig({
  plugins: [react()],
  publicDir: false, // brand assets ship from /assets, not inside dist
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: () => 'index.js',
      cssFileName: 'styles',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    // keep Google-Fonts @import and token comments intact
    cssMinify: false,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    css: false,
    include: ['src/**/*.test.tsx'],
  },
});
