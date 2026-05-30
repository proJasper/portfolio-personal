<script>
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
<div class="relative mx-auto min-h-screen max-w-2xl bg-background px-6 pt-12 pb-28 font-sans antialiased sm:py-24 sm:pb-32">
	<slot></slot>
	<Navbar />
</div>
