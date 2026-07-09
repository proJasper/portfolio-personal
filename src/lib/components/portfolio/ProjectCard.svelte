<script lang="ts">
	import { marked } from 'marked';
	import Badge from '../ui/badge/badge.svelte';

	export let title: string;
	export let description: string;
	export let tags: readonly string[] = [];
	export let image: string = '';
	export let video: string = '';
	export let links: { icon: any; type: string; href: string }[] = [];

	function handleClick(event: MouseEvent) {
		(event.currentTarget as HTMLElement).blur();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			(event.currentTarget as HTMLElement).click();
		}
	}
</script>

<div
	role="button"
	tabindex="0"
	on:click
	on:click={handleClick}
	on:keydown={handleKeydown}
	class="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border bg-card text-left text-card-foreground outline-none transition-all duration-300 ease-out hover:shadow-lg"
>
	{#if image || video}
		<div class="block">
			{#if image}
				<img
					class="pointer-events-none mx-auto h-40 w-full object-cover object-top"
					src={image}
					alt={title}
					loading="lazy"
				/>
			{:else if video}
				<video
					class="pointer-events-none mx-auto h-40 w-full object-cover object-top"
					src={video}
					autoplay
					loop
					muted
				></video>
			{/if}
		</div>
	{/if}
	<div class="flex flex-col px-2">
		<div class="space-y-1">
			<div class="mt-1 text-base font-semibold">{title}</div>
			<div
				class="prose dark:prose-invert max-w-full text-pretty font-sans text-xs text-muted-foreground"
			>
				{@html marked(description)}
			</div>
		</div>
	</div>
	{#if tags.length > 0 || links.length > 0}
		<div class="mt-auto px-2 pb-2 pt-2">
			{#if tags.length > 0}
				<div class="flex flex-wrap gap-1">
					{#each tags as tag}
						<Badge class="rounded-[4px] px-1 py-0 text-[10px]" variant="secondary">
							{tag}
						</Badge>
					{/each}
				</div>
			{/if}
			{#if links.length > 0}
				<div
					class="flex flex-row flex-wrap items-start gap-1 {tags.length > 0 ? 'pt-2' : ''}"
					on:click|stopPropagation
					on:keydown|stopPropagation
					role="presentation"
				>
					{#each links as link}
						<a href={link.href} target="_blank" rel="noopener noreferrer">
							<Badge class="flex items-center justify-center gap-1 px-2 py-1 text-[10px]">
								<svelte:component this={link.icon} class="mb-px size-3" strokeWidth={1.6} />
								{link.type}
							</Badge>
						</a>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</div>
