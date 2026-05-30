<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { trackPageView } from '$lib/analytics';
	import { DATA } from '$lib/data/resume';

	const measurementId = DATA.gaMeasurementId;

	afterNavigate(({ to }) => {
		if (!measurementId || !to) return;
		trackPageView(measurementId, `${to.url.pathname}${to.url.search}`);
	});
</script>
