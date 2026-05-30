import type { Post } from '$lib/types';

type PostFrontmatter = Omit<Post, 'slug' | 'categories'> & {
	categories?: Post['categories'];
};

export function getPosts(): Post[] {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/content/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as PostFrontmatter;
			const post = {
				...metadata,
				slug,
				categories: metadata.categories ?? []
			} satisfies Post;

			if (post.published) {
				posts.push(post);
			}
		}
	}

	return posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);
}
