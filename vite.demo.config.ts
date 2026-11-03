import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Demo site: specimen (index), marketing website, Kampagne examples.
// Brand assets are served from /assets (publicDir).
export default defineConfig({
  root: 'demo',
  publicDir: resolve(__dirname, 'public'),
  base: './',
  plugins: [react()],
  resolve: { alias: { '@fei/design-system': resolve(__dirname, 'src/index.ts') } },
  build: {
    outDir: resolve(__dirname, 'dist-demo'),
    emptyOutDir: true,
    assetsDir: '_app', // keep /assets for the brand files
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'demo/index.html'),
        website: resolve(__dirname, 'demo/website.html'),
        kampagne: resolve(__dirname, 'demo/kampagne.html'),
      },
    },
  },
});
