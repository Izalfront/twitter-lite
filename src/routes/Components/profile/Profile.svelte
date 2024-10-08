<script lang="ts">
	import MyThread from '../Child/MyThread.svelte';
	import MyThreadPostProfile from './child-profile/MyThreadPostProfile.svelte';
	import MyThreadProfile from './child-profile/MyThreadProfile.svelte';

	let selectedTab: string = 'Posts';

	const tabs = ['Posts', 'Replies', 'Highlights', 'Media', 'Likes'];

	function selectTab(tab: string) {
		selectedTab = tab;
	}
</script>

<div class="text-white">
	<div class="block">
		<div class="relative">
			<img src="./image4.png" alt="" class="w-full h-auto" />
			<div>
				<img src="./bwa-hd.png" alt="" class="absolute w-48 left-6 -bottom-20" />
				<div
					class="absolute left-[1.1rem] bottom-[-5.3rem] p-[6rem] border-[6px] border-[#010003] border- rounded-full"
				></div>
			</div>
		</div>
		<div class="block pt-24 pl-6">
			<div class="flex justify-start space-x-2 items-center">
				<h1 class="text-3xl font-bold">BuildWithAngga</h1>
				<img src="./verify.svg" alt="" class="w-7 mt-[10px]" />
			</div>
			<p class="text-xl text-[#5E6368]">@buildwithangga</p>
			<p class="text-xl text-white pt-10 pr-2">
				Tempat belajar skills Product Design & Software Development bersama mentor berpengalaman
				dengan komunitas yang supportive.
			</p>
			<div class="flex justify-start space-x-4 pt-6">
				<div class="flex space-x-1">
					<img src="./briefcase.svg" alt="" />
					<p class="text-xl text-[#5E6368]">UX Designer</p>
				</div>
				<div class="flex space-x-1">
					<img src="./location.svg" alt="" />
					<p class="text-xl text-[#5E6368]">Indonesia</p>
				</div>
			</div>
			<div class="flex justify-start space-x-4 pt-6">
				<div class="flex space-x-1">
					<p class="text-xl text-white font-bold">12</p>
					<p class="text-xl text-[#5E6368]">Following</p>
				</div>
				<div class="flex space-x-1">
					<p class="text-xl text-white font-bold">18,309</p>
					<p class="text-xl text-[#5E6368]">Followers</p>
				</div>
			</div>
		</div>
		<!-- navigation bar bottom -->
		<div class="flex justify-around text-xl px-6 pt-12 text-[#5E6368] cursor-pointer bordered">
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
		<!-- MyThread -->
		<MyThreadPostProfile />
	</div>
</div>

<style>
	.bordered {
		border-bottom: 1px solid #1e1e1e;
	}
</style>
