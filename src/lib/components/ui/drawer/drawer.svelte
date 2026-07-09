<script lang="ts">
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';

	type $$Props = DrawerPrimitive.Props;

	export let shouldScaleBackground: $$Props['shouldScaleBackground'] = true;
	export let open: $$Props['open'] = undefined;
	export let onOpenChange: $$Props['onOpenChange'] = undefined;
	export let closeThreshold: $$Props['closeThreshold'] = undefined;
	export let scrollLockTimeout: $$Props['scrollLockTimeout'] = undefined;
	export let dismissible: $$Props['dismissible'] = undefined;
</script>

<DrawerPrimitive.Root
	{shouldScaleBackground}
	bind:open
	{onOpenChange}
	{closeThreshold}
	{scrollLockTimeout}
	{dismissible}
>
	<slot />
</DrawerPrimitive.Root>
