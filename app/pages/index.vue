<script setup>
const query = groq`*[_type == "bio"] | order(_createdAt desc)[0]`;

const { data } = await useSanityQuery(query);
</script>
<template>
  <div class="w-full flex flex-col gap-[24px]">
    <div
      class="w-full h-[100svh] flex flex-col gap-[24px] items-center justify-center"
    >
      <h1
        class="text-9xl text-zinc-950 font-lettra font-[300] tracking-[-1rem]"
      >
        {{ data?.email }}
      </h1>
      <h3 class="text-2xl text-zinc-950 font-lettra font-[300]">
        {{ data?.shortBio.es }}
      </h3>
    </div>
  </div>
</template>
