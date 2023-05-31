<script>
   import Header from "../components/Header.svelte";
   import MainSec from "../components/MainSec.svelte";
   import Navigation from "../components/Navigation.svelte";
   import Trending from "../components/Trending.svelte";

   export let data;
   let { products } = data;
   $: ({ products } = data);

   let trendingProducts = [];

   for (let index = 0; index < products.length; index++) {
      if (products[index].isTrending) {
         trendingProducts.push(products[index]);
      }
   }
</script>

<svelte:head>
   <title>svelteStore</title>
</svelte:head>

<div class="bg-white p-4 shadow-neubrut-4 border-4 border-black">
   <Header />
   <MainSec />
   <Trending {trendingProducts} />
   <Navigation />
</div>
