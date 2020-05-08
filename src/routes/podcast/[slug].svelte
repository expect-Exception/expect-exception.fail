<script context="module">
  export async function preload(page) {
    const { slug } = page.params;
    return { slug };
  }
</script>

<script>
  import { fadeIn, fadeOut } from "../../utils/page_fade";
  import Headline1 from "../../components/Headline1.svelte";
  import Spacer from "../../components/Spacer.svelte";

  export let slug;
</script>

<svelte:head>
  <title>expect(Exception) Podcast</title>
</svelte:head>

<article class="text-center">
  <Headline1>Podcast Nr. {slug}</Headline1>
  <Spacer size="md"></Spacer>

  <figure class="max-w-full">
    <img src="under_construction.svg" alt="Page is under construction" />
  </figure>

  <Spacer></Spacer>
  <p class="sm:text-2xl text-xl"><strong>Under Construction</strong></p>
</article>
