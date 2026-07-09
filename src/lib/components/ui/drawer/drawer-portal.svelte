<script lang="ts">
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';

	type $$Props = DrawerPrimitive.PortalProps;
</script>

<DrawerPrimitive.Portal {...$$restProps}>
	<slot />
</DrawerPrimitive.Portal>
