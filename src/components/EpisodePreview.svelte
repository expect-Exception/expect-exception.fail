<script>
  import Audio from "./Audio.svelte";
  import Link from "./Link.svelte";

  export let id;
  export let title;
  export let description;
</script>

<section class="border-4 border-primary rounded-lg p-5 text-dark">
  <h3 class="pb-4 text-center text-xl">
    <strong>
      <Link href="/podcast/{id}" color="text-link">#{id} {title}</Link>
    </strong>
  </h3>
  <hr class="border border-primary" />
  <div class="pt-2 flex justify-between">
    <div>
      <p class="my-8">{description}</p>
      <Audio {id} />
    </div>
  </div>
</section>
