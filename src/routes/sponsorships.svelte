<script>
  import { fadeIn, fadeOut } from "../utils/page_fade";
  import sponsorships from "../data/sponsorships.json";
  import Spacer from "../components/Spacer.svelte";
  import Sponsorship from "../components/Sponsorship.svelte";
  import Headline1 from "../components/Headline1.svelte";
  import Headline2 from "../components/Headline2.svelte";
</script>

<svelte:head>
  <title>expect(Exception)</title>
</svelte:head>

<article in:fadeIn out:fadeOut class="container mx-auto px-2">
  <Headline1 center="{true}">Our Sponsorhips</Headline1>

  <Spacer size="md"></Spacer>

  <section>
    <Headline2 center="{true}">Contact Us</Headline2>
    <Spacer></Spacer>
    <p class="max-w-xl mx-auto">
      You have feedback, ideas or want to get in touch? Feel free to contact us.
      You can do that either by sending us a DM on Twitter
      <!-- TODO -->
      or an email to mail@expect-exception.fail.
    </p>
  </section>

  <Spacer size="sm"></Spacer>

  <section>
    <Headline2 center="{true}">Sponsorships</Headline2>
    <Spacer></Spacer>
    <p class="max-w-xl mx-auto">
      Hi! We're Vanessa Böhner, Markus Wolf, Mirjam Bäuerlein, Roman Kuba, David
      Müllerchen and Nikolaus Rademacher - six frontend developers from all over
      Germany and Austria. We hope you like our show. Currently we are ready to
      get off the starting blocks. Right now we only need one sponsorship for
      this website. We'll add more information as soon as our podcast is up and
      running.
    </p>

    <Spacer size="lg"></Spacer>

    {#each sponsorships as sponsorship}
    <Sponsorship {sponsorship}></Sponsorship>
    {/each}
  </section>
</article>
