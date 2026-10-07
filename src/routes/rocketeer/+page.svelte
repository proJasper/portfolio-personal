<script lang="ts">
	import { onMount } from 'svelte';
	import Seo from '$lib/components/Seo.svelte';
	import RocketeerLogo from '$lib/components/portfolio/RocketeerLogo.svelte';
	import { DATA } from '$lib/data/resume';
	import {
		ArrowUpRight,
		Boxes,
		Code2,
		Mail,
		PackageSearch,
		PanelsTopLeft,
		Search,
		Settings2,
		ShoppingCart,
		Unplug,
		Workflow
	} from 'lucide-svelte';

	const contactUrl =
		'mailto:projecten@jasperrobinson.nl?subject=Rocketeer%20project%20inquiry';

	function scrollToSection(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	onMount(() => {
		const section = sessionStorage.getItem('rocketeer-section') ?? window.location.hash.slice(1);
		if (window.location.hash) {
			history.replaceState(history.state, '', `${window.location.pathname}${window.location.search}`);
		}
		if (!section) return;

		sessionStorage.removeItem('rocketeer-section');
		requestAnimationFrame(() => scrollToSection(section));
	});

	const services = [
		{
			icon: Search,
			title: 'Discover',
			description:
				'We map your workflows, bottlenecks and goals before deciding what to build. You get a clear scope focused on the problem that matters.'
		},
		{
			icon: Code2,
			title: 'Build',
			description:
				'From webshops and warehouse management systems to procurement platforms and internal tools, your solution is designed around how your business operates.'
		},
		{
			icon: Settings2,
			title: 'Improve',
			description:
				'Existing systems can be connected, automated or rebuilt where needed, reducing manual work and making day-to-day operations more reliable.'
		}
	];

	const capabilities = [
		{
			icon: ShoppingCart,
			title: 'Webshops',
			description: 'Storefronts connected cleanly to orders, inventory and fulfilment.'
		},
		{
			icon: Boxes,
			title: 'Warehouse management',
			description: 'Tools for receiving, stock control, picking and operational visibility.'
		},
		{
			icon: PackageSearch,
			title: 'Procurement systems',
			description: 'Purchasing workflows that surface shortages and support better decisions.'
		},
		{
			icon: PanelsTopLeft,
			title: 'Internal tools',
			description: 'Focused software shaped around the way your team actually works.'
		},
		{
			icon: Unplug,
			title: 'System integrations',
			description: 'Reliable connections between platforms, data and external services.'
		},
		{
			icon: Workflow,
			title: 'Workflow automation',
			description: 'Automations that remove repetitive work without losing control.'
		}
	];

</script>

<Seo
	title="Rocketeer | Custom Business Software"
	description="Rocketeer helps businesses identify operational needs and builds custom software, including webshops, warehouse management systems and procurement platforms."
	canonical="/rocketeer"
	siteName="Rocketeer"
	icon="/rocketeer-icon.svg"
/>

<main class="relative left-1/2 w-[calc(100vw-3rem)] max-w-5xl -translate-x-1/2">
	<div class="sticky top-0 z-40 -mt-4 pt-4 sm:-mt-6 sm:pt-6">
		<header class="relative z-10 flex h-12 items-center justify-between gap-4 rounded-lg border bg-card/90 px-3 text-card-foreground shadow-[0_6px_12px_-10px_rgba(0,0,0,0.45)] backdrop-blur-md">
			<a href="/rocketeer" class="inline-flex items-center gap-2 text-sm font-semibold">
				<RocketeerLogo className="size-8" />
				Rocketeer
			</a>

			<nav class="hidden items-center gap-6 text-xs font-medium text-muted-foreground sm:flex" aria-label="Rocketeer navigation">
				<button
					type="button"
					class="transition-colors hover:text-foreground"
					on:click={() => scrollToSection('build')}>What we build</button
				>
				<button
					type="button"
					class="transition-colors hover:text-foreground"
					on:click={() => scrollToSection('services')}>Services</button
				>
				<button
					type="button"
					class="transition-colors hover:text-foreground"
					on:click={() => scrollToSection('projects')}>Projects</button
				>
				<a href="/" class="transition-colors hover:text-foreground">About</a>
			</nav>

			<a
				href={contactUrl}
				class="inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
			>
				Discuss a project
			</a>
			</header>
		</div>

	<section
		class="rocketeer-gradient relative mt-4 min-h-[18rem] overflow-hidden rounded-lg border border-white/10 bg-[#172554]"
	>
		<div class="relative flex min-h-[18rem] flex-col justify-center p-6 text-white sm:p-10">
			<div class="max-w-2xl">
				<div class="space-y-3">
					<h1 class="sr-only">Rocketeer</h1>
					<p class="max-w-xl text-2xl font-bold text-white sm:text-3xl">
						Custom software for businesses with real operational challenges.
					</p>
					<p class="max-w-xl text-pretty text-sm leading-relaxed text-white/75 sm:text-base">
						I help businesses understand what they need, then design and build the solution,
						from webshops and warehouse systems to procurement platforms and internal tools.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="build" class="mt-16 scroll-mt-20 space-y-6">
		<div class="max-w-xl space-y-2">
			<p class="text-xs font-semibold uppercase text-muted-foreground">What we build</p>
			<h2 class="text-2xl font-bold sm:text-3xl">Software shaped around your operation</h2>
			<p class="text-pretty text-sm leading-relaxed text-muted-foreground">
				From customer-facing products to the systems behind them, each solution is designed
				around the work it needs to improve.
			</p>
		</div>

		<div class="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3">
			{#each capabilities as capability}
				<article class="min-h-40 bg-background p-5 sm:p-6">
					<div class="flex items-center gap-3">
						<div class="flex size-9 items-center justify-center rounded-md bg-secondary">
							<svelte:component this={capability.icon} class="size-4" strokeWidth={1.7} />
						</div>
						<h3 class="text-sm font-semibold">{capability.title}</h3>
					</div>
					<p class="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
						{capability.description}
					</p>
				</article>
			{/each}
		</div>
	</section>

	<section id="services" class="mt-16 scroll-mt-20 space-y-5">
		<div class="max-w-xl space-y-2">
			<p class="text-xs font-semibold uppercase text-muted-foreground">How Rocketeer helps</p>
			<h2 class="text-2xl font-bold sm:text-3xl">From question to working software</h2>
			<p class="text-pretty text-sm leading-relaxed text-muted-foreground">
				You do not need a finished specification to get started.
			</p>
		</div>

		<div class="grid gap-3 sm:grid-cols-3">
			{#each services as service}
				<article class="relative min-h-48 overflow-hidden rounded-lg border bg-card p-6 text-card-foreground">
					<div class="flex items-center gap-3">
						<div class="flex size-10 items-center justify-center rounded-md bg-secondary">
							<svelte:component this={service.icon} class="size-5" strokeWidth={1.7} />
						</div>
						<h3 class="text-lg font-semibold">{service.title}</h3>
					</div>
					<div class="mt-5">
						<p class="text-pretty text-sm leading-relaxed text-muted-foreground">
							{service.description}
						</p>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section id="projects" class="mt-16 scroll-mt-20 space-y-6">
		<div class="max-w-xl space-y-2">
			<p class="text-xs font-semibold uppercase text-muted-foreground">Latest projects</p>
			<h2 class="text-2xl font-bold sm:text-3xl">Built for the work behind the business</h2>
			<p class="text-pretty text-sm leading-relaxed text-muted-foreground">
				Recent systems designed to make complex operational work clearer, faster and more reliable.
			</p>
		</div>

		<div class="grid gap-4 sm:grid-cols-2">
			{#each DATA.projects as project}
				<a
					href="/rocketeer/projects/{project.slug}"
					class="group block overflow-hidden rounded-lg border bg-card text-card-foreground transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
				>
					<div class="flex min-h-56 flex-col p-5 sm:p-6">
						<div class="flex items-start justify-between gap-4">
							<h3 class="text-xl font-semibold">{project.title}</h3>
							{#if project.achievements[0]}
								<p class="flex items-baseline gap-1.5 text-right text-[9px] leading-tight text-muted-foreground sm:text-[10px]">
									<strong class="shrink-0 text-base font-semibold text-foreground">
										{project.achievements[0].value}
									</strong>
									<span>{project.achievements[0].label}</span>
								</p>
							{/if}
						</div>

						<p class="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
							{project.description}
						</p>

						<div class="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
							<div class="flex flex-wrap gap-1.5">
								{#each project.technologies.slice(0, 4) as technology}
									<span class="rounded bg-secondary px-2 py-1 text-[10px] font-medium text-secondary-foreground">
										{technology}
									</span>
								{/each}
							</div>
							<span class="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold transition-colors group-hover:text-muted-foreground">
								View case study
								<ArrowUpRight class="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
							</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section id="contact" class="mt-16 flex scroll-mt-20 flex-col gap-5 border-y py-8 sm:flex-row sm:items-center sm:justify-between">
		<div class="max-w-md space-y-2">
			<h2 class="text-xl font-bold">Have a process that should work better?</h2>
			<p class="text-pretty text-sm leading-relaxed text-muted-foreground">
				Tell me where your business is getting stuck. We can work out whether custom software
				is the right answer and what a useful first step looks like.
			</p>
		</div>
		<a
			href={contactUrl}
			class="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
		>
			<Mail class="size-4" />
			Start a conversation
		</a>
	</section>

</main>