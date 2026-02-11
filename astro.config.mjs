import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://malcicriederich-bit.github.io/',
  base: '/',
  output: 'static',
  adapter: github(),
});
