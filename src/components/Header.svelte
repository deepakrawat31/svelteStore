<script>
   import { IconShoppingBag, IconUser } from "@tabler/icons-svelte";

   let y;
</script>

<svelte:window bind:scrollY={y} />

<header class={`sticky top-0 z-20 ${y > 30 ? "backdrop-blur-sm py-2" : ""}`}>
   <div class="flex items-center justify-between text-black">
      <div class="bg-teal-500 font-bold md:text-lg border-4 border-black">
         <a href="/" class="px-4 py-2 block">svelteStore</a>
      </div>
      <div class="flex items-center justify-between gap-6">
         <span class="p-1 bg-teal-500 border-4 border-black"
            ><IconShoppingBag /></span
         >
         <span class="p-1 bg-teal-500 border-4 border-black"><IconUser /></span>
      </div>
   </div>
</header>
