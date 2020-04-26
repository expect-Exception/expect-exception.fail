<script>
  export let size = "xs";

  const sizeMapper = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64
  };

  const height = `h-${sizeMapper[size]}`;
</script>

<div class="w-full {height}"/>
