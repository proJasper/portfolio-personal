<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { DATA } from '$lib/data/resume';
	import { ArrowLeft, ExternalLink } from 'lucide-svelte';
	import { marked } from 'marked';
	import type { PageData } from './$types';

	export let data: PageData;

	$: project = data.project;
	$: pageTitle = `${project.title} | Projects | ${DATA.name}`;
</script>

<Seo
	title={pageTitle}
	description={project.description}
	canonical="/projects/{project.slug}"
	ogImage={DATA.ogImage}
/>

<main class="space-y-10">
	<a
		href="/#projects"
		class="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
	>
		<ArrowLeft class="size-3.5" />
		All projects
	</a>

	<header class="space-y-3">
		<div class="flex items-start justify-between gap-4">
			<div>
				<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
			</div>
			{#if project.href}
				<a
					href={project.href}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex shrink-0 items-center gap-1.5 rounded-md border px-3 py-2 text-xs font-medium transition-colors hover:bg-muted"
				>
					Visit project
					<ExternalLink class="size-3.5" />
				</a>
			{/if}
		</div>
		<p class="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
			{project.description}
		</p>
	</header>

	{#if project.screenshots.length > 0}
		<div class="overflow-hidden rounded-lg border bg-muted/30">
			<img
				src={project.screenshots[0]}
				alt="{project.title} interface"
				class="max-h-[28rem] w-full object-contain"
			/>
		</div>
	{/if}

	<section class="grid gap-8 border-t pt-8 sm:grid-cols-[1fr_auto]">
		<div class="space-y-2">
			<h2 class="text-sm font-semibold uppercase text-muted-foreground">Overview</h2>
			<div class="prose max-w-none text-pretty text-sm dark:prose-invert prose-p:my-0">
				{@html marked(project.longDescription)}
			</div>
		</div>
		<div class="sm:w-48">
			<h2 class="mb-2 text-sm font-semibold uppercase text-muted-foreground">Technologies</h2>
			<div class="flex flex-wrap gap-1.5">
				{#each project.technologies as technology}
					<Badge variant="secondary" class="rounded px-2 py-0.5 text-xs">
						{technology}
					</Badge>
				{/each}
			</div>
		</div>
	</section>

	<div class="grid gap-8 border-t pt-8 sm:grid-cols-3">
		<section class="space-y-2">
			<h2 class="text-lg font-semibold">Problem</h2>
			<p class="text-pretty text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
		</section>
		<section class="space-y-2">
			<h2 class="text-lg font-semibold">Solution</h2>
			<p class="text-pretty text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
		</section>
		<section class="space-y-2">
			<h2 class="text-lg font-semibold">Impact</h2>
			<p class="text-pretty text-sm leading-relaxed text-muted-foreground">{project.impact}</p>
		</section>
	</div>

	{#if project.links.length > 0}
		<div class="flex flex-wrap gap-2 border-t pt-6">
			{#each project.links as link}
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-xs font-medium transition-colors hover:bg-muted"
				>
					<svelte:component this={link.icon} class="size-3.5" />
					{link.type}
				</a>
			{/each}
		</div>
	{/if}
</main>
