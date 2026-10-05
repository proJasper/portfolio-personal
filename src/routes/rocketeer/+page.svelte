<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import RocketeerLogo from '$lib/components/portfolio/RocketeerLogo.svelte';
	import {
		ArrowRight,
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
		'mailto:contact@jasperrobinson.nl?subject=Rocketeer%20project%20inquiry';

	function scrollToSection(event: MouseEvent, id: string) {
		event.preventDefault();
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

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

	const process = [
		{
			title: 'Understand the operation',
			description: 'We look at the people, systems and decisions involved in the current process.'
		},
		{
			title: 'Define the right solution',
			description: 'The requirements and priorities become a practical plan with a clear first release.'
		},
		{
			title: 'Build in close contact',
			description: 'You see progress early and often, so feedback shapes the product while it is being built.'
		},
		{
			title: 'Launch and improve',
			description: 'The solution is introduced carefully, measured in use and improved where it adds value.'
		}
	];
</script>

<Seo
	title="Rocketeer | Custom Business Software"
	description="Rocketeer helps businesses identify operational needs and builds custom software, including webshops, warehouse management systems and procurement platforms."
	canonical="/rocketeer"
	siteName="Rocketeer"
/>

<main class="relative left-1/2 w-[calc(100vw-3rem)] max-w-5xl -translate-x-1/2">
	<header class="sticky top-4 z-40 flex h-12 items-center justify-between gap-4 rounded-lg border bg-card/90 px-3 text-card-foreground shadow-sm backdrop-blur-md sm:top-6">
			<a href="/rocketeer" class="inline-flex items-center gap-2 text-sm font-semibold">
				<RocketeerLogo className="size-8" />
				Rocketeer
			</a>

			<nav class="hidden items-center gap-6 text-xs font-medium text-muted-foreground sm:flex" aria-label="Rocketeer navigation">
				<a
					href="#build"
					class="transition-colors hover:text-foreground"
					on:click={(event) => scrollToSection(event, 'build')}>What we build</a
				>
				<a
					href="#services"
					class="transition-colors hover:text-foreground"
					on:click={(event) => scrollToSection(event, 'services')}>Services</a
				>
				<a
					href="#process"
					class="transition-colors hover:text-foreground"
					on:click={(event) => scrollToSection(event, 'process')}>Process</a
				>
				<a href="/" class="transition-colors hover:text-foreground">About Jasper</a>
			</nav>

			<a
				href={contactUrl}
				class="inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
			>
				Discuss a project
			</a>
		</header>

	<section
		class="relative mt-4 min-h-[32rem] overflow-hidden rounded-lg border border-white/10 bg-[#172554] sm:min-h-[30rem]"
		style="background: linear-gradient(135deg, #0f1f4b 0%, #283593 48%, #6d28d9 100%);"
	>
		<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
			<div
				class="absolute -right-40 -top-72 h-[36rem] w-[76rem] -rotate-12 rounded-[50%] border-[5rem] border-white/10"
			></div>
			<div
				class="absolute -left-52 top-16 h-[30rem] w-[72rem] rotate-[18deg] rounded-[50%] border-[3.5rem] border-cyan-300/15"
			></div>
			<div
				class="absolute -bottom-80 -right-24 h-[38rem] w-[68rem] rotate-[8deg] rounded-[50%] border-[6rem] border-fuchsia-300/10"
			></div>
			<div class="absolute inset-0 bg-black/10"></div>
		</div>

		<div class="relative flex min-h-[32rem] flex-col justify-end p-6 pb-12 text-white sm:min-h-[30rem] sm:p-10 sm:pb-20">
			<div class="max-w-2xl space-y-5">
				<div class="space-y-3">
					<h1 class="sr-only">Rocketeer</h1>
					<p class="max-w-xl text-xl font-medium leading-snug text-white sm:text-2xl">
						Custom software for businesses with real operational challenges.
					</p>
					<p class="max-w-xl text-pretty text-sm leading-relaxed text-white/75 sm:text-base">
						I help businesses understand what they need, then design and build the solution,
						from webshops and warehouse systems to procurement platforms and internal tools.
					</p>
				</div>

				<div class="flex flex-wrap gap-2">
					<a
						href={contactUrl}
						class="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-medium text-zinc-950 transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
					>
						Discuss a project
						<ArrowRight class="size-4" />
					</a>
					<a
						href="/"
						class="inline-flex h-10 items-center justify-center rounded-md border border-white/30 px-4 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
					>
						About Jasper
					</a>
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
				<article class="min-h-44 space-y-4 bg-background p-5 sm:p-6">
					<div class="flex size-9 items-center justify-center rounded-md bg-secondary">
						<svelte:component this={capability.icon} class="size-4" strokeWidth={1.7} />
					</div>
					<div class="space-y-1.5">
						<h3 class="text-sm font-semibold">{capability.title}</h3>
						<p class="text-pretty text-sm leading-relaxed text-muted-foreground">
							{capability.description}
						</p>
					</div>
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
			{#each services as service, index}
				<article class="relative min-h-64 overflow-hidden rounded-lg border bg-card p-6 text-card-foreground">
					<div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500"></div>
					<div class="flex items-start justify-between">
						<div class="flex size-10 items-center justify-center rounded-md bg-secondary">
							<svelte:component this={service.icon} class="size-5" strokeWidth={1.7} />
						</div>
						<span class="text-xs tabular-nums text-muted-foreground">0{index + 1}</span>
					</div>
					<div class="mt-10 space-y-2">
						<h3 class="text-lg font-semibold">{service.title}</h3>
						<p class="text-pretty text-sm leading-relaxed text-muted-foreground">
							{service.description}
						</p>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section id="process" class="mt-16 scroll-mt-20 space-y-8">
		<div class="max-w-xl space-y-2">
			<p class="text-xs font-semibold uppercase text-muted-foreground">The process</p>
			<h2 class="text-2xl font-bold sm:text-3xl">How we work together</h2>
			<p class="text-pretty text-sm leading-relaxed text-muted-foreground">
				A clear path from the first conversation to software your team can rely on.
			</p>
		</div>

		<ol class="relative grid gap-8 before:absolute before:left-0 before:right-0 before:top-5 before:hidden before:h-px before:bg-border sm:grid-cols-4 sm:gap-6 sm:before:block">
			{#each process as step, index}
				<li class="relative grid grid-cols-[2.5rem_1fr] gap-4 sm:block">
					<span class="relative z-10 flex size-10 items-center justify-center rounded-full border bg-background text-xs font-semibold tabular-nums">
						0{index + 1}
					</span>
					<div class="space-y-2 sm:mt-5">
						<h3 class="text-sm font-semibold">{step.title}</h3>
						<p class="text-pretty text-sm leading-relaxed text-muted-foreground">
						{step.description}
						</p>
					</div>
				</li>
			{/each}
		</ol>
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

	<footer class="mt-16 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
		<span>Rocketeer · Custom business software</span>
		<a href="/" class="font-medium transition-colors hover:text-foreground">jasperrobinson.nl</a>
	</footer>
</main>