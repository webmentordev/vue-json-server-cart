<template>
  <div class="max-w-4xl m-auto py-6 px-4 w-full">
    <h1>Home Page</h1>
    <div class="grid grid-cols-3 gap-3">
      <div class="bg-gray-100 p-3 rounded-sm w-full" v-for="product in products" :key="product.id">
          <div class="h-[200px] w-full bg-contain bg-center" style="background-image: url(${{ product.product_image }})"></div>
          <div class="p-3">
            <h1 class="font-bold mb-2">{{product.name}}</h1>
            <p class="text-blue-600 font-bold">$ {{product.price}}</p>
          </div>
          <div class="flex items-center">
            <input type="number" v-model="quantity" placeholder="Quantity" required
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mr-2">
            <button type="submit" class="bg-gray-900 rounded-md py-2 text-white font-semibold w-full">Add to Cart</button>
          </div>
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
    }
}
</script>