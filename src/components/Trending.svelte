<script>
   import { IconArrowDownRight } from "@tabler/icons-svelte";
   import IntersectionObserver from "svelte-intersection-observer";
   import { fade } from "svelte/transition";
   import { quadInOut } from "svelte/easing";
   import AddButton from "./AddButton.svelte";

   export let trendingProducts;

   let elementOnce;
   let intersectOnce;

   let randomTrending = [];

   for (let index = 0; index < trendingProducts.length; index++) {
      randomTrending.push(
         trendingProducts[Math.floor(Math.random() * trendingProducts.length)]
      );
      if (index === 3) {
         break;
      }
   }
</script>

<IntersectionObserver
   element={elementOnce}
   bind:intersecting={intersectOnce}
   once
>
   <div
      class="mt-4 border-4 border-black shadow-neubrut-4 bg-amber-200"
      bind:this={elementOnce}
   >
      <div
         class="uppercase font-bold text-lg bg-amber-500 px-2 py-1 flex items-center justify-between"
      >
         <span class="text-black">trending</span>
         <div class="flex items-center justify-center gap-2">
            {#each { length: 3 } as ball}
               <span class="h-3 w-3 bg-black rounded-full" />
            {/each}
         </div>
      </div>
      {#if intersectOnce}
         <div class="p-4 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {#each randomTrending as product, i}
               <div
                  class="border-4 border-black shadow-neubrut-4 bg-amber-200 flex flex-col"
                  in:fade={{
                     duration: 500,
                     delay: 350 * i,
                     easing: quadInOut,
                  }}
               >
                  <div class="uppercase font-bold text-lg">
                     <a
                        href={`/${product.type}/${product.id}`}
                        class="bg-amber-500 px-2 py-1 flex items-center justify-between"
                     >
                        <span class="text-black">{product.company}</span>
                        <IconArrowDownRight stroke={3} class="text-black" />
                     </a>
                     <div class="bg-white">
                        <img src={product.imageUrl} alt="product" />
                     </div>
                  </div>
                  <div
                     class="p-4 flex flex-col items-start justify-between gap-4 flex-1"
                  >
                     <div
                        class="text-black font-bold overflow-hidden overflow-ellipsis whitespace-nowrap w-full"
                     >
                        {product.productName}
                     </div>
                     <div
                        class="text-black font-bold px-2 py-1 bg-amber-500 border-4 border-black"
                     >
                        $ {product.price}
                     </div>
                  </div>
                  <AddButton color={"amber"} {product} />
               </div>
            {/each}
         </div>
      {/if}
   </div>
</IntersectionObserver>
