<script lang="ts">
	let users = [
		{
			name: 'Shayna',
			username: '@shayna',
			date: '12 Jan 2025',
			likes: 400,
			isLiked: false,
			chat: 'lorem ipsum dolor sit amet dolor sit amet sit amet',
			image: '/avatar-1.png'
		},
		{
			name: 'Jhon Doe',
			username: '@john',
			date: '12 Jan 2025',
			likes: 400,
			isLiked: false,
			chat: 'lorem ipsum dolor sit amet dolor sit amet sit amet',
			image: '/avatar-2.png'
		},
		{
			name: 'Alice Graham',
			username: '@alice',
			date: '12 Jan 2025',
			likes: 400,
			isLiked: false,
			chat: 'lorem ipsum dolor sit amet dolor sit amet sit amet',
			image: '/avatar-3.png'
		}
	];

	function toggleLike(index: number) {
		const user = users[index];
		if (user.isLiked) {
			user.likes -= 1;
		} else {
			user.likes += 1;
		}
		user.isLiked = !user.isLiked;
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
						<span class="text-sm text-color">{user.username}</span>
						<span class="text-sm text-color">{user.date}</span>
					</div>
					<!-- isi konten -->
					<div class="pt-4">
						<p class="font-light">{user.chat}</p>
					</div>
					<!-- like and report -->
					<div class="pt-1 flex gap-3">
						<div class="flex items-center text-color text-sm">
							<!-- Like button -->
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
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.5167 17.8416C10.2334 17.9416 9.76669 17.9416 9.48335 17.8416C7.06669 17.0166 1.66669 13.575 1.66669 7.74165C1.66669 5.16665 3.74169 3.08331 6.30002 3.08331C7.81669 3.08331 9.15835 3.81665 10 4.94998C10.8417 3.81665 12.1917 3.08331 13.7 3.08331C16.2584 3.08331 18.3334 5.16665 18.3334 7.74165C18.3334 13.575 12.9334 17.0166 10.5167 17.8416Z"
										stroke={user.isLiked ? 'red' : '#5E6368'}
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
							<span class="ml-1">{user.likes} Likes</span>
						</div>
						<div class="flex items-center text-color text-sm">
							<span>
								<svg
									width="20"
									height="21"
									viewBox="0 0 20 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 6.95831V11.3333"
										stroke="#5E6368"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M17.5666 7.65005V13.35C17.5666 14.2834 17.0666 15.1501 16.2583 15.6251L11.3083 18.4834C10.5 18.95 9.49994 18.95 8.68327 18.4834L3.73327 15.6251C2.92493 15.1584 2.42493 14.2917 2.42493 13.35V7.65005C2.42493 6.71672 2.92493 5.85001 3.73327 5.37501L8.68327 2.51669C9.4916 2.05002 10.4916 2.05002 11.3083 2.51669L16.2583 5.37501C17.0666 5.85001 17.5666 6.70838 17.5666 7.65005Z"
										stroke="#5E6368"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M10 14V14.0833"
										stroke="#5E6368"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
							<span class="ml-1">Report</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.bordered {
		border-bottom: 1px solid #1e1e1e;
	}
	.text-color {
		color: #626262;
	}
	.cursor-pointer {
		cursor: pointer;
	}
</style>
