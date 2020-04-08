<script>
	import members from '../data/members.json';
	import Spacer from '../components/Spacer.svelte';
	import Member from '../components/Member.svelte';
</script>

<svelte:head>
	<title>expect(Exception) About Us</title>
</svelte:head>

<article class="container mx-auto px-2 text-center">
	<h1 class="sm:text-4xl text-2xl">About expect(Exception)</h1>

	<Spacer />
	<Spacer />
	<Spacer />

	<section class="flex flex-wrap justify-around">
		{#each members as member}
			<div class="lg:w-1/2 mb-8 flex justify-center">
				<Member {member} />
			</div>
		{/each}
	</section>
</article>
