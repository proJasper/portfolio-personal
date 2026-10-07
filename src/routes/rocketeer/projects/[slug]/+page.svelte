<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import RocketeerLogo from '$lib/components/portfolio/RocketeerLogo.svelte';
	import { ArrowLeft, ArrowRight, Mail } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const contactUrl =
		'mailto:projecten@jasperrobinson.nl?subject=Rocketeer%20project%20inquiry';

	function navigateToSection(event: MouseEvent, section: string) {
		event.preventDefault();
		sessionStorage.setItem('rocketeer-section', section);
		window.location.assign('/rocketeer');
	}

	$: project = data.project;
</script>

<Seo
	title="{project.title} | Rocketeer"
	description={project.description}
	canonical="/rocketeer/projects/{project.slug}"
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
			<a href="/rocketeer" on:click={(event) => navigateToSection(event, 'build')} class="transition-colors hover:text-foreground">What we build</a>
			<a href="/rocketeer" on:click={(event) => navigateToSection(event, 'services')} class="transition-colors hover:text-foreground">Services</a>
			<a href="/rocketeer" on:click={(event) => navigateToSection(event, 'projects')} class="transition-colors hover:text-foreground">Projects</a>
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

	<a
		href="/rocketeer"
		on:click={(event) => navigateToSection(event, 'projects')}
		class="mt-8 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
	>
		<ArrowLeft class="size-3.5" />
		All projects
	</a>

	<section class="rocketeer-gradient mt-6 overflow-hidden rounded-lg border bg-[#172554] text-white">
		<div class="p-6 sm:p-10">
			<p class="text-xs font-semibold uppercase text-white/65">Rocketeer project</p>
			<h1 class="mt-3 text-3xl font-bold sm:text-5xl">{project.title}</h1>
			<p class="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
				{project.description}
			</p>
		</div>
	</section>

	<section class="mt-12 grid gap-8 pb-12 sm:grid-cols-[1fr_18rem]">
		<div class="space-y-3">
			<p class="text-xs font-semibold uppercase text-muted-foreground">Overview</p>
			<p class="text-pretty text-sm leading-relaxed text-muted-foreground">
				{project.longDescription}
			</p>
		</div>

		<div class="space-y-3">
			<p class="text-xs font-semibold uppercase text-muted-foreground">Technologies</p>
			<div class="flex flex-wrap gap-1.5">
				{#each project.technologies as technology}
					<span class="rounded bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
						{technology}
					</span>
				{/each}
			</div>
		</div>
	</section>

	<section class="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-3">
		<article class="min-h-52 bg-background p-5 sm:p-6">
			<p class="text-xs font-semibold uppercase text-muted-foreground">Problem</p>
			<p class="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
		</article>
		<article class="min-h-52 bg-background p-5 sm:p-6">
			<p class="text-xs font-semibold uppercase text-muted-foreground">Solution</p>
			<p class="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
		</article>
		<article class="min-h-52 bg-background p-5 sm:p-6">
			<p class="text-xs font-semibold uppercase text-muted-foreground">Impact</p>
			<p class="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">{project.impact}</p>
		</article>
	</section>

	{#if project.achievements[0]}
		<section class="mt-12 flex flex-col gap-3 border-y py-8 sm:flex-row sm:items-baseline sm:gap-5">
			<strong class="text-4xl font-bold">{project.achievements[0].value}</strong>
			<p class="text-sm text-muted-foreground">{project.achievements[0].label}</p>
		</section>
	{/if}

	<section class="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
		<div class="max-w-md space-y-2">
			<h2 class="text-xl font-bold">Have a similar operational challenge?</h2>
			<p class="text-pretty text-sm leading-relaxed text-muted-foreground">
				Tell me where your business is getting stuck and we can work out a useful first step.
			</p>
		</div>
		<a
			href={contactUrl}
			class="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
		>
			<Mail class="size-4" />
			Start a conversation
			<ArrowRight class="size-4" />
		</a>
	</section>
</main>