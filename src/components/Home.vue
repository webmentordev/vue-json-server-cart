<template>
  <div class="max-w-4xl m-auto py-6 px-4 w-full">
    <h1 class="font-bold mb-3 text-2xl">Home Page</h1>
    <CartAlert :success="success" />
    <div class="grid grid-cols-3 gap-3">
      <div class="bg-gray-100 p-3 rounded-lg w-full" v-for="product in products" :key="product.id">
          <div class="h-[200px] w-full bg-cover rounded-lg bg-center bg-no-repeat" :style="{ 'background-image': 'url('+product.product_image+')'}"></div>
          <div class="p-3">
            <h1 class="font-bold mb-2">{{product.name}}</h1>
            <p class="text-blue-600 font-bold text-lg">${{ product.price }}<span class="text-sm text-gray-700">/unit</span></p>
          </div>
          <form @submit.prevent="addToCart(product.id)" class="flex items-center">
            <button type="submit" class="bg-gray-900 rounded-md py-2 text-white font-semibold w-full">Add to Cart</button>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import CartAlert from './Alerts/CartMessage.vue'
export default {
    name: "HomeView",
    data(){
      return {
        quantity: 1,
        products: [],
        success: false
      }
    },
    components: {
      CartAlert
    },
    async created(){
      const results = await fetch("api/products");
      const finalResults = await results.json();
      this.products = finalResults.reverse();
    },
    methods: {
      async addToCart(id){
        const results = await fetch(`api/products/${id}`);
        const finalResults = await results.json();
        await fetch("api/cart", {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            quantity: this.quantity,
            product_id: id,
            price: finalResults.price,
            product_name: finalResults.name,
            total_price: finalResults.price
          })
        }).then((response) => {
          if(response.ok){
            this.success = true;
            setTimeout(()=> {
              this.success = false;
            }, 3000)
          }
        })
      }
    }
}
</script>