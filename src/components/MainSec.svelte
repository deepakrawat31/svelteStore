<script>
   const offers = [
      {
         id: 1,
         title: "diversity",
      },
      {
         id: 2,
         title: "great deals",
      },
      {
         id: 3,
         title: "easy exchange",
      },
   ];
</script>

<main class="mt-4 border-4 border-black shadow-neubrut-4 bg-indigo-200">
   <div
      class="uppercase font-bold text-lg bg-indigo-500 px-2 py-1 flex items-center justify-between"
   >
      <span class="text-black">what we offer</span>
      <div class="flex items-center justify-center gap-2">
         {#each { length: 3 } as ball}
            <span class="h-3 w-3 bg-black rounded-full" />
         {/each}
      </div>
   </div>
   <div class="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each offers as offer}
         <div class="border-4 border-black shadow-neubrut-4 bg-indigo-200">
            <div
               class="uppercase font-bold text-lg bg-indigo-500 px-2 py-1 flex items-center justify-between"
            >
               <span class="text-black">{offer.title}</span>
               <div class="flex items-center justify-center gap-2">
                  {#each { length: 3 } as ball}
                     <span class="h-3 w-3 bg-black rounded-full" />
                  {/each}
               </div>
            </div>
            <div class="p-4 text-black font-bold">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
               expedita!
            </div>
         </div>
      {/each}
   </div>
</main>
