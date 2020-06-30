<script context="module">
  export async function preload(page) {
    const { slug } = page.params;

    const res = await this.fetch("episodes.json");
    const episodes = await res.json();

    const lookup = new Map();

    episodes.forEach(episode => {
      lookup.set(episode.id, episode);
    });

    const episode = lookup.get(slug);
    return { episode };
  }
</script>

<script>
  import { fadeIn, fadeOut } from "../../utils/page_fade";
  import Spacer from "../../components/Spacer.svelte";
  import BackLink from "../../components/BackLink.svelte";
  import Episode from "../../components/Episode.svelte";
  import Headline1 from "../../components/Headline1.svelte";

  export let episode;
</script>

<svelte:head>
  <title>expect(Exception) Podcast</title>
</svelte:head>

<article in:fadeIn out:fadeOut class="max-w-screen-lg m-auto">
  <BackLink />
  <Spacer mdSize="md" />
  <Episode {episode}>
    <Headline1 center="{true}">
      #{episode.id}
      <strong>{episode.title}</strong>
    </Headline1>
  </Episode>
  <Spacer mdSize="md" />
  <BackLink />
</article>
