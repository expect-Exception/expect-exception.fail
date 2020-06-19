<script context="module">
  export async function preload(page) {
    const { slug } = page.params;

    const res = await this.fetch("episodes.json");
    const episodes = await res.json();

    const lookup = new Map();

    episodes.forEach((episode) => {
      lookup.set(episode.id, episode);
    });

    const episode = lookup.get(slug);
    return { episode };
  }
</script>

<script>
  import { fadeIn, fadeOut } from "../../utils/page_fade";
  import Headline1 from "../../components/Headline1.svelte";
  import Headline2 from "../../components/Headline2.svelte";
  import Spacer from "../../components/Spacer.svelte";
  import Audio from "../../components/Audio.svelte";
  import LinkedList from "../../components/LinkedList.svelte";
  import BackLink from "../../components/BackLink.svelte";

  export let episode;
  const { id, title, description, links, hosts, sponsors } = episode;
</script>

<svelte:head>
  <title>expect(Exception) Podcast</title>
</svelte:head>

<article class="max-w-screen-lg m-auto">
  <BackLink />
  <Spacer />
  <Headline1 center={true}>
    #{id}:
    <strong>{title}</strong>
  </Headline1>
  <Spacer />
  <p class="my-8">{description}</p>
  <Audio {id} />
  <Spacer />
  {#if links && links.length > 0}
    <Spacer size="sm" />
    <Headline2>Links</Headline2>
    <LinkedList items={links} />
  {/if}
  {#if hosts && hosts.length > 0}
    <Spacer size="sm" />
    <Headline2>Hosts</Headline2>
    <div class="text-sm">
      {#each hosts as { name, socials }}
        <p class="pb-2">
          {name}
          {#each socials as { href, label }}
            {#if label.toLowerCase() !== 'website'}
              <a
                {href}
                target="_blank"
                rel="nofollow nooponer noreferrer"
                aria-label={`${name} ${label} Account`}>
                <i
                  aria-hidden="true"
                  class="fa fa-{label.toLowerCase()} ml-3 text-lg
                  hover:text-primary-dark" />
              </a>
            {:else}
              <a
                {href}
                target="_blank"
                rel="nofollow nooponer noreferrer"
                class="ml-3 hover:text-primary-dark">
                www
              </a>
            {/if}
          {/each}
        </p>
      {/each}
    </div>
  {/if}
  {#if sponsors && sponsors.length > 0}
    <Spacer size="sm" />
    <Headline2>Sponsors</Headline2>
    <LinkedList items={sponsors} />
  {/if}
  <Spacer size="lg" />
  <BackLink />
</article>
