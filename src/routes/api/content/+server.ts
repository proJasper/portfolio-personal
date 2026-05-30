import { getPosts } from '$lib/content/posts';
import { json } from '@sveltejs/kit';

export async function GET() {
	const posts = getPosts();
	return json(posts);
}
