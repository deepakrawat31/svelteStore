<script>
   import { page } from "$app/stores";
   import Header from "../../../components/Header.svelte";
   import Product from "../../../components/Product.svelte";

   export let data;

   let { products } = data;

   const path = $page.url.pathname
      .substr($page.url.pathname.lastIndexOf("/"))
      .slice(1);

   const currentProduct = [];

   for (let index = 0; index < products.length; index++) {
      if (products[index].id === parseInt(path)) {
         currentProduct.push(products[index]);
      }
   }
</script>

<svelte:head>
   <title>{currentProduct[0].productName}</title>
</svelte:head>

<div class="bg-white p-4 shadow-neubrut-4 border-4 border-black">
   <Header />
   <Product {currentProduct} />
</div>
