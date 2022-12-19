<template>
  <div class="max-w-4xl m-auto py-6 px-4 w-full">
    <h1 class="font-bold mb-3 text-2xl">Home Page</h1>
    <div class="grid grid-cols-3 gap-3">
      <div class="bg-gray-100 p-3 rounded-sm w-full" v-for="product in products" :key="product.id">
          <div class="h-[200px] w-full bg-contain bg-center bg-no-repeat" :style="{ 'background-image': 'url('+product.product_image+')'}"></div>
          <div class="p-3">
            <h1 class="font-bold mb-2">{{product.name}}</h1>
            <p class="text-blue-600 font-bold">$ {{ product.price }}</p>
          </div>
          <form @submit.prevent="addToCart(product.id)" class="flex items-center">
            <button type="submit" class="bg-gray-900 rounded-md py-2 text-white font-semibold w-full">Add to Cart</button>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "HomeView",
    data(){
      return {
        quantity: 1,
        products: []
      }
    },
    async created(){
      const results = await fetch("http://localhost:3004/products");
      const finalResults = await results.json();
      this.products = finalResults;
    },
    methods: {
      async addToCart(id){
        const results = await fetch(`http://localhost:3004/products/${id}`);
        const finalResults = await results.json();
        await fetch("http://localhost:3004/products", {
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            quantity: this.quantity,
            product_id: id,
            price: finalResults.price
          })
        }).then(async (response) => {
          console.log(response);
        })
      }
    }
}
</script>