import { Counter, Histogram, Registry, collectDefaultMetrics } from 'prom-client';

type MetricsBundle = {
	register: Registry;
	httpRequestsTotal: Counter<'method' | 'route' | 'status_code'>;
	httpRequestDurationSeconds: Histogram<'method' | 'route' | 'status_code'>;
};

const globalForMetrics = globalThis as unknown as {
	__portfolioMetrics?: MetricsBundle;
};

function createMetricsBundle(): MetricsBundle {
	const register = new Registry();

	collectDefaultMetrics({
		register,
		prefix: 'portfolio_'
	});

	const httpRequestsTotal = new Counter({
		name: 'portfolio_http_requests_total',
		help: 'Total number of HTTP requests',
		labelNames: ['method', 'route', 'status_code'],
		registers: [register]
	});

	const httpRequestDurationSeconds = new Histogram({
		name: 'portfolio_http_request_duration_seconds',
		help: 'Duration of HTTP requests in seconds',
		labelNames: ['method', 'route', 'status_code'],
		buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.3, 1, 3, 10],
		registers: [register]
	});

	return {
		register,
		httpRequestsTotal,
		httpRequestDurationSeconds
	};
}

const metrics = globalForMetrics.__portfolioMetrics ?? createMetricsBundle();

if (!globalForMetrics.__portfolioMetrics) {
	globalForMetrics.__portfolioMetrics = metrics;
}

export default metrics;