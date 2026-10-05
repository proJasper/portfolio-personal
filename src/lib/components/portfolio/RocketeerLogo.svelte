<script lang="ts">
	export let className = 'size-8';
</script>

<svg
	viewBox="0 0 40 40"
	class={className}
	aria-hidden="true"
	xmlns="http://www.w3.org/2000/svg"
>
	<defs>
		<linearGradient id="rocketeer-mark" x1="5" y1="5" x2="35" y2="35" gradientUnits="userSpaceOnUse">
			<stop stop-color="#2563eb" />
			<stop offset="1" stop-color="#7c3aed" />
		</linearGradient>
	</defs>
	<rect x="1" y="1" width="38" height="38" rx="10" fill="url(#rocketeer-mark)" />
	<path
		d="M13 29V11H21.5C25.1 11 27.5 13.1 27.5 16.3C27.5 19.5 25.1 21.6 21.5 21.6H13M21 21.6L28.5 29"
		fill="none"
		stroke="white"
		stroke-width="3"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>