<script>
  import Headline2 from "./Headline2.svelte";
  import Audio from "./Audio.svelte";
  import LinkedList from "./LinkedList.svelte";
  import Spacer from "./Spacer.svelte";

  export let episode;
  const { id, title, description, links, picks, hosts, sponsors } = episode;
</script>

<section class="px-4 py-8 md:px-16 md:py-12 bg-primary-light rounded-lg">
  <slot />
  <Spacer />
  <p class="my-8">{description}</p>
  <Audio {id} />
  <Spacer />
  {#if links && links.length > 0}
    <Spacer size="sm" />
    <Headline2>Links</Headline2>
    <LinkedList items="{links}" />
  {/if}
  {#if picks && picks.length > 0}
    <Spacer size="sm" />
    <Headline2>Picks</Headline2>
    <LinkedList items="{picks}" />
  {/if}
  {#if hosts && hosts.length > 0}
    <Spacer size="sm" />
    <Headline2>Hosts</Headline2>
    <div class="text-sm">
      {#each hosts as { name, socials }}
        <p class="pb-2">
          {name}
          {#each socials as { href, label }}
            {#if ['github', 'twitter'].includes(label.toLowerCase())}
              <a
                {href}
                target="_blank"
                rel="nofollow nooponer noreferrer"
                aria-label="{`${name} ${label} Account`}"
              >
                <i
                  aria-hidden="true"
                  class="fa fa-{label.toLowerCase()} ml-3 text-lg text-link"
                ></i>
              </a>
            {:else}
              <a
                {href}
                target="_blank"
                rel="nofollow nooponer noreferrer"
                class="ml-3 text-link"
              >
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
    <LinkedList items="{sponsors}" />
  {/if}
</section>
