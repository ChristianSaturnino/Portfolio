// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
// Every page stays static. Only src/pages/api/chat.ts runs on the server
// (prerender = false), as a Vercel function, so the Gemini key never reaches the browser.
export default defineConfig({
  site: 'https://christiansaturnino.com.br',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  adapter: vercel(),
  env: {
    schema: {
      GEMINI_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      // private notes about me for the assistant, base64 (npm run assistant:profile)
      ASSISTANT_PROFILE: envField.string({ context: 'server', access: 'secret', optional: true }),
      GEMINI_MODEL: envField.string({ context: 'server', access: 'secret', default: 'gemini-3.5-flash-lite' }),
      // replies per server instance per day, kept under the free quota
      ASSISTANT_DAILY_CAP: envField.number({ context: 'server', access: 'secret', default: 400 }),
      // local only: answer with a canned reply instead of calling Gemini
      ASSISTANT_MOCK: envField.boolean({ context: 'server', access: 'secret', default: false }),
    },
  },
});
