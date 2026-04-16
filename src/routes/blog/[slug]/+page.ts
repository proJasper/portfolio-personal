import { error } from '@sveltejs/kit';

export async function load({ params }) {
	console.log(params, 'Params');
	try {
		const post = await import(`../../../content/${params.slug}.md`);
		const meta = {
			...post.metadata,
			categories: post.metadata?.categories ?? []
		};
		// console.log(post, 'Post');
		return {
			content: post.default,
			meta
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
