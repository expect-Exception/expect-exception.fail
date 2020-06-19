<style>
  a,
  a:visited,
  a:hover,
  a:active {
    backface-visibility: hidden;
    position: relative;
    transition: 0.5s color ease;
  }
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

<a href="/podcast" class="text-primary-dark text-lg">
  <i aria-hidden="true" class="fa fa-arrow-left" />
  Back to Overview
</a>
