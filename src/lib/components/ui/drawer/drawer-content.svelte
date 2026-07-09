<script lang="ts">
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';
	import DrawerOverlay from './drawer-overlay.svelte';
	import DrawerPortal from './drawer-portal.svelte';
	import { cn } from '$lib/utils';

	type $$Props = DrawerPrimitive.ContentProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<DrawerPortal>
	<DrawerOverlay />
	<DrawerPrimitive.Content
		class={cn(
			'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background sm:mx-auto sm:w-full sm:max-w-3xl',
			className
		)}
		{...$$restProps}
	>
		<div class="mx-auto mt-2 h-2 w-[100px] rounded-full bg-muted"></div>
		<slot />
	</DrawerPrimitive.Content>
</DrawerPortal>
