import { DATA } from '$lib/data/resume';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const project = DATA.projects.find((item) => item.slug === params.slug);

	if (!project) {
		error(404, 'Project not found');
	}

	return { project };
};
