import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { remarkNbsp } from './src/lib/nbsp.mjs';

export default defineConfig({
  site: 'https://yanusheuski.com',
  integrations: [mdx({ remarkPlugins: [remarkNbsp] })],
});
