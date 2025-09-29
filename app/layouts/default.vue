<template>
  <div class="w-full grig grid-rows-[auto_1fr_auto]">
    <header
      class="w-full p-[20px] bg-zinc-950 text-white grid grid-cols-[auto_1fr] items-center justify-center"
    >
      <div class="w-full flex items-center justify-start font-lettra">
        <NuxtLink to="/" prefetch>
          <h3 class="text-xl">Centro Holístico</h3>
        </NuxtLink>
      </div>
      <div
        class="w-full flex items-center justify-end gap-[24px] font-headlines text-lg"
      >
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about" prefetch>About</NuxtLink>
        <NuxtLink to="/portfolio" prefetch>Portfolio</NuxtLink>
        <NuxtLink to="/services" prefetch>Services</NuxtLink>
      </div>
    </header>
    <main class="w-full flex flex-col">
      <slot />
    </main>
    <footer
      class="w-full py-[60px] px-[20px] bg-zinc-950 text-white flex items-center justify-center"
    >
      Footer
    </footer>
  </div>
</template>
