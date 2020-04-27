<script>
  import { fadeIn, fadeOut } from "../utils/page_fade";
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

	<Spacer size="md" />

	<p>
		expect(Exception) is about Frontend Testing. We are open to discuss every single detail of that opinionated topics.
		Unit, Integratiom E2E, Snapshot, Visual Regressiong, Tools and Frameworks and so on.
		There are two platforms: an open discussion forum for everyone and a podcast.
		Every episode, some of <a href="/about">your hosts</a> talk about specific discussions of the open forum.
	</p>

</article>
