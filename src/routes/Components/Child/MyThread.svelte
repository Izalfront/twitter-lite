<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	interface User {
		name: string;
		username: string;
		image: string;
	}

	interface Reply {
		id: number;
		name: string;
		username: string;
		date: string;
		likes: number;
		isLiked: boolean;
		content: string;
		image: string;
	}

	interface Post extends Reply {
		replies: Reply[];
	}

	interface NewPost {
		content: string;
		replyingTo: number | null;
	}

	const currentUser: User = {
		name: 'BuidlWithAngga',
		username: '@bwa',
		image: '/bwa.png'
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
			replies: []
		}
	]);

	let newPost: NewPost = {
		content: '',
		replyingTo: null
	};

	function addPost(): void {
		if (newPost.content.trim()) {
			posts.update(($posts) => [
				{
					id: $posts.length + 1,
					name: currentUser.name,
					username: currentUser.username,
					date: new Date().toLocaleDateString(),
					likes: 0,
					isLiked: false,
					content: newPost.content,
					image: currentUser.image,
					replies: []
				},
				...$posts
			]);
			newPost.content = '';
			newPost.replyingTo = null;
		}
	}

	function addReply(postId: number): void {
		if (newPost.content.trim()) {
			posts.update(($posts) =>
				$posts.map((post) => {
					if (post.id === postId) {
						return {
							...post,
							replies: [
								...post.replies,
								{
									id: post.replies.length + 1,
									name: currentUser.name,
									username: currentUser.username,
									date: new Date().toLocaleDateString(),
									likes: 0,
									isLiked: false,
									content: newPost.content,
									image: currentUser.image
								}
							]
						};
					}
					return post;
				})
			);
			newPost.content = '';
			newPost.replyingTo = null;
		}
	}

	function toggleLike(
		postId: number,
		isReply: boolean = false,
		replyId: number | null = null
	): void {
		posts.update(($posts) =>
			$posts.map((post) => {
				if (isReply && post.id === postId && replyId !== null) {
					return {
						...post,
						replies: post.replies.map((reply) => {
							if (reply.id === replyId) {
								return {
									...reply,
									isLiked: !reply.isLiked,
									likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1
								};
							}
							return reply;
						})
					};
				} else if (!isReply && post.id === postId) {
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
				<div class="flex items-center space-x-1">
					<input
						type="text"
						placeholder="What is happening?!"
						bind:value={newPost.content}
						class="w-full bg-transparent border-none outline-none"
					/>
				</div>
				<div class="pt-4 flex justify-end">
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
	{#each $posts as post (post.id)}
		<div class="p-4 bordered">
			<div class="flex">
				<img src={post.image} alt={post.name} class="w-10 h-10 rounded-full" />
				<div class="ml-2 grid column">
					<div class="flex items-center space-x-1">
						<span class="font-semibold">{post.name}</span>
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
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							class="flex items-center text-[#626262] text-sm cursor-pointer"
							on:click={() => (newPost.replyingTo = post.id)}
						>
							<span>
								<svg
									width="20"
									height="21"
									viewBox="0 0 20 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.08317 10.5H12.9165"
										stroke="#5E6368"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M10 13.4167V7.58337"
										stroke="#5E6368"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M7.50008 18.8334H12.5001C16.6667 18.8334 18.3334 17.1667 18.3334 13.0001V8.00008C18.3334 3.83341 16.6667 2.16675 12.5001 2.16675H7.50008C3.33341 2.16675 1.66675 3.83341 1.66675 8.00008V13.0001C1.66675 17.1667 3.33341 18.8334 7.50008 18.8334Z"
										stroke="#5E6368"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
							<span class="ml-1">Reply</span>
						</div>
					</div>
				</div>
			</div>
			{#if newPost.replyingTo === post.id}
				<div class="mt-4 ml-12">
					<input
						type="text"
						placeholder="Write a reply..."
						bind:value={newPost.content}
						class="w-full bg-transparent border-none outline-none"
					/>
					<div class="flex justify-end mt-2">
						<button
							on:click={() => addReply(post.id)}
							class="flex items-center rounded-full px-4 py-1 font-bold bg-[#1880E8] text-white text-sm"
						>
							Reply
						</button>
					</div>
				</div>
			{/if}
			{#each post.replies as reply (reply.id)}
				<div class="mt-4 ml-12">
					<div class="flex">
						<img src={reply.image} alt={reply.name} class="w-8 h-8 rounded-full" />
						<div class="ml-2 grid column">
							<div class="flex items-center space-x-1">
								<span class="font-semibold">{reply.name}</span>
							</div>
							<div class="flex gap-x-2">
								<span class="text-sm text-[#626262]">{reply.username}</span>
								<span class="text-sm text-[#626262]">{reply.date}</span>
							</div>
							<div class="pt-2">
								<p class="font-light pb-2">{reply.content}</p>
							</div>
							<div class="flex items-center text-[#626262] text-sm">
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<span
									on:click={() => toggleLike(post.id, true, reply.id)}
									class="cursor-pointer"
									style="color: {reply.isLiked ? 'red' : '#626262'}"
								>
									<svg
										width="16"
										height="17"
										viewBox="0 0 20 21"
										fill={reply.isLiked ? 'red' : 'none'}
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.5167 17.8416C10.2334 17.9416 9.76669 17.9416 9.48335 17.8416C7.06669 17.0166 1.66669 13.575 1.66669 7.74165C1.66669 5.16665 3.74169 3.08331 6.30002 3.08331C7.81669 3.08331 9.15835 3.81665 10 4.94998C10.8417 3.81665 12.1917 3.08331 13.7 3.08331C16.2584 3.08331 18.3334 5.16665 18.3334 7.74165C18.3334 13.575 12.9334 17.0166 10.5167 17.8416Z"
											stroke={reply.isLiked ? 'none' : '#5E6368'}
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
								<span class="ml-1" style="color: {reply.isLiked ? 'red' : '#626262'}"
									>{reply.likes} Likes</span
								>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.bordered {
		border-bottom: 1px solid #1e1e1e;
	}
</style>
