import type { Handle } from '@sveltejs/kit';
import metrics from '$lib/server/metrics';

export const handle: Handle = async ({ event, resolve }) => {
	const start = performance.now();
	const method = event.request.method;
	const route = event.route.id ?? event.url.pathname;

	try {
		const response = await resolve(event);
		const durationSeconds = (performance.now() - start) / 1000;
		const statusCode = String(response.status);

		metrics.httpRequestsTotal.inc({
			method,
			route,
			status_code: statusCode
		});

		metrics.httpRequestDurationSeconds.observe(
			{
				method,
				route,
				status_code: statusCode
			},
			durationSeconds
		);

		return response;
	} catch (error) {
		const durationSeconds = (performance.now() - start) / 1000;

		metrics.httpRequestsTotal.inc({
			method,
			route,
			status_code: '500'
		});

		metrics.httpRequestDurationSeconds.observe(
			{
				method,
				route,
				status_code: '500'
			},
			durationSeconds
		);

		throw error;
	}
};