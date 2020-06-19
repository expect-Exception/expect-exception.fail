<script>
  export let items;
</script>

<ul class="text-sm">
  {#each items as { href, label, detail }}
    <li class="pt-2">
      <a
        {href}
        target="_blank"
        rel="nofollow nooponer noreferrer"
        class="underline hover:text-primary-dark">
        {label}
      </a>
      {#if detail}- {detail}{/if}
    </li>
  {/each}
</ul>
