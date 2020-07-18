<style lang="scss">
  .logo {
    max-width: 300px;
  }
</style>

<script>
  import Link from "./Link.svelte";
  export let segment;

  const item = "block text-center sm:float-left";
  const anchor = "relative inline-block pt-4 pb-2 px-2 hover:cursor-pointer";
</script>

<nav class="p-4 flex flex-wrap justify-center md:justify-between bg-white">
  <div class="w-full md:w-auto mb-8 md:mb-0">
    <div class="logo mx-auto">
      <a href=".">
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="expect_exception_logo_long.svg"
          />
          <img
            src="expect_exception_logo.svg"
            alt="expect(Exception) Logo"
            class="max-w-full"
          />
        </picture>
      </a>
    </div>
  </div>
  <ul class="m-0 p-0 clearfix text-xl md:text-base">
    <li class="{item} {anchor}">
      <Link href="." selected="{segment === undefined}">Home</Link>
    </li>
    <li class="{item} {anchor}">
      <Link href="/about" selected="{segment === 'about'}">
        Exceptional Crew
      </Link>
    </li>
    <li class="{item} {anchor}">
      <Link href="/podcast" selected="{segment === 'podcast'}">Podcast</Link>
    </li>
    <li class="{item} {anchor}">
      <Link href="/sponsorships" selected="{segment === 'sponsorships'}">
        Sponsorships
      </Link>
    </li>
  </ul>
</nav>
