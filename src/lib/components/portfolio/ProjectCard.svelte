<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import Badge from '../ui/badge/badge.svelte';

	export let title: string;
	export let description: string;
	export let slug: string;
	export let tags: readonly string[] = [];
	export let achievements: readonly { value: string; label: string }[] = [];
</script>

<a
	href="/projects/{slug}"
	class="group block rounded-lg border bg-card p-3.5 text-card-foreground transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
>
	<div class="flex items-start justify-between gap-3">
		<h3 class="text-sm font-semibold sm:text-base">{title}</h3>
		<ArrowUpRight
			class="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
		/>
	</div>
	<p class="mt-1 line-clamp-2 text-pretty text-xs leading-relaxed text-muted-foreground">
		{description}
	</p>
	<div class="mt-2.5 flex flex-wrap items-end justify-between gap-2">
		{#if tags.length > 0}
			<div class="flex flex-wrap gap-1">
				{#each tags.slice(0, 4) as tag}
					<Badge class="rounded px-1.5 py-0 text-[9px]" variant="secondary">
						{tag}
					</Badge>
				{/each}
			</div>
		{/if}
		{#if achievements.length > 0}
			<div class="flex flex-wrap gap-x-3 gap-y-1 text-right">
				{#each achievements as achievement}
					<p class="text-[10px] leading-tight text-muted-foreground">
						<strong class="text-xs font-semibold text-foreground">{achievement.value}</strong>
						{achievement.label}
					</p>
				{/each}
			</div>
		{/if}
	</div>
</a>
