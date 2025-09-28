<template>
  <div class="w-full grig grid-rows-[auto_1fr_auto]">
    <header
      class="w-full h-[60px] bg-teal-500 flex items-center justify-center gap-[24px]"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about" prefetch>About</NuxtLink>
      <NuxtLink to="/portfolio" prefetch>Portfolio</NuxtLink>
      <NuxtLink to="/services" prefetch>Services</NuxtLink>
    </header>
    <main class="w-full flex-1 p-[20px] flex flex-col">
      <slot />
    </main>
    <footer
      class="w-full h-[220px] px-[20px] bg-rose-500 flex items-center justify-center"
    >
      Footer
    </footer>
  </div>
</template>
