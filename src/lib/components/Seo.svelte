<script lang="ts">
	import { DATA } from '$lib/data/resume';
	import { absoluteUrl, jsonLdScript } from '$lib/seo';

	export let title: string;
	export let description: string;
	export let canonical: string;
	export let siteName: string = DATA.name;
	export let ogType: 'website' | 'article' = 'website';
	export let ogImage: string = '/og.jpg';
	export let jsonLd: Record<string, unknown> | Record<string, unknown>[] | null = null;

	$: canonicalUrl = absoluteUrl(canonical);
	$: imageUrl = absoluteUrl(ogImage);
	$: jsonLdMarkup = jsonLd ? jsonLdScript(jsonLd) : '';
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={canonicalUrl} />
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content={ogType} />
	<meta name="robots" content="index, follow" />
	<meta
		name="googlebot"
		content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:url" content={canonicalUrl} />
	{#if jsonLdMarkup}
		{@html jsonLdMarkup}
	{/if}
</svelte:head>
