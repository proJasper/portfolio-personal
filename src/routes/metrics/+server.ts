import type { RequestHandler } from './$types';
import metrics from '$lib/server/metrics';
import { env } from '$env/dynamic/private';

function unauthorizedResponse() {
	return new Response('Unauthorized', {
		status: 401,
		headers: {
			'WWW-Authenticate': 'Basic realm="metrics", charset="UTF-8"'
		}
	});
}

function isAuthorized(authHeader: string | null): boolean {
	if (!authHeader?.startsWith('Basic ')) {
		return false;
	}

	const encodedCredentials = authHeader.slice(6);
	let decodedCredentials = '';

	try {
		decodedCredentials = atob(encodedCredentials);
	} catch {
		return false;
	}

	const separatorIndex = decodedCredentials.indexOf(':');
	if (separatorIndex === -1) {
		return false;
	}

	const username = decodedCredentials.slice(0, separatorIndex);
	const password = decodedCredentials.slice(separatorIndex + 1);

	return (
		username === env.METRICS_BASIC_AUTH_USERNAME &&
		password === env.METRICS_BASIC_AUTH_PASSWORD
	);
}

export const GET: RequestHandler = async ({ request }) => {
	if (!env.METRICS_BASIC_AUTH_USERNAME || !env.METRICS_BASIC_AUTH_PASSWORD) {
		return new Response('Metrics credentials are not configured', { status: 500 });
	}

	if (!isAuthorized(request.headers.get('authorization'))) {
		return unauthorizedResponse();
	}

	return new Response(await metrics.register.metrics(), {
		headers: {
			'Content-Type': metrics.register.contentType,
			'Cache-Control': 'no-store'
		}
	});
};