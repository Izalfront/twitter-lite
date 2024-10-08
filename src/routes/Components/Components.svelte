<script lang="ts">
	import SideBar from '../Sidebar/SideBar.svelte';
	import Content from './Child/Content.svelte';
	import MyThread from './Child/MyThread.svelte';
	import NavContent from './Child/NavContent.svelte';
	import Thread from './Child/Thread.svelte';
	import Profile from './profile/Profile.svelte';

	let selectedMenu = 'Home';

	function setSelectedMenu(name: string) {
		selectedMenu = name;
	}
</script>

<div class="flex justify-between items-start h-[200dvh]">
	<div class="w-1/4 h-full">
		<SideBar {selectedMenu} {setSelectedMenu} />
	</div>
	<div class="flex-grow w-full">
		<NavContent />
		{#if selectedMenu === 'Home'}
			<MyThread />
			<Thread />
		{:else if selectedMenu === 'Profile'}
			<Profile />
		{/if}
	</div>
	<div class="w-1/4 h-[200dvh]">
		<Content />
	</div>
</div>
