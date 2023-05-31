<script>
   import IntersectionObserver from "svelte-intersection-observer";
   import { fade } from "svelte/transition";
   import { quadInOut } from "svelte/easing";
   import { IconArrowDownRight } from "@tabler/icons-svelte";

   let elementOnce;
   let intersectOnce;

   const links = [
      {
         title: "phone",
         to: "/phone",
         img: "https://hgmwyekdwtdwycsuxrgk.supabase.co/storage/v1/object/public/productImage/images/iPhone%2013.png?t=2023-05-28T14%3A35%3A38.061Z",
      },
      {
         title: "laptop",
         to: "/laptop",
         img: "https://hgmwyekdwtdwycsuxrgk.supabase.co/storage/v1/object/public/productImage/images/PixelBook%20Go.png?t=2023-05-28T14%3A35%3A22.206Z",
      },
      {
         title: "ipad",
         to: "/ipad",
         img: "https://hgmwyekdwtdwycsuxrgk.supabase.co/storage/v1/object/public/productImage/images/iPad%20Mini.png?t=2023-05-28T14%3A35%3A30.767Z",
      },
      {
         title: "monitor",
         to: "/monitor",
         img: "https://hgmwyekdwtdwycsuxrgk.supabase.co/storage/v1/object/public/productImage/images/Monitor%20XDR.png?t=2023-05-28T14%3A35%3A12.131Z",
      },
   ];
</script>

<IntersectionObserver
   element={elementOnce}
   bind:intersecting={intersectOnce}
   once
>
   <div
      class="mt-4 border-4 border-black shadow-neubrut-4 bg-orange-200"
      bind:this={elementOnce}
   >
      <div
         class="uppercase font-bold text-lg bg-orange-500 px-2 py-1 flex items-center justify-between gap-4"
      >
         <span class="text-black">what are you looking for?</span>
         <div class="flex items-center justify-center gap-2">
            {#each { length: 3 } as ball}
               <span class="h-3 w-3 bg-black rounded-full" />
            {/each}
         </div>
      </div>
      {#if intersectOnce}
         <nav class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
            {#each links as link, i}
               <div
                  class="border-4 border-black shadow-neubrut-4"
                  in:fade={{
                     duration: 500,
                     delay: 350 * i,
                     easing: quadInOut,
                  }}
               >
                  <div class="uppercase font-bold text-lg bg-orange-500">
                     <a
                        href={link.to}
                        class="px-2 py-1 flex items-center justify-between"
                     >
                        <span class="text-black">{link.title}</span>
                        <IconArrowDownRight stroke={3} class="text-black" />
                     </a>
                  </div>
                  <div class="bg-white">
                     <img src={link.img} alt="product type" />
                  </div>
               </div>
            {/each}
         </nav>
      {/if}
   </div>
</IntersectionObserver>
