<script context="module">
  export async function preload() {
    const res = await this.fetch("episodes.json");
    const episodes = await res.json();
    const reversedEpisodes = episodes
      .map((episode) => ({
        id: episode.id,
        title: episode.title,
        description: episode.description,
      }))
      .reverse();

    return { reversedEpisodes };
  }
</script>

<script>
  import { fadeIn, fadeOut } from "../../utils/page_fade";
  import Headline1 from "../../components/Headline1.svelte";
  import Episode from "../../components/Episode.svelte";
  import Spacer from "../../components/Spacer.svelte";

  export let reversedEpisodes;
</script>

<svelte:head>
  <title>expect(Exception) Podcast</title>
</svelte:head>

<article class="max-w-screen-lg m-auto">
  <Headline1 center={true}>Podcast Episodes</Headline1>
  <Spacer size="md" />
  {#each reversedEpisodes as episode}
    <Episode {...episode} />
  {/each}
</article>
