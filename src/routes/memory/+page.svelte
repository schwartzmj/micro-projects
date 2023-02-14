<script lang="ts">
	import Card from '$components/memory/Card.svelte';
	import { selectedCards } from '$components/memory/stores';
	import { shuffleArray } from '$components/memory/utils';
	import { Bookmark, Check, Clipboard, Cloud, LightBulb } from 'svelte-hero-icons';
	let score = 0;

	$: if ($selectedCards.length > 1) {
		setTimeout(() => {
			if ($selectedCards[0].icon === $selectedCards[1].icon) score++;
			$selectedCards = [];
		}, 750);
	}

	const icons = [
		{ id: 1, icon: Check },
		{ id: 2, icon: Check },
		{ id: 3, icon: LightBulb },
		{ id: 4, icon: LightBulb },
		{ id: 5, icon: Clipboard },
		{ id: 6, icon: Clipboard },
		{ id: 7, icon: Cloud },
		{ id: 8, icon: Cloud },
		{ id: 9, icon: Bookmark }
	];
</script>

<section class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
	<h1 class="mb-4 text-center text-4xl">Memory</h1>
	<p class="mb-4 text-center">Score: {score}</p>
	<div class="inline-grid grid-cols-3 gap-4">
		{#each shuffleArray(icons) as { icon, id } (id)}
			<Card {id} {icon} />
		{/each}
	</div>
</section>

<a
	target="_blank"
	rel="noreferrer"
	class="fixed top-3 right-3 text-xs uppercase text-gray-500"
	href="https://github.com/schwartzmj/micro-projects/blob/main/src/routes/memory/%2Bpage.svelte"
>
	View this page on Github
</a>
