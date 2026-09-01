// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO(christian): trocar pelo domínio final (ex: https://christiansaturnino.dev)
  site: 'https://christian-saturnino.vercel.app',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
