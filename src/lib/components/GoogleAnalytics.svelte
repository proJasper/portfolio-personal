<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { initAnalytics, isAnalyticsEnabled, trackPageView } from '$lib/analytics';
	import { DATA } from '$lib/data/resume';

	const measurementId = DATA.gaMeasurementId;

	onMount(() => {
		if (!measurementId) return;
		initAnalytics(measurementId);
	});

	afterNavigate(({ to }) => {
		if (!measurementId || !to || !isAnalyticsEnabled()) return;
		trackPageView(`${to.url.pathname}${to.url.search}`);
	});
</script>
