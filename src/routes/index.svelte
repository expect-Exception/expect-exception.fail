<script>
  import { fadeIn, fadeOut } from "../utils/page_fade";
	import UnderConstruction from '../assets/svg/under_construction.svelte';
	import Spacer from '../components/Spacer.svelte';
	import Headline1 from '../components/Headline1.svelte';
	import Headline2 from '../components/Headline2.svelte';
</script>

<svelte:head>
	<title>expect(Exception)</title>
</svelte:head>

<article in:fadeIn out:fadeOut class="text-center">
	<Headline1>expect(Exception)</Headline1>
	<Headline2>The Podcast about Frontend Testing.</Headline2>

	<Spacer />
	<Spacer />
	<Spacer />

	<figure class="max-w-full">
		<UnderConstruction />
	</figure>

	<Spacer />

	<p class="sm:text-2xl text-xl"><strong>Under Construction</strong></p>
</article>
