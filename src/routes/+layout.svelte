<script lang="ts">
	import '@fontsource/merriweather';
	import '@fontsource/lato';
	import '../app.css';
	import { dev } from '$app/environment';
	import DevToolbar from '$components/dev/DevToolbar.svelte';
	import NProgress from '$components/common/NProgress.svelte';
	import { page } from '$app/stores';
	$: console.log($page);

	const nav = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'Memory',
			href: '/memory'
		}
	];
</script>

<NProgress />
<nav class="fixed top-3 left-3">
	<ul class="flex items-center space-x-3">
		{#each nav as { href, label }}
			<li>
				<a class="{$page.url.pathname === href ? 'border-t-8 border-slate-200' : ''} " {href}
					>{label}</a
				>
			</li>
		{/each}
	</ul>
</nav>
<slot />
{#if dev}
	<DevToolbar />
{/if}
