<script lang="ts">
	import Followers from './Followers.svelte';

	import Search from './Search.svelte';
	import Trending from './Trending.svelte';
</script>

<aside class="border-left w-96 text-white h-[100dvh]">
	<nav class="p-4 pt-8 mr-6">
		<div class="mb-5">
			<Search />
		</div>

		<div class="space-y-4">
			<Followers />
			<Trending />
		</div>
	</nav>
</aside>

<style>
	.border-left {
		border-left: 1px solid #1e1e1e;
	}
</style>
