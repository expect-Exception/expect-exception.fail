<script>
  export let item;
  const { label, icon, link } = item;
  const { href, target, rel, type } = link;
</script>

<section class="border rounded-lg p-5 text-white bg-gradient-dark-to-primary">
  <h3 class="pb-2 text-center text-xl">
    <a {href} {target} {rel} class="cursor-pointer hover:underline">
      {label}
    </a>
  </h3>
  <hr />
  <div class="pt-2 flex justify-between">
    <div>
      <p class="my-4">
        <slot></slot>
      </p>
      <a {href} {target} {rel} class="hover:underline">
        <span class="fa fa-{type} inline-block mr-2"></span>{label}
      </a>
    </div>
    <div class="ml-8 flex flex-col justify-center">
      <a {href} {target} {rel} aria-label="{label}">
        <i
          aria-hidden="true"
          class="fa fa-{icon} text-5xl transition transform hover:scale-125 ease-out duration-700"
        ></i>
      </a>
    </div>
  </div>
</section>
