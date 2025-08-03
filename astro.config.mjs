// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import preact from '@astrojs/preact';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site: "https://example.com",
  integrations: [preact()]
});