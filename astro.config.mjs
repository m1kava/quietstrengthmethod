import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://quietstrengthmethod.com',  // <- MUST match
	integrations: [sitemap()],
});
