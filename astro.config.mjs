// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://christiansaturnino.com.br',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
