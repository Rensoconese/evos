// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://evos.com.ar',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }), 
    mdx()
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => {
            return relativeSourcePath;
          }
        }
      }
    },
    optimizeDeps: {
      exclude: []
    },
    server: {
      watch: {
        ignored: ['**/node_modules/**', '**/.git/**']
      }
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});