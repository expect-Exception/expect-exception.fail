<script>
  export let sponsorship;
  const { id, state, title, description, imageSrc, name, date } = sponsorship;
</script>

<div class="max-w-sm w-full lg:max-w-full mx-auto lg:flex text-center">
  <div class="h-64 lg:w-4/12 flex-none bg-bottom bg-cover border border-gray-400 rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/sponsorships/{id}.svg')" title="Sponsorship Package">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      {#if state === "paid"}
        <p class="text-sm text-green-600 flex items-center">
          <svg class="fill-current text-green-600 w-3 h-3 -mb-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
          </svg>
          paid
        </p>
      {/if}
      <div class="text-primary-text font-bold text-xl mb-2">
        {title}
      </div>
      <p class="md:px-12 text-gray-700 text-base">
        {description}
      </p>
    </div>
    <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-4" src="{imageSrc}" alt="Avatar of {name}">
      <div class="text-sm">
        <p class="text-primary-text leading-none">
          {name}
        </p>
        <p class="text-gray-600">
          {date}
        </p>
      </div>
    </div>
  </div>
</div>
