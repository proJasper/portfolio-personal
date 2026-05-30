import { browser } from '$app/environment';

export function trackPageView(measurementId: string, pagePath?: string): void {
	if (!browser || typeof window.gtag !== 'function') return;

	window.gtag('config', measurementId, {
		page_path: pagePath ?? `${window.location.pathname}${window.location.search}`
	});
}
