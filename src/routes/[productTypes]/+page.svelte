<script>
   import { page } from "$app/stores";
   import { IconArrowDownRight } from "@tabler/icons-svelte";
   import Header from "../../components/Header.svelte";
   import AddButton from "../../components/AddButton.svelte";
   import { fade } from "svelte/transition";
   import { quadInOut } from "svelte/easing";

   const path = $page.url.pathname.slice(1);

   export let data;
   let { products } = data;

   let store = [];

   for (let index = 0; index < products.length; index++) {
      if (products[index].type === path) {
         store.push(products[index]);
      }
   }
</script>

<svelte:head>
   <title>{path.toUpperCase()}</title>
</svelte:head>

<main class="bg-white shadow-neubrut-4 border-4 border-black text-black p-4">
   <Header />
   <div class="border-4 border-black shadow-neubrut-4 mt-4">
      <div
         class="uppercase font-bold text-lg bg-orange-500 px-2 py-1 flex items-center justify-between"
      >
         <span class="text-black">{path}</span>
         <div class="flex items-center justify-center gap-2">
            {#each { length: 3 } as ball}
               <span class="h-3 w-3 bg-black rounded-full" />
            {/each}
         </div>
      </div>
      <div class="p-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
         {#each store as product, i}
            <div
               class="border-4 border-black shadow-neubrut-4 bg-orange-200 flex flex-col"
               in:fade={{
                  duration: 500,
                  delay: 350 * i,
                  easing: quadInOut,
               }}
            >
               <div class="uppercase font-bold text-lg">
                  <a
                     href={`/${product.type}/${product.id}`}
                     class="bg-orange-500 px-2 py-1 flex items-center justify-between"
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
                     class="text-black font-bold px-2 py-1 bg-orange-500 border-4 border-black"
                  >
                     $ {product.price}
                  </div>
               </div>
               <AddButton color={"orange"} {product} />
            </div>
         {/each}
      </div>
   </div>
</main>
