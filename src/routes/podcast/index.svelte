<script context="module">
  export async function preload() {
    const res = await this.fetch("episodes.json");
    const episodes = await res.json();
    const latestEpisode = episodes.pop();
    const reversedEpisodes = episodes.reverse();
    const skimmedReversedEpisodes = episodes.map(episode => ({
      id: episode.id,
      title: episode.title,
      description: episode.description
    }));

    return { episodes, latestEpisode };
  }
</script>

<script>
  import { fadeIn, fadeOut } from "../../utils/page_fade";
  import Headline1 from "../../components/Headline1.svelte";
  import Headline2 from "../../components/Headline2.svelte";
  import EpisodePreview from "../../components/EpisodePreview.svelte";
  import Episode from "../../components/Episode.svelte";
  import Spacer from "../../components/Spacer.svelte";

  export let episodes;
  export let latestEpisode;
</script>

<svelte:head>
  <title>expect(Exception) Podcast</title>
</svelte:head>

<article in:fadeIn out:fadeOut class="max-w-screen-lg m-auto">
  <Headline1 center="{true}">Podcast Episodes</Headline1>
  <Spacer size="md" />

  <Episode episode="{latestEpisode}">
    <aside role="complementary" class="text-tertiary font-bold">
      Most recent Episode
    </aside>
    <Headline2 center="{true}">
      <a href="podcast/{latestEpisode.id}">
        #{latestEpisode.id}
        <strong>{latestEpisode.title}</strong>
      </a>
    </Headline2>
    <Spacer />
  </Episode>

  {#each episodes as episode}
    <Spacer size="md" />
    <EpisodePreview {...episode} />
  {/each}
</article>
