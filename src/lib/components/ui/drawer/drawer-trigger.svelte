<script lang="ts">
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';

	type $$Props = DrawerPrimitive.TriggerProps;
	type $$Events = DrawerPrimitive.TriggerEvents;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let asChild: $$Props['asChild'] = false;
</script>

<DrawerPrimitive.Trigger
	{asChild}
	class={className}
	on:click
	on:keydown
	let:builder
	{...$$restProps}
>
	<slot {builder} />
</DrawerPrimitive.Trigger>
