import { defineConfig } from 'vite';

export default defineConfig({
  base: 'paginated-markdown-demo',
  build: {
    outDir: 'docs',
    sourcemap: true,
  },
});
