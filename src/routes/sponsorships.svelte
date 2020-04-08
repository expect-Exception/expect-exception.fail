<script>
	import sponsorships from '../data/sponsorships.json';
	import Spacer from '../components/Spacer.svelte';
	import Sponsorship from '../components/Sponsorship.svelte';
</script>

<svelte:head>
	<title>expect(Exception)</title>
</svelte:head>

<article class="container mx-auto px-2">
	<h1 class="sm:text-4xl text-2xl text-center">expect(Exception) Sponsorships</h1>

	<Spacer />
	<Spacer />
	<Spacer />

	<section>
		<h2 class="sm:text-2xl text-xl text-center">Contact Us</h2>
		<Spacer />
		<p class="max-w-xl mx-auto">
			You have feedback, ideas or want to get in touch? Feel free to contact us. You can do that either by sending us a DM on Twitter <!-- TODO --> or an email to mail@expect-exception.fail.
		</p>
	</section>

	<Spacer />
	<Spacer />

	<section>
		<h2 class="sm:text-2xl text-xl text-center">Sponsorships</h2>
		<Spacer />
		<p class="max-w-xl mx-auto">
			Hi! We're Vanessa Böhner, Markus Wolf, Mirjam Bäuerlein, Roman Kuba, David Müllerchen and Nikolaus Rademacher - six frontend developers from all over Germany and Austria. We hope you like our show. Currently we are ready to get off the starting blocks. Right now we only need one sponsorship for this website. We'll add more information as soon as our podcast is up and running.
		</p>


		<Spacer />
		<Spacer />
		<Spacer />
		<Spacer />
	
		{#each sponsorships as sponsorship}
			<Sponsorship {sponsorship} />
		{/each}
	</section>
	
	</article>
