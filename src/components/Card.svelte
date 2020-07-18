<script>
  export let item;
  const { label, icon, link } = item;
  const { href, target, rel, type } = link;
</script>

<a {href} {target} {rel} aria-label="{label}">
  <section
    class="group cursor-pointer border rounded-lg p-5 text-white
    bg-gradient-dark-to-primary transition transform hover:scale-105
    duration-500 ease-in-out"
  >
    <h3 class="pb-2 text-center text-xl">{label}</h3>
    <hr />
    <div class="pt-2 flex justify-between">
      <div>
        <p class="my-4">
          <slot />
        </p>
        <a {href} {target} {rel}>
          {label}
          <span
            class="opacity-0 group-hover:opacity-100 transition-opacity
            duration-500 ease-in-out fa fa-{type} inline-block ml-2"
          ></span>
        </a>
      </div>
      <div class="ml-8 flex flex-col justify-center">
        <i
          aria-hidden="true"
          class="fa fa-{icon} text-5xl transition transform hover:scale-125
          ease-out duration-700"
        ></i>
      </div>
    </div>
  </section>
</a>
