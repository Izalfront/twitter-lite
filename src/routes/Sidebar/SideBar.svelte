<script lang="ts">
	export let selectedMenu: string;
	export let setSelectedMenu: (name: string) => void;

	const title = 'twittr.';

	const menuItems = [
		{ name: 'Home', icon: '/home-hashtag.svg' },
		{ name: 'Explore', icon: '/search-normal.svg' },
		{ name: 'Notifications', icon: '/notification.svg' },
		{ name: 'Messages', icon: '/sms.svg' },
		{ name: 'Bookmarks', icon: '/note-add.svg' },
		{ name: 'Communities', icon: '/group.svg' },
		{ name: 'Profile', icon: '/profile-circle.svg' },
		{ name: 'Sign Out', icon: '/lock-copy.svg' }
	];
</script>

<aside class="border-right w-64 ml-16 text-white h-full">
	<nav class="p-4 pt-8">
		<div class="mb-5">
			<h3 class="text-3xl font-bold mb-2">{title}</h3>
			<ul class="space-y-4 pt-8">
				{#each menuItems as item}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<li
						class="py-1 text-xl cursor-pointer hover:text-blue-500 transition-colors duration-200 flex items-center {selectedMenu ===
						item.name
							? 'font-bold'
							: ''}"
						on:click={() => setSelectedMenu(item.name)}
					>
						<img src={item.icon} alt={item.name} class="w-6 h-6 mr-4" />
						{item.name}
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</aside>

<style>
	.border-right {
		border-right: 1px solid #1e1e1e;
	}
</style>
