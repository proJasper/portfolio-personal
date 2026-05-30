import { DATA } from '$lib/data/resume';

export const SITE_URL = DATA.url.replace(/\/$/, '');

export function absoluteUrl(path: string = '/'): string {
	if (path.startsWith('http://') || path.startsWith('https://')) {
		return path;
	}

	const normalized = path.startsWith('/') ? path : `/${path}`;
	return normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

export function personJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: DATA.name,
		url: absoluteUrl('/'),
		image: absoluteUrl(DATA.ogImage),
		jobTitle: DATA.work[0]?.title ?? undefined,
		description: DATA.description,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Eindhoven',
			addressCountry: 'NL'
		},
		sameAs: [DATA.contact.social.LinkedIn.url]
	};
}

export function websiteJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: DATA.name,
		url: absoluteUrl('/'),
		description: DATA.description,
		author: {
			'@type': 'Person',
			name: DATA.name
		}
	};
}

export function jsonLdScript(
	data: Record<string, unknown> | Record<string, unknown>[]
): string {
	const json = JSON.stringify(data).replace(/</g, '\\u003c');
	return `<script type="application/ld+json">${json}<` + `/script>`;
}
