<script lang="ts">
	import SideBar from '../Sidebar/SideBar.svelte';
	import Content from './Child/Content.svelte';
	import MyThread from './Child/MyThread.svelte';
	import NavContent from './Child/NavContent.svelte';
	import Thread from './Child/Thread.svelte';
</script>

<div class="flex justify-between items-start h-screen">
	<div class="w-1/4">
		<SideBar />
	</div>
	<div class="flex-grow w-full">
		<NavContent />
		<MyThread />
		<Thread />
	</div>
	<div class="w-1/4">
		<Content />
	</div>
</div>
