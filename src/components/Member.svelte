<script>
  export let member = {};
  const { imageSrc, name, bio, socials = [], website = {} } = member;
  const twitter = socials.find(social => social.key === "twitter") || {};
  const handle = twitter.link ? twitter.link.split("/").pop() : "";
</script>

<div
  class="flex flex-col justify-between max-w-sm rounded overflow-hidden
  shadow-xl"
>
  <div>
    {#if handle}
      <div class="group h-64 cursor-pointer overflow-hidden">
        <div
          class="relative h-full transition delay-75 duration-300 ease-in-out
          transform group-hover:scale-110 bg-center bg-cover rounded-t
          lg:rounded-t-none lg:rounded-l text-center"
          style="background-image: url('/members/{imageSrc}');"
        >
          <div
            class="absolute inset-0 h-64 bg-primary opacity-0
            group-hover:opacity-75 transition-opacity duration-1000 ease-out"
          ></div>
          <a
            href="{twitter.link}"
            rel="nofollow noreferrer noopener"
            target="_blank"
            class="z-100 absolute inset-0 h-6 m-auto text-xl text-white
            text-center underline opacity-0 group-hover:opacity-100
            transition-opacity duration-1000 ease-out"
          >
            @{handle}
          </a>
        </div>
      </div>
    {:else}
      <div
        class="h-64 bg-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l
        text-center"
        style="background-image: url('/members/{imageSrc}');"
      ></div>
    {/if}
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{name}</div>
      <p class="text-gray-700 text-base">{bio}</p>
    </div>
  </div>
  <div class="px-6 py-4 flex justify-between">
    {#if socials.length > 0}
      <div class="flex justify-start">
        {#each socials as social}
          <a href="{social.link}" aria-label="View {name} on {social.key}">
            <i aria-hidden="true" class="fa fa-{social.key} mr-4"></i>
          </a>
        {/each}
      </div>
    {/if}
    {#if website.link && website.label}
      <a
        href="{website.link}"
        class="text-xs"
        target="_blank"
        rel="nofollow noreferrer noopener"
      >
        {website.label}
      </a>
    {/if}
  </div>
</div>
