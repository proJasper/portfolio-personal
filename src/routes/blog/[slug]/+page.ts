import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../content/${params.slug}.md`);
		const meta = {
			...post.metadata,
			slug: params.slug,
			categories: post.metadata?.categories ?? []
		};

		return {
			content: post.default,
			meta
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
