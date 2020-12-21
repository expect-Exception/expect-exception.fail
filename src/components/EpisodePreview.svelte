<script>
  import Audio from "./Audio.svelte";
  import Link from "./Link.svelte";

  export let id;
  export let link;
  export let title;
  export let subtitle;
</script>

<section class="border-4 border-primary rounded-lg p-5 text-dark">
  <h3 class="pb-4 text-center text-xl">
    <strong>
      <Link href="/podcast/{id}" color="text-link">#{id} {title}</Link>
    </strong>
  </h3>
  <hr class="border border-primary" />
  <div class="pt-2 flex justify-center">
    <div>
      <p class="my-8">{subtitle}</p>
      <Audio {link} />
    </div>
  </div>
</section>
