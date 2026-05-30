import { browser, dev } from '$app/environment';

const PRODUCTION_HOSTS = new Set(['jasperrobinson.nl', 'www.jasperrobinson.nl']);

let initialized = false;

export function isAnalyticsEnabled(): boolean {
	if (!browser || dev) return false;
	return PRODUCTION_HOSTS.has(window.location.hostname);
}

export function initAnalytics(measurementId: string): void {
	if (!isAnalyticsEnabled() || initialized) return;

	initialized = true;

	window.dataLayer = window.dataLayer || [];
	window.gtag = function gtag(...args: unknown[]) {
		window.dataLayer.push(args);
	};

	window.gtag('js', new Date());
	window.gtag('config', measurementId, { send_page_view: false });

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
	document.head.appendChild(script);
}

export function trackPageView(pagePath?: string): void {
	if (!isAnalyticsEnabled() || typeof window.gtag !== 'function') return;

	window.gtag('event', 'page_view', {
		page_path: pagePath ?? `${window.location.pathname}${window.location.search}`,
		page_location: window.location.href,
		page_title: document.title
	});
}
