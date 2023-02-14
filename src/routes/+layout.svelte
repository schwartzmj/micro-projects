<script lang="ts">
	import '@fontsource/merriweather';
	import '@fontsource/lato';
	import '../app.css';
	import { dev } from '$app/environment';
	import DevToolbar from '$components/dev/DevToolbar.svelte';
	import NProgress from '$components/common/NProgress.svelte';
</script>

<NProgress />
<slot />
{#if dev}
	<DevToolbar />
{/if}
