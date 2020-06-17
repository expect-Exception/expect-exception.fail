<script context="module">
  export async function preload(page) {
    const { slug } = page.params;
    return { slug };
  }
</script>

<script>
  import { fadeIn, fadeOut } from "../../utils/page_fade";
  import Headline1 from "../../components/Headline1.svelte";
  import Headline2 from "../../components/Headline2.svelte";
  import Spacer from "../../components/Spacer.svelte";

  export let slug;
</script>

<svelte:head>
  <title>expect(Exception) Podcast</title>
</svelte:head>

<article class="text-center">
  <Headline1>Podcast Nr. {slug}</Headline1>
  <Spacer size="md" />

  <Headline2>Cypress: E2E Testing</Headline2>

  <p class="my-4">
    Every line of code that is tested is a win for us. Dave, Mirjam and Vanessa
    had a closer look at the E2E testing tool Cypress (Cypress.io). First, they
    clarified what E2E Testing is and which role those tests play in the Testing
    Pyramid. They discussed the pain points other End To End Testing Suites like
    Selenium. But is Cypress the perfect newcomer on the market or is it just
    another hype? They talked about the weak points of the library, too.
  </p>

  <audio controls>
    <source
      src="https://vannsl.io/expect-exception/expect-exception-{slug}.mp3"
      type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</article>
