import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://yanusheuski.pro', // TODO: confirm domain
  integrations: [mdx()],
});
