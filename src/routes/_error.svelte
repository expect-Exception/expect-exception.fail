<script>
	import NotFound from '../assets/not_found.svelte';
	import Spacer from '../components/spacer.svelte';

	export let status;
	export let notFound = status === 404;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

{#if notFound}
	<figure class="max-w-full px-4">
		<NotFound  />
	</figure>
	
	<Spacer />
	<Spacer />
	<Spacer />

	<div class="text-center text-xl">
		<strong><a href="/" class="text-primary hover:text-primary-dark hover:cursor-pointer">Go Home</a></strong>
	</div>
{:else}
	<h1>{status}</h1>

	<p>{error.message}</p>
{/if}

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
