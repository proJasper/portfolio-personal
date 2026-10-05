<script>
	import { page } from '$app/stores';
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';
	import Navbar from '$lib/components/portfolio/Navbar.svelte';
	import { DATA } from '$lib/data/resume';
	import '../app.css';
	import { ModeWatcher, setMode } from 'mode-watcher';
	setMode('light');
</script>

<svelte:head>
	<meta name="google-site-verification" content={DATA.googleSiteVerification} />
</svelte:head>

<ModeWatcher />
<GoogleAnalytics />
<div
	class="relative mx-auto min-h-screen max-w-2xl bg-background px-6 font-sans antialiased {$page.url.pathname ===
	'/rocketeer'
		? 'pb-16 pt-4 sm:pb-20 sm:pt-6'
		: 'pb-28 pt-12 sm:py-24 sm:pb-32'}"
>
	<slot></slot>
	{#if $page.url.pathname !== '/rocketeer'}
		<Navbar />
	{/if}
</div>
