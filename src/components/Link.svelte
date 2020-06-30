<style>
  a,
  a:visited,
  a:hover,
  a:active {
    backface-visibility: hidden;
    position: relative;
    transition: 0.5s color ease;
  }
  a.selected:after,
  a:hover:after {
    width: 100%;
  }
  a:after {
    content: "";
    bottom: -0.5em;
    left: 0;
    transition: 0.5s all ease;
    backface-visibility: hidden;
    position: absolute;
    height: 0.125em;
    width: 0;
    background: #303f9f;
  }
</style>

<script>
  export let href;
  export let grouped = false;
  export let selected = false;
  export let color = "text-primary-text";
</script>

<a
  {href}
  class:group="{grouped}"
  class:selected
  class="{selected ? 'text-primary-dark' : color} hover:text-primary-dark
  text-lg"
>
  <slot />
</a>
