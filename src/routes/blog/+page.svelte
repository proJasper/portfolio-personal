<script lang="ts">
	import { formatDate } from '$lib/utils';
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import type { Post } from '$lib/types';
	type CategoryOption = 'All' | Post['categories'][number];

	export let data;
	let BLUR_FADE_DELAY = 0.04;
	let selectedCategory: CategoryOption = 'All';

	$: posts = (data.posts as Post[]) ?? [];
	$: categories = ['All', ...new Set(posts.flatMap((post) => post.categories))] as CategoryOption[];
	$: filteredPosts =
		selectedCategory === 'All'
			? posts
			: posts.filter((post) =>
					post.categories.includes(selectedCategory as Post['categories'][number])
			  );
	
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<BlurFade delay={BLUR_FADE_DELAY}>
	<h1 class="mb-8 text-2xl font-medium tracking-tighter">Blog</h1>
</BlurFade>

<BlurFade delay={BLUR_FADE_DELAY + 0.04}>
	<div class="filters" role="toolbar" aria-label="Filter blog posts by category">
		{#each categories as category}
			<button
				type="button"
				class:selected={selectedCategory === category}
				on:click={() => (selectedCategory = category)}
				aria-pressed={selectedCategory === category}
			>
				<span class="filter-indicator" aria-hidden="true"></span>
				{category}
			</button>
		{/each}
	</div>
</BlurFade>

<!-- Posts -->
<section>
	<ul class="posts">
		{#if filteredPosts.length === 0}
			<li class="post empty-state">No blog posts match this category yet.</li>
		{:else}
			{#each filteredPosts as post, id}
			<li class="post">
				<BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
					<a class="post-link" href="/blog/{post.slug}">
						<div class="post-copy">
							<div class="post-title-row">
								<p class="post-title tracking-tight">{post.title}</p>
								<div class="post-meta-right" aria-label="Post categories">
									<div class="post-tags">
										{#each post.categories as category}
											<Badge variant="outline" class="rounded-[4px]">{category}</Badge>
										{/each}
									</div>
									<svg
										class="post-action"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.8"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M7 17 17 7" />
										<path d="M7 7h10v10" />
									</svg>
								</div>
							</div>
							<p class="post-description text-sm text-muted-foreground">{post.description}</p>
							<p class="h-6 text-xs text-muted-foreground">
								{formatDate(post.date)}
							</div>
					</a>
				</BlurFade>
			</li>
			{/each}
		{/if}
	</ul>
</section>

<style>
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: var(--size-7);
	}

	.filters button {
		display: inline-flex;
		align-items: center;
		gap: 0.42rem;
		height: 1.85rem;
		padding-inline: 0.7rem;
		border-radius: 999px;
		border: 1px solid var(--border);
		background: color-mix(in oklab, var(--background) 88%, var(--foreground) 5%);
		font-size: 0.78rem;
		text-transform: capitalize;
		transition: all 180ms ease;
	}

	.filters button:hover {
		border-color: color-mix(in oklab, var(--foreground) 28%, var(--border));
		background: color-mix(in oklab, var(--background) 80%, var(--foreground) 8%);
	}

	.filters button.selected {
		border-color: var(--foreground);
		background: var(--foreground);
		color: var(--background);
		font-weight: 600;
		box-shadow: 0 0 0 2px color-mix(in oklab, var(--foreground) 28%, transparent);
	}

	.filter-indicator {
		width: 0.42rem;
		height: 0.42rem;
		border-radius: 999px;
		background: color-mix(in oklab, var(--foreground) 36%, transparent);
		transition: background-color 180ms ease;
	}

	.filters button.selected .filter-indicator {
		background: currentColor;
	}

	.posts {
		display: grid;
		gap: var(--size-5);
	}

	.post {
		padding-bottom: var(--size-6);
	}

	.post-link {
		display: block;
		border-radius: var(--radius-lg);
		padding: 0.8rem;
		transition: background-color 180ms ease;
	}

	.post-copy {
		min-inline-size: 0;
	}

	.post-title-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.post-title {
		font-size: 1rem;
	}

	.post-meta-right {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		margin-left: auto;
	}

	.post-description {
		display: -webkit-box;
		margin-top: 0.15rem;
		line-clamp: 1;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.post-action {
		opacity: 0;
		transform: translate(-3px, 3px);
		transition: opacity 160ms ease, transform 160ms ease;
		color: var(--muted-foreground);
		flex: 0 0 auto;
	}

	.post-tags {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		flex-wrap: wrap;
		justify-content: flex-end;
	}

	.post-link:hover,
	.post-link:focus-visible {
		background: color-mix(in oklab, var(--background) 93%, var(--foreground) 5%);
	}

	.post-link:hover .post-action,
	.post-link:focus-visible .post-action {
		opacity: 1;
		transform: translate(0, 0);
	}

	.empty-state {
		padding: 0.75rem;
		font-size: 0.9rem;
		color: var(--muted-foreground);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
	}

	@media (max-width: 760px) {
		.post-title-row {
			align-items: flex-start;
			flex-direction: column;
		}

		.post-meta-right {
			margin-left: 0;
			width: 100%;
			justify-content: space-between;
		}

		.post-tags {
			justify-content: flex-start;
		}

		.post-action {
			opacity: 1;
			transform: translate(0, 0);
		}
	}
</style>
