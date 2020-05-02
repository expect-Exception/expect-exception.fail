<script>
  import Nav from "../components/Nav.svelte";
  import Spacer from "../components/Spacer.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<div class="relative min-h-screen bg-gray-100">
  <Nav {segment}></Nav>

  <Spacer size="sm" mdSize="xs"></Spacer>

  <main class="container my-8 mx-auto px-4 text-primary-text">
    <slot></slot>
  </main>

  <Spacer size="xl"></Spacer>

  <footer
    class="absolute bottom-0 w-full h-32 p-4 bg-primary-dark text-text text-center text-xs sm:text-sm"
  >
    <Footer></Footer>
  </footer>
</div>
