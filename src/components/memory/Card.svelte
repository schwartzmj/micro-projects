<script lang="ts">
	import { Check, Icon, type IconSource } from 'svelte-hero-icons';
	import { selectedCards } from '$components/memory/stores';
	export let id: App.Memory.Card['id'];
	export let icon: App.Memory.Card['icon'];
	$: flipped = $selectedCards.find((c) => c.id === id);

	function handleClick() {
		if ($selectedCards.length > 1) return;
		$selectedCards = [...$selectedCards, { id, icon }];
	}
</script>

<div
	class="relative h-20 w-20 overflow-hidden rounded"
	style="perspective: 500px;"
	on:click={handleClick}
	on:keypress={handleClick}
>
	<!-- Wrapper for front and back -->
	<div
		class="absolute h-full w-full transition-transform duration-500"
		style="transform: rotateY({flipped ? '180deg' : '0deg'}); transform-style: preserve-3d;"
	>
		<!-- Front -->
		<div
			class="absolute flex h-full w-full items-center justify-center bg-slate-800 text-white"
			style="backface-visibility: hidden;"
		/>
		<!-- Back -->
		<div
			class="absolute flex h-full w-full rotate-180 items-center justify-center bg-slate-800 text-white"
			style="backface-visibility: hidden; transform: rotateY(180deg);"
		>
			<Icon src={icon} class="relative h-8 w-8 text-white" />
		</div>
	</div>
</div>
