<script>
   import { fade } from "svelte/transition";
   import { quadInOut } from "svelte/easing";
   import AddButton from "./AddButton.svelte";

   export let currentProduct;
</script>

<div class="mt-8 max-w-sm mx-auto">
   {#each currentProduct as product}
      <div
         class="border-4 border-black shadow-neubrut-4 bg-indigo-200 flex flex-col"
         in:fade={{
            duration: 500,
            easing: quadInOut,
         }}
      >
         <div class="uppercase font-bold text-lg">
            <div
               class="bg-indigo-500 px-2 py-1 flex items-center justify-between"
            >
               <span class="text-black">{product.company}</span>
               <div class="flex items-center justify-center gap-2">
                  {#each { length: 3 } as ball}
                     <span class="h-3 w-3 bg-black rounded-full" />
                  {/each}
               </div>
            </div>
            <div class="bg-white">
               <img src={product.imageUrl} alt="product" />
            </div>
         </div>
         <div
            class="p-4 flex flex-col items-start justify-between gap-4 flex-1"
         >
            <div class="text-black font-bold">
               {product.productName}
            </div>
            <div class="text-black font-semibold">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
               esse explicabo eveniet deserunt minima nesciunt dolore quisquam
               vitae dolores hic.
            </div>
            <div
               class="text-black font-bold px-2 py-1 bg-indigo-500 border-4 border-black"
            >
               $ {product.price}
            </div>
         </div>
         <AddButton color={"indigo"} {product} />
      </div>
   {/each}
</div>
