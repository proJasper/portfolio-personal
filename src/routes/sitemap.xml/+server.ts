import { getPosts } from '$lib/content/posts';
import { SITE_URL } from '$lib/seo';
import type { RequestHandler } from './$types';

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

export const GET: RequestHandler = async () => {
	const posts = getPosts();
	const pages = [
		{ loc: `${SITE_URL}/`, lastmod: new Date().toISOString() },
		{ loc: `${SITE_URL}/blog`, lastmod: new Date().toISOString() },
		...posts.map((post) => ({
			loc: `${SITE_URL}/blog/${post.slug}`,
			lastmod: new Date(post.date.replaceAll('-', '/')).toISOString()
		}))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${escapeXml(page.loc)}</loc>
    <lastmod>${page.lastmod}</lastmod>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
