<template>
  <div class="max-w-2xl m-auto py-6 px-4 w-full">
    <h1 class="font-bold mb-3 text-2xl">Cart Page</h1>
    <div class="flex flex-col border-b border-gray-100">
      <div class="bg-gray-100 p-3 rounded-lg w-full mb-2" v-for="item in items" :key="item.id">
        <Item :item="item" @deleteItem="deleteItem(item.id)" />
      </div>
    </div>
    <h1 class="font-bold text-gray-600 my-2">Total Price: <span class="text-vue-green">$ {{total.toFixed(2)}}</span></h1>
  </div>
</template>

<script>
import Item from './Item.vue';
export default {
    name: "ItemsView",
    components: {
      Item
    },
    data(){
      return {
        items: [],
        total: 0
      }
    },
    async mounted(){
      const result = await fetch('api/cart');
      const finalResult = await result.json();
      this.items = finalResult;
      this.totalCalculator();
    },
    methods: {
      async deleteItem(id){
        await fetch(`api/cart/${id}`, {
          method: "DELETE"
        }).then((response) => {
          if(response.ok){
            this.items = this.items.filter(item => item.id !== id );
            this.totalCalculator();
          }
        });
      },
      totalCalculator(){
          this.total = this.items.reduce((accumulator, item) => {
          return accumulator + item.price;
        }, 0);
      }
    }
}
</script>