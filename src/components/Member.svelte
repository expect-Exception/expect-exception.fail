<script>
  export let member = {};
  const { imageSrc, name, bio, socials = [], website = {} } = member;
</script>

<div class="max-w-sm rounded overflow-hidden shadow-xl">
  <div class="h-64 flex-none bg-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/members/{imageSrc}')"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">
      {name}
    </div>
    <p class="text-gray-700 text-base">
      {bio}
    </p>
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
    {#if Object.keys(website).length}
      <a href={website.link} class="text-xs" target="_blank" rel="nofollow noreferrer noopener">
        {website.label}
      </a>
    {/if}
  </div>
</div>
