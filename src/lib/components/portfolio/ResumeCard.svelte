<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '$lib/utils';
	import { ChevronRightIcon } from 'lucide-svelte';
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
	export let roles: Array<{
		title: string;
		start: string;
		end: string;
		description?: string;
	}> = [];
</script>

<a
	class={cn(href ? 'cursor-pointer' : 'cursor-default')}
	href={href ? href : undefined}
>
	<div class="flex rounded-lg bg-card text-card-foreground">
		<div class="flex-none">
			<Avatar.Root
				class="bg-muted-background m-auto flex size-12 items-center justify-center border dark:bg-foreground"
			>
				<Avatar.Image
					src={logoUrl}
					alt={company}
					class={cn('block object-contain object-center', logoClass)}
				/>
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
						{#if href}
							<ChevronRightIcon
								class="ml-2 size-4 shrink-0 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
							/>
						{/if}
					</h3>
					{#if start || end}
						<div class="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
							{start} - {end || 'Present'}
						</div>
					{/if}
				</div>
				{#if roles.length > 0}
					<div class="mt-2 flex flex-col">
						{#each roles as role, index}
							<div class="relative grid grid-cols-[0.75rem_1fr_auto] gap-x-2 pb-3 last:pb-0">
								{#if index < roles.length - 1}
									<div class="absolute bottom-0 left-[0.1875rem] top-2 w-px bg-border"></div>
								{/if}
								<div class="relative mt-1 size-1.5 rounded-full bg-foreground"></div>
								<div class="font-sans text-xs font-medium sm:text-sm">{role.title}</div>
								<div class="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
									{role.start} - {role.end || 'Present'}
								</div>
								{#if role.description}
									<div
										class="col-start-2 col-end-4 mt-1 text-xs text-muted-foreground sm:text-sm"
									>
										{role.description}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				{:else if title}
					<div class="font-sans text-xs">{title}</div>
				{/if}
				{#if subtitle}
					<div class="font-sans text-xs text-muted-foreground">{subtitle}</div>
				{/if}
			</div>
			{#if description}
				<div class="mt-2 text-xs text-muted-foreground sm:text-sm">
					{description}
				</div>
			{/if}
		</div>
	</div>
</a>
