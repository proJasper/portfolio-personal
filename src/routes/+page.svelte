<script>
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
	import ResumeCard from '$lib/components/portfolio/ResumeCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { DATA } from '$lib/data/resume';
	import { personJsonLd, websiteJsonLd } from '$lib/seo';
	import { marked } from 'marked';
	let BLUR_FADE_DELAY = 0.04;
</script>

<Seo
	title={DATA.seoTitle}
	description={DATA.description}
	canonical="/"
	ogImage={DATA.ogImage}
	jsonLd={[personJsonLd(), websiteJsonLd()]}
/>
<main class="flex min-h-[100dvh] flex-col space-y-10">
	<section id="hero">
		<div class="mx-auto w-full max-w-2xl space-y-8">
			<div class="flex justify-between gap-2">
				<div class="flex flex-1 flex-col space-y-1.5">
					<BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
						<h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
							Hi, I'm {DATA.name.split(' ')[0]} 👋
						</h1>
					</BlurFade>
					<BlurFade class="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY}
						>{DATA.description}</BlurFade
					>
				</div>
				<BlurFade delay={BLUR_FADE_DELAY}>
					<Avatar.Root class="size-28 border">
						<Avatar.Image alt={DATA.name} src={DATA.avatarUrl} />
						<Avatar.Fallback>{DATA.initials}</Avatar.Fallback>
					</Avatar.Root>
				</BlurFade>
			</div>
		</div>
	</section>
	<section id="about">
		<BlurFade delay={BLUR_FADE_DELAY}>
			<h2 class="text-xl font-bold">About</h2>
		</BlurFade>
		<BlurFade delay={BLUR_FADE_DELAY * 1.4}>
			<div
				class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
			>
				{@html marked(DATA.summary)}
			</div>
		</BlurFade>
	</section>
	<section id="work">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Work Experience</h2>
			</BlurFade>
			{#each DATA.work as work, id}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard {...work} />
				</BlurFade>
			{/each}
		</div>
	</section>
	<section id="education">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Education</h2>
			</BlurFade>
			{#each DATA.education as edu, id}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard
						href={edu.href}
						logoUrl={edu.logoUrl}
						logoClass={edu.logoClass || ''}
						company={edu.school}
						title={edu.degree}
						start={edu.start}
						end={edu.end}
					/>
				</BlurFade>
			{/each}
		</div>
	</section>
	<section id="skills">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Skills</h2>
			</BlurFade>
			<div class="space-y-3">
				<div class="space-y-1">
					<h3 class="text-sm font-semibold text-muted-foreground">Operations & Management</h3>
					<div class="flex flex-wrap gap-1">
						{#each DATA.skills.operations as skill, id}
							<BlurFade delay={BLUR_FADE_DELAY * id + 0.002}>
								<Badge>{skill}</Badge>
							</BlurFade>
						{/each}
					</div>
				</div>
				<div class="space-y-1">
					<h3 class="text-sm font-semibold text-muted-foreground">
						Programming Languages & Technologies
					</h3>
					<div class="flex flex-wrap gap-1">
						{#each DATA.skills.technical as skill, id}
							<BlurFade delay={BLUR_FADE_DELAY * id + 0.002}>
								<Badge>{skill}</Badge>
							</BlurFade>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="projects">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Latest Projects</h2>
			</BlurFade>
			<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{#each DATA.projects as project, id}
					<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
						<ProjectCard
							href={project.href}
							title={project.title}
							description={project.description}
							dates={project.dates ?? ''}
							tags={project.technologies}
							image={project.image}
							links={project.links ?? []}
						/>
					</BlurFade>
				{/each}
			</div>
		</div>
	</section>
	<section id="contact">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Get in Touch</h2>
			</BlurFade>
			<BlurFade delay={BLUR_FADE_DELAY * 1.4}>
				<p class="text-pretty text-sm text-muted-foreground">
					Want to chat? Simply shoot me a dm on
					<a href={DATA.contact.social.LinkedIn.url} class="text-blue-500 hover:underline">
						LinkedIn
					</a>
					or
					<a href={DATA.contact.social.email.url} class="text-blue-500 hover:underline"
						>send an email</a
					>.
				</p>
			</BlurFade>
		</div>
	</section>
</main>
