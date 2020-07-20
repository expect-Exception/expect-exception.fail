<script>
  export let items;
</script>

<ul class="text-sm">
  {#each items as { href, prefix, label, detail }}
    <li class="pt-2">
      {#if prefix}{prefix}:{/if}
      <a
        {href}
        target="_blank"
        rel="nofollow noopener"
        class="underline text-link font-bold"
      >
        {label}
      </a>
      {#if detail}- {detail}{/if}
    </li>
  {/each}
</ul>
