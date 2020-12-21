<script>
  export let link;
</script>

<audio preload="none" controls class="max-w-md w-full mx-auto">
  <track kind="captions">
  <source
    src={link}
    type="audio/mpeg"
  />
  Your browser does not support the audio element.
</audio>
