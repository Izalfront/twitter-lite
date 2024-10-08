<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	interface User {
		icon: string;
		icondesc: string;
		name: string;
		username: string;
		image: string;
	}

	interface Post {
		id: number;
		name: string;
		username: string;
		date: string;
		likes: number;
		isLiked: boolean;
		content: string;
		image: string;
		icon: string;
		icondesc: string;
	}

	const currentUser: User = {
		name: 'BuidlWithAngga',
		username: '@bwa',
		image: '/bwa.png',
		icon: '/happy.png',
		icondesc: 'Happy'
	};

	const posts: Writable<Post[]> = writable([
		{
			id: 1,
			name: 'BuidlWithAngga',
			username: '@bwa',
			date: '12 Feb 2025',
			likes: 400,
			isLiked: true,
			content:
				'Halo semuanya, dalam merayakan ulang tahun BuildWithAngga ke-4 maka kami telah merilis 6 kelas gratis terbaru untuk dipelajari tahun ini.',
			image: '/bwa.png',
			icon: '/happy.png',
			icondesc: 'Happy'
		}
	]);

	let emotes = [
		{
			icon: '/happy.png',
			icondesc: 'Happy'
		},
		{
			icon: '/meledak.png',
			icondesc: 'Shocked'
		},
		{
			icon: '/sad.png',
			icondesc: 'Sad'
		}
	];

	let newPost: string = '';

	function addPost(): void {
		if (newPost.trim()) {
			posts.update(($posts) => [
				{
					id: $posts.length + 1,
					name: currentUser.name,
					username: currentUser.username,
					date: formatDate(new Date()),
					likes: 0,
					isLiked: false,
					content: newPost,
					image: currentUser.image,
					icon: currentUser.icon,
					icondesc: currentUser.icondesc
				},
				...$posts
			]);
			newPost = '';
		}
	}

	function formatDate(date: Date): string {
		const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
		return new Intl.DateTimeFormat('en-GB', options).format(date);
	}

	function toggleLike(postId: number): void {
		posts.update(($posts) =>
			$posts.map((post) => {
				if (post.id === postId) {
					return {
						...post,
						isLiked: !post.isLiked,
						likes: post.isLiked ? post.likes - 1 : post.likes + 1
					};
				}
				return post;
			})
		);
	}
</script>

<div class="text-white">
	<div class="p-4 bordered">
		<div class="flex">
			<img src={currentUser.image} alt={currentUser.name} class="w-10 h-10 rounded-full" />
			<div class="ml-2 grid column w-full">
				<div class="flex items-center space-x-1 mb-20">
					<input
						type="text"
						placeholder="What is happening?!"
						bind:value={newPost}
						class="w-full bg-transparent border-none outline-none font-semibold text-2xl pl-2 opacity-50 placeholder-gray-400 placeholder-italic"
					/>
				</div>

				<div class="flex items-center justify-between">
					<!-- Emotes section -->
					<div class="flex gap-x-2">
						{#each emotes as iconic}
							<div class="flex items-center border-[1px] border-[#1E1E1E] rounded-full px-3 py-1">
								<img src={iconic.icon} alt={iconic.icondesc} class="w-6 h-6 mr-2" />
								<p class="text-lg font-semibold">{iconic.icondesc}</p>
							</div>
						{/each}
					</div>

					<!-- Post button -->
					<div class="flex justify-end">
						<button
							on:click={addPost}
							class="flex items-center rounded-full px-8 py-2 font-bold bg-[#1880E8] text-white text-md"
						>
							Post
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	{#each $posts as post (post.id)}
		<div class="p-4 bordered">
			<div class="flex justify-between items-start">
				<div class="flex">
					<img src={post.image} alt={post.name} class="w-10 h-10 rounded-full" />
					<div class="ml-2 grid column">
						<div class="flex items-center space-x-1">
							<span class="font-semibold">{post.name}</span>
							<img src="/verify.svg" alt="" />
						</div>
						<div class="flex gap-x-2">
							<span class="text-sm text-[#626262]">{post.username}</span>
							<span class="text-sm text-[#626262]">{post.date}</span>
						</div>
						<div class="pt-4">
							<p class="font-light pb-3">{post.content}</p>
						</div>
						<div class="pt-1 flex gap-3">
							<div class="flex items-center text-[#626262] text-sm">
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<span
									on:click={() => toggleLike(post.id)}
									class="cursor-pointer"
									style="color: {post.isLiked ? 'red' : '#626262'}"
								>
									<svg
										width="20"
										height="21"
										viewBox="0 0 20 21"
										fill={post.isLiked ? 'red' : 'none'}
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.5167 17.8416C10.2334 17.9416 9.76669 17.9416 9.48335 17.8416C7.06669 17.0166 1.66669 13.575 1.66669 7.74165C1.66669 5.16665 3.74169 3.08331 6.30002 3.08331C7.81669 3.08331 9.15835 3.81665 10 4.94998C10.8417 3.81665 12.1917 3.08331 13.7 3.08331C16.2584 3.08331 18.3334 5.16665 18.3334 7.74165C18.3334 13.575 12.9334 17.0166 10.5167 17.8416Z"
											stroke={post.isLiked ? 'none' : '#5E6368'}
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
								<span class="ml-1" style="color: {post.isLiked ? 'red' : '#626262'}">
									{post.likes} Likes
								</span>
							</div>
						</div>
					</div>
				</div>
				<div class="flex items-center border-[1px] border-[#1E1E1E] rounded-full px-3 py-1">
					<img src={post.icon} alt="" class="w-6 h-6 mr-2" />
					<p class="text-lg font-semibold">{post.icondesc}</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.bordered {
		border-bottom: 1px solid #1e1e1e;
	}
</style>
