<script lang="ts">
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';

	type $$Props = DrawerPrimitive.CloseProps;
	type $$Events = DrawerPrimitive.CloseEvents;
</script>

<DrawerPrimitive.Close on:click let:builder {...$$restProps}>
	<slot {builder} />
</DrawerPrimitive.Close>
