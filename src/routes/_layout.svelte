<script>
	import Nav from '../components/Nav.svelte';
	import Spacer from '../components/Spacer.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main class="container my-8 mx-auto px-4 text-primary-text">
	<slot></slot>
</main>

<Spacer />
<Spacer />
<Spacer />
<Spacer />
<Spacer />

<footer class="bg-primary-dark text-text text-center sm:text-sm text-xs p-4">
	<Footer />
</footer>