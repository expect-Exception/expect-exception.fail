<script>
  export let size = "xs";
  export let mdSize = "";

  const sizeMapper = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64
  };

  const height = mdSize
    ? `h-${sizeMapper[size]} sm:h-${sizeMapper[mdSize]}`
    : `h-${sizeMapper[size]}`;
</script>

<div class="w-full {height}"></div>
