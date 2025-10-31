// src/pages/rss.xml.ts
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '../consts';

export async function GET(context) {
	const posts = (await getCollection('blog'))
		.filter(p => !('draft' in p.data && p.data.draft))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: SITE_URL,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}/`,
		})),
	});
}
