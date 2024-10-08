<script lang="ts">
	let selectedTab: string = 'For You';

	const tabs = ['For You', 'Following'];

	function selectTab(tab: string) {
		selectedTab = tab;
	}
</script>

<div class="flex justify-around text-xl px-6 pt-12 text-[#5E6368] cursor-pointer border-bottom">
	{#each tabs as tab}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<p
			class="transition-colors duration-200 {selectedTab === tab
				? 'font-bold text-white pb-2 border-b-2 border-[#1880E8] '
				: ''}"
			on:click={() => selectTab(tab)}
		>
			{tab}
		</p>
	{/each}
</div>

<style>
	.border-bottom {
		border-bottom: 1px solid #1e1e1e;
	}
</style>
