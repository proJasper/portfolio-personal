<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '$lib/utils';
	import { ChevronRightIcon, ChevronUpIcon } from 'lucide-svelte';
	import { quartOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	export let logoUrl: string = '';
	export let company: string = '';
	export let title: string = '';
	export let subtitle: string = '';
	export let href: string = '';
	export let logoClass: string = '';
	export let badges: string[]=[''];
	export let description: string = '';
	export let start: string = '';
	export let end: string = '';
	let isExpanded = false;

	let handleClick = (e: MouseEvent) => {
		if (description) {
			e.preventDefault();
		}
	};

	let handleMouseEnter = () => {
		if (description) {
			isExpanded = true;
		}
	};

	let handleMouseLeave = () => {
		if (description) {
			isExpanded = false;
		}
	};
</script>

<a
	class={cn(description ? 'cursor-default' : href ? 'cursor-pointer' : 'cursor-default')}
	href={href ? href : undefined}
	on:click={handleClick}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:focus={handleMouseEnter}
	on:blur={handleMouseLeave}
>
	<div class="flex rounded-lg bg-card text-card-foreground">
		<div class="flex-none">
			<Avatar.Root class="bg-muted-background m-auto size-12 border dark:bg-foreground">
				<Avatar.Image src={logoUrl} alt={company} class={cn('object-contain', logoClass)} />
				<Avatar.Fallback>{company[0]}</Avatar.Fallback>
			</Avatar.Root>
		</div>
		<div class="group ml-4 flex-grow flex-col items-center">
			<div class="flex flex-col">
				<div class="flex items-center justify-between gap-x-2 text-base">
					<h3
						class="inline-flex items-center justify-center text-xs font-semibold leading-none sm:text-sm"
					>
						{company}
						{#if badges?.length > 0 && badges[0] !== ''}
							<span class="inline-flex gap-x-1">
								{#each badges as badge, index}
									<Badge variant="secondary" class="align-middle text-xs" key={index}>
										{badge}
									</Badge>
								{/each}
							</span>
						{/if}
						{#if description}
							<ChevronUpIcon
								class={cn(
									'ml-2 size-4 shrink-0 transform opacity-0 transition-all duration-300 ease-out group-hover:opacity-100',
									isExpanded ? 'rotate-180' : 'rotate-0'
								)}
							/>
						{:else if href}
							<ChevronRightIcon
								class="ml-2 size-4 shrink-0 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
							/>
						{/if}
					</h3>
					<div class="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
						{start} - {end || 'Present'}
					</div>
				</div>
				{#if title}
					<div class="font-sans text-xs">{title}</div>
				{/if}
				{#if subtitle}
					<div class="font-sans text-xs text-muted-foreground">{subtitle}</div>
				{/if}
			</div>
			{#if description}
				{#if isExpanded}
					<div
						class="mt-2 text-xs sm:text-sm"
						transition:slide={{
							duration: 700,
							easing: quartOut
						}}
					>
						<div in:fade={{ duration: 220 }} out:fade={{ duration: 180 }}>
							{description}
						</div>
					</div>
				{/if}
			{/if}
		</div>
	</div>
</a>
