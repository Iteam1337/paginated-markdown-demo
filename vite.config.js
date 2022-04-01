import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/paginated-markdown-demo/',
  build: {
    outDir: 'docs',
    sourcemap: true,
  },
  plugins: [
    VitePWA({
        manifest: {
            display: 'fullscreen'
        }
    })
  ],
});
