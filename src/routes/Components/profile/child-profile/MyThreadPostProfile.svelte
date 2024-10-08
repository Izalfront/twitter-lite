<script lang="ts">
	let users = [
		{
			id: 1,
			name: 'BuildWithAngga',
			username: '@bwa',
			date: '12 Jan 2024',
			likes: 22,
			isLiked: true,
			chat: 'Halo semuanya, dalam merayakan ulang tahun BuildWithAngga ke-4 maka kami telah merilis 6 kelas gratis terbaru untuk dipelajari tahun ini.',
			image: '/bwa.png',
			icon: '/happy.png',
			icondesc: 'Happy'
		},
		{
			id: 2,
			name: 'BuildWithAngga',
			username: '@bwa',
			date: '12 Jan 2024',
			likes: 394,
			isLiked: false,
			chat: 'Javascript susah juga buat pemula',
			image: '/bwa.png',
			icon: '/sad.png',
			icondesc: 'Sad'
		},
		{
			id: 3,
			name: 'BuildWithAngga',
			username: '@bwa',
			date: '12 Jan 2024',
			likes: 394,
			isLiked: false,
			chat: 'Besok libur, bisa upgrade skills engineering!!!',
			image: '/bwa.png',
			icon: '/meledak.png',
			icondesc: 'Shocked'
		},
		{
			id: 4,
			name: 'BuildWithAngga',
			username: '@bwa',
			date: '12 Jan 2024',
			likes: 22,
			isLiked: true,
			chat: 'Halo semuanya, dalam merayakan ulang tahun BuildWithAngga ke-4 maka kami telah merilis 6 kelas gratis terbaru untuk dipelajari tahun ini.',
			image: '/bwa.png',
			icon: '/happy.png',
			icondesc: 'Happy'
		}
	];

	function toggleLike(index: number) {
		users = users.map((user, i) => {
			if (i === index) {
				return {
					...user,
					isLiked: !user.isLiked,
					likes: user.likes + (user.isLiked ? -1 : 1)
				};
			}
			return user;
		});
	}
</script>

<div class="text-white">
	{#each users as user, index}
		<div class="p-4 bordered">
			<div class="flex justify-between items-start">
				<div class="flex">
					<img src={user.image} alt={user.name} class="w-10 h-10 rounded-full" />
					<div class="ml-2 flex flex-col">
						<div class="flex items-center space-x-1">
							<span class="font-semibold">{user.name}</span>
							<img src="/verify.svg" alt="" />
						</div>

						<div class="flex gap-x-2">
							<span class="text-sm text-[#626262]">{user.username}</span>
							<span class="text-sm text-[#626262]">{user.date}</span>
						</div>

						<!-- isi konten -->
						<div class="pt-4">
							<p class="font-light pb-3">{user.chat}</p>
						</div>
						<!-- like -->
						<div class="pt-1 flex gap-3">
							<!-- Like button -->
							<div class="flex items-center text-[#626262] text-sm">
								<button
									on:click={() => toggleLike(index)}
									class="cursor-pointer"
									style="color: {user.isLiked ? 'red' : '#626262'}"
									aria-label={user.isLiked ? 'Unlike' : 'Like'}
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
								</button>
								<span class="ml-1" style="color: {user.isLiked ? 'red' : '#626262'}">
									{user.likes} Likes
								</span>
							</div>
							<div class="flex cursor-pointer">
								<img src="/trash.svg" alt="" />
								<p class="text-[#5E6368] pl-1">Delete</p>
							</div>
						</div>
					</div>
				</div>
				<div class="flex items-center border-[1px] border-[#1E1E1E] rounded-full px-3 py-1">
					<img src={user.icon} alt="" class="w-6 h-6 mr-2" />
					<p class="text-lg font-semibold">{user.icondesc}</p>
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
