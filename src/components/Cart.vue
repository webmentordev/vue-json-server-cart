<template>
    <router-link to="/cart">
    <div class="bg-gray-900 fixed bottom-4 left-4 p-4 px-5 rounded-full shadow-lg">
        <div class="relative h-full w-full">
            <i class="fas fa-shopping-cart  text-white"></i>
            <span class="bg-white p-2 px-4 font-bold text-gray-600 rounded-full absolute -top-10 -right-9">{{count}}</span>
        </div>
    </div>
    </router-link>
</template>

<script>
export default {
    name: "CartIcon",
    data(){
        return {
            count: 0
        }
    },
    async created() {
        const result = await fetch('api/cart');
        const finalCount = await result.json();
        this.count = finalCount.length
    }   
}
</script>