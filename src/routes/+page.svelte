<script lang="ts">
	import Components from './Components/Components.svelte';
	import SignUp from './Sign/SignUp.svelte';
	let showComponents = false;

	function handleSignIn() {
		showComponents = true;
	}
</script>

<section>
	{#if !showComponents}
		<SignUp on:signIn={handleSignIn} />
	{/if}
	{#if showComponents}
		<Components />
	{/if}
</section>
