<script lang="ts">
	let users = [
		{
			id: 1,
			name: 'Shayna',
			username: '@shayna',
			date: '12 Jan 2025',
			likes: 400,
			isLiked: false,
			chat: 'lorem ipsum dolor sit amet dolor sit amet sit amet',
			image: '/avatar-1.png'
		},
		{
			id: 2,
			name: 'Jhon Doe',
			username: '@john',
			date: '12 Jan 2025',
			likes: 400,
			isLiked: false,
			chat: 'lorem ipsum dolor sit amet dolor sit amet sit amet',
			image: '/avatar-2.png'
		},
		{
			id: 3,
			name: 'Alice Graham',
			username: '@alice',
			date: '12 Jan 2025',
			likes: 400,
			isLiked: false,
			chat: 'lorem ipsum dolor sit amet dolor sit amet sit amet',
			image: '/avatar-3.png'
		}
	];

	let newPost = {
		replyingTo: null as number | null,
		content: ''
	};

	function toggleLike(index: number) {
		const user = users[index];
		if (user.isLiked) {
			user.likes -= 1;
		} else {
			user.likes += 1;
		}
		user.isLiked = !user.isLiked;
	}

	function handleReply(postId: number) {
		newPost.replyingTo = postId;
	}

	function submitReply() {
		if (newPost.content && newPost.replyingTo !== null) {
			const repliedUser = users.find((user) => user.id === newPost.replyingTo);
			if (repliedUser) {
				alert(`Reply to ${repliedUser.name}: ${newPost.content}`);
			}
			// Clear reply state and content after submission
			newPost.replyingTo = null;
			newPost.content = '';
		}
	}
</script>

<div class="text-white">
	{#each users as user, index}
		<div class="p-4 bordered">
			<div class="flex">
				<img src={user.image} alt={user.name} class="w-10 h-10 rounded-full" />
				<div class="ml-2 grid column">
					<div class="flex items-center space-x-1">
						<span class="font-semibold">{user.name}</span>
					</div>
					<div class="flex gap-x-2">
						<span class="text-sm text-[#626262]">{user.username}</span>
						<span class="text-sm text-[#626262]">{user.date}</span>
					</div>
					<!-- isi konten -->
					<div class="pt-4">
						<p class="font-light pb-3">{user.chat}</p>
					</div>
					<!-- like and reply -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div class="pt-1 flex gap-3">
						<!-- Like button -->
						<div class="flex items-center text-[#626262] text-sm">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<span
								on:click={() => toggleLike(index)}
								class="cursor-pointer"
								style="color: {user.isLiked ? 'red' : '#626262'}"
							>
								<svg
									width="20"
									height="21"
									viewBox="0 0 20 21"
									fill={user.isLiked ? 'red' : 'none'}
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.5167 17.8416C10.2334 17.9416 9.76669 17.9416 9.48335 17.8416C7.06669 17.0166 1.66669 13.575 1.66669 7.74165C1.66669 5.16665 3.74169 3.08331 6.30002 3.08331C7.81669 3.08331 9.15835 3.81665 10 4.94998C10.8417 3.81665 12.1917 3.08331 13.7 3.08331C16.2584 3.08331 18.3334 5.16665 18.3334 7.74165C18.3334 13.575 12.9334 17.0166 10.5167 17.8416Z"
										stroke={user.isLiked ? 'none' : '#5E6368'}
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
							<span class="ml-1" style="color: {user.isLiked ? 'red' : '#626262'}"
								>{user.likes} Likes</span
							>
						</div>

						<!-- Reply button -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="flex items-center text-[#626262] text-sm cursor-pointer"
							on:click={() => handleReply(user.id)}
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
		</div>
	{/each}

	<!-- Reply input form -->
	{#if newPost.replyingTo !== null}
		<div class="p-4 mt-2 border-t border-gray-500">
			<h4 class="text-lg">
				Replying to {users.find((user) => user.id === newPost.replyingTo)?.name}
			</h4>
			<textarea
				bind:value={newPost.content}
				class="w-full mt-2 p-2 border rounded"
				placeholder="Write your reply..."
			></textarea>
			<button on:click={submitReply} class="mt-2 p-2 bg-blue-500 text-white rounded"
				>Send Reply</button
			>
		</div>
	{/if}
</div>

<style>
	.bordered {
		border-bottom: 1px solid #1e1e1e;
	}
</style>
