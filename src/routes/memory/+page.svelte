<script lang="ts">
	import Card from '$components/memory/Card.svelte';
	import { selectedCards } from '$components/memory/stores';
	import { Bookmark, Check, Clipboard, Cloud, LightBulb } from 'svelte-hero-icons';
	let score = 0;

	$: if ($selectedCards.length > 1) {
		setTimeout(() => {
			if ($selectedCards[0].icon === $selectedCards[1].icon) score++;
			$selectedCards = [];
		}, 750);
	}
</script>

<section class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
	<h1 class="mb-4 text-center text-4xl">Memory</h1>
	<p class="mb-4 text-center">Score: {score}</p>
	<div class="inline-grid grid-cols-3 gap-4">
		<Card id={1} icon={Check} />
		<Card id={2} icon={LightBulb} />
		<Card id={3} icon={Cloud} />
		<Card id={4} icon={LightBulb} />
		<Card id={5} icon={Check} />
		<Card id={6} icon={Clipboard} />
		<Card id={7} icon={Cloud} />
		<Card id={8} icon={Bookmark} />
		<Card id={9} icon={Clipboard} />
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
