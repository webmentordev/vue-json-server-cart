<template>
  <div class="max-w-2xl m-auto py-6 px-4 w-full">
    <h1 class="font-bold mb-3 text-2xl">Cart Page</h1>
    <div class="flex flex-col">
      <div class="bg-gray-100 p-3 rounded-lg w-full mb-2" v-for="item in items" :key="item.id">
        <Item :item="item" />
      </div>
    </div>
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
        items: []
      }
    },
    async mounted(){
      const result = await fetch('api/cart');
      const finalResult = await result.json();
      this.items = finalResult
    }
}
</script>

<style>

</style>