<script lang="ts">
	import { marked } from 'marked';
	import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-svelte';
	import * as Drawer from '$lib/components/ui/drawer';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Button } from '$lib/components/ui/button';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	export let open = false;
	export let project: {
		title: string;
		dates?: string;
		description: string;
		longDescription?: string;
		problem?: string;
		solution?: string;
		impact?: string;
		technologies?: readonly string[];
		screenshots?: readonly string[];
		links?: { icon: any; type: string; href: string }[];
		href?: string;
	} | null = null;

	let slideIndex = 0;

	$: screenshots = project?.screenshots ?? [];
	$: if (!open) slideIndex = 0;
	$: if (project) slideIndex = 0;

	function next() {
		if (screenshots.length === 0) return;
		slideIndex = (slideIndex + 1) % screenshots.length;
	}

	function prev() {
		if (screenshots.length === 0) return;
		slideIndex = (slideIndex - 1 + screenshots.length) % screenshots.length;
	}
</script>

<Drawer.Root bind:open>
	<Drawer.Content class="max-h-[92vh]">
		{#if project}
			<div class="mx-auto flex w-full max-w-3xl flex-col overflow-y-auto">
				<Drawer.Header
					class="flex flex-row items-center justify-between gap-4 px-4 pb-3 pt-2 text-left"
				>
					<Drawer.Title class="text-xl font-bold tracking-tight sm:text-2xl">
						{project.title}
					</Drawer.Title>
					<Button
						variant="ghost"
						size="icon"
						class="size-8 shrink-0 text-muted-foreground"
						on:click={() => (open = false)}
					>
						<X class="size-4" />
						<span class="sr-only">Close</span>
					</Button>
				</Drawer.Header>

				<Separator />

				<div class="grid gap-5 p-4 md:grid-cols-5 md:gap-6">
					{#if screenshots.length > 0}
						<div class="space-y-2 md:col-span-2">
							<div class="group relative overflow-hidden rounded-lg border bg-muted">
								<img
									src={screenshots[slideIndex]}
									alt="{project.title} screenshot {slideIndex + 1}"
									class="h-44 w-full object-cover sm:h-52"
									loading="lazy"
								/>
								{#if screenshots.length > 1}
									<button
										type="button"
										on:click={prev}
										aria-label="Previous screenshot"
										class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1 text-foreground opacity-0 shadow-sm backdrop-blur transition hover:bg-background focus:opacity-100 group-hover:opacity-100"
									>
										<ChevronLeft class="size-3.5" />
									</button>
									<button
										type="button"
										on:click={next}
										aria-label="Next screenshot"
										class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1 text-foreground opacity-0 shadow-sm backdrop-blur transition hover:bg-background focus:opacity-100 group-hover:opacity-100"
									>
										<ChevronRight class="size-3.5" />
									</button>
								{/if}
							</div>
							{#if screenshots.length > 1}
								<div class="flex items-center justify-center gap-1.5">
									{#each screenshots as _, i}
										<button
											type="button"
											aria-label="Go to screenshot {i + 1}"
											on:click={() => (slideIndex = i)}
											class="h-1.5 rounded-full transition-all {i === slideIndex
												? 'w-4 bg-foreground'
												: 'w-1.5 bg-foreground/30 hover:bg-foreground/50'}"
										></button>
									{/each}
								</div>
							{/if}
						</div>
					{/if}

					<div class="space-y-4 {screenshots.length > 0 ? 'md:col-span-3' : 'md:col-span-5'}">
						<div
							class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert prose-p:my-0"
						>
							{@html marked(project.longDescription ?? project.description)}
						</div>

						{#if project.technologies && project.technologies.length > 0}
							<section class="space-y-1.5">
								<h3
									class="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
								>
									Technologies
								</h3>
								<div class="flex flex-wrap gap-1">
									{#each project.technologies as tech}
										<Badge class="rounded-[4px] px-1.5 py-0 text-[10px]" variant="secondary">
											{tech}
										</Badge>
									{/each}
								</div>
							</section>
						{/if}
					</div>
				</div>

				{#if project.problem || project.solution || project.impact}
					<Separator />
					<div class="grid gap-5 p-4 sm:grid-cols-3">
						{#if project.problem}
							<section class="space-y-1.5">
								<h3
									class="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
								>
									Problem
								</h3>
								<div
									class="prose max-w-full text-pretty font-sans text-sm text-foreground dark:prose-invert prose-p:my-0"
								>
									{@html marked(project.problem)}
								</div>
							</section>
						{/if}
						{#if project.solution}
							<section class="space-y-1.5">
								<h3
									class="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
								>
									Solution
								</h3>
								<div
									class="prose max-w-full text-pretty font-sans text-sm text-foreground dark:prose-invert prose-p:my-0"
								>
									{@html marked(project.solution)}
								</div>
							</section>
						{/if}
						{#if project.impact}
							<section class="space-y-1.5">
								<h3
									class="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
								>
									Impact
								</h3>
								<div
									class="prose max-w-full text-pretty font-sans text-sm text-foreground dark:prose-invert prose-p:my-0"
								>
									{@html marked(project.impact)}
								</div>
							</section>
						{/if}
					</div>
				{/if}

				{#if project.href || (project.links && project.links.length > 0)}
					<Drawer.Footer class="flex flex-row flex-wrap justify-end gap-2 pt-2">
						{#if project.href}
							<Button
								href={project.href}
								target="_blank"
								rel="noopener noreferrer"
								size="sm"
								variant="default"
							>
								<ExternalLink class="mr-1.5 size-3.5" strokeWidth={1.6} />
								Visit project
							</Button>
						{/if}
						{#if project.links}
							{#each project.links as link}
								<Button
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									variant="outline"
									size="sm"
								>
									<svelte:component this={link.icon} class="mr-1.5 size-3.5" strokeWidth={1.6} />
									{link.type}
								</Button>
							{/each}
						{/if}
					</Drawer.Footer>
				{:else}
					<div class="pb-4"></div>
				{/if}
			</div>
		{/if}
	</Drawer.Content>
</Drawer.Root>
