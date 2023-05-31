<script>
   import { supabase } from "$lib/supabaseClient";
   export let color;
   export let product;
   import { IconMinus, IconPlus } from "@tabler/icons-svelte";

   let quantity = 0;

   const addToStore = async (product) => {
      quantity++;
      const { error } = await supabase.from("cart").insert({
         productId: product.id,
         productName: product.productName,
         company: product.company,
         price: product.price,
         quantity: quantity,
      });
   };

   const upQuantity = async (product) => {
      quantity++;
      const { error } = await supabase
         .from("cart")
         .update({ quantity: quantity })
         .eq("productId", product.id);
   };

   const downQuantity = async (product) => {
      quantity--;
      if (quantity === 0) {
         const { error } = await supabase
            .from("cart")
            .delete()
            .eq("productId", product.id);
      } else {
         const { error } = await supabase
            .from("cart")
            .update({ quantity: quantity })
            .eq("productId", product.id);
      }
   };
</script>

<div class="p-4 w-full text-center">
   {#if quantity === 0}
      <button
         class={`uppercase text-black font-bold px-2 py-1 bg-${color}-500 border-4 border-black`}
         on:click={() => addToStore(product)}>add to cart</button
      >
   {:else}
      <div class="flex items-center justify-between text-black">
         <button
            class={`p-1 bg-${color}-500 border-4 border-black`}
            on:click={() => downQuantity(product)}><IconMinus /></button
         >
         <span class="font-bold text-xl">{quantity}</span>
         <button
            class={`p-1 bg-${color}-500 border-4 border-black`}
            on:click={() => upQuantity(product)}><IconPlus /></button
         >
      </div>
   {/if}
</div>
