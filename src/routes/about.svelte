<script>
  import { fadeIn, fadeOut } from "../utils/page_fade";
	import members from '../data/members.json';
	import Spacer from '../components/Spacer.svelte';
	import Member from '../components/Member.svelte';
	import Headline1 from '../components/Headline1.svelte';
</script>

<svelte:head>
	<title>expect(Exception) About Us</title>
</svelte:head>

<article in:fadeIn out:fadeOut class="container mx-auto px-2 text-center">
	<Headline1>Your Hosts</Headline1>

	<Spacer size="md" />

	<section class="flex flex-wrap justify-around">
		{#each members as member}
			<div class="lg:w-1/2 mb-8 flex justify-center">
				<Member {member} />
			</div>
		{/each}
	</section>
</article>
