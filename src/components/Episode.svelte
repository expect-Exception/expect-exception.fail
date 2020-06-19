<script>
  import Audio from "./Audio.svelte";

  export let id;
  export let title;
  export let description;
</script>

<section class="border rounded-lg p-5 text-white bg-gradient-dark-to-primary">
  <h3 class="pb-2 text-center text-xl">
    #{id}:
    <strong>
      <a href="/podcast/{id}" class="cursor-pointer hover:underline">{title}</a>
    </strong>
  </h3>
  <hr />
  <div class="pt-2 flex justify-between">
    <div>
      <p class="my-8">{description}</p>
      <Audio {id} />
    </div>
  </div>
</section>
