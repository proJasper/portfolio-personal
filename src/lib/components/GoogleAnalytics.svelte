<script lang="ts">
	import { dev } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { createGtagSnippet, trackPageView } from '$lib/analytics';
	import { DATA } from '$lib/data/resume';

	const measurementId = DATA.gaMeasurementId;
	const enabled = !dev && !!measurementId;
	const gtagSnippet = enabled ? createGtagSnippet(measurementId) : '';

	afterNavigate(({ to }) => {
		if (!enabled || !to) return;
		trackPageView(measurementId, `${to.url.pathname}${to.url.search}`);
	});
</script>

<svelte:head>
	{#if enabled}
		{@html gtagSnippet}
	{/if}
</svelte:head>
