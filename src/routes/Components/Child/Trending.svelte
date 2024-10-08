<script lang="ts">
	// Array dinamis untuk daftar user yang mungkin ingin di-follow
	let users = [
		{
			number: '1. Trending',
			name: 'belajar javascript di bwa',
			username: '14k Posts'
		},
		{
			number: '2. Trending',
			name: 'kerja remote itu asik',
			username: '14k Posts'
		},
		{
			number: '3. Trending',
			name: 'bwa banyak kelas gratis',
			username: '14k Posts'
		},
		{
			number: '4. Trending',
			name: 'mengapa coding sulit',
			username: '14k Posts'
		},
		{
			number: '5. Trending',
			name: 'diskon bwa besar banget',
			username: '14k Posts'
		}
	];
</script>

<div class="background rounded-lg p-4">
	<h1 class="font-bold text-lg pb-3">Indonesia Trends</h1>
	<div>
		{#each users as user, index}
			<div class="flex items-start p-2 bg-transparent text-white rounded-lg">
				<div class="flex">
					<div class="ml-0 grid column">
						<span class="font-light text-md text-color">{user.number}</span>
						<span class="font-semibold text-lg">{user.name}</span>
						<span class="text-md text-color">{user.username}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<br />
	<button class="text-md font-semibold text-blue-500">Show more</button>
</div>

<style>
	.background {
		background-color: #121316;
	}
	.text-color {
		color: #626262;
	}
</style>
