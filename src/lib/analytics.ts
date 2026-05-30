import { browser } from '$app/environment';

export function createGtagSnippet(measurementId: string): string {
	const scriptOpen = '<script';
	const scriptClose = '<' + '/script>';

	return (
		`${scriptOpen} async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}">${scriptClose}` +
		`${scriptOpen}>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}');
${scriptClose}`
	);
}

export function trackPageView(measurementId: string, pagePath?: string): void {
	if (!browser || typeof window.gtag !== 'function') return;

	window.gtag('config', measurementId, {
		page_path: pagePath ?? `${window.location.pathname}${window.location.search}`
	});
}
