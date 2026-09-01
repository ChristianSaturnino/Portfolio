// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO(christian): trocar pelo domínio final quando tiver (ex: https://christiansaturnino.dev)
  site: 'https://portfolio-lovat-nine-27.vercel.app',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
