<script>
	import Nav from '../components/Nav.svelte';
	import Spacer from '../components/Spacer.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Nav />

<main class="container my-8 mx-auto">
	<slot></slot>
</main>

<Spacer />
<Spacer />
<Spacer />
<Spacer />
<Spacer />

<footer class="border-t border-primary-dark text-center sm:text-sm text-xs p-4">
	<Footer />
</footer>