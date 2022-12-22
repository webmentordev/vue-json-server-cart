<template>
    <div class="flex items-center justify-between">
        <div class="py-2">
            <h2 class="font-bold">{{item.product_name}}</h2>
            <strong class="text-vue-green">${{(item.total_price.toFixed(2))}}</strong>
        </div>
        <Alert :message="message" :success="success" :failed="failed" />
        <div class="flex items-center">
            <button class="bg-gray-900 text-white p-1 px-3 rounded-md" @click="decement(item)">-</button>
            <span class="px-3">{{quantity}}</span>
            <button class="bg-gray-900 text-white p-1 px-3 rounded-md" @click="increment(item)">+</button>
            <button @click="removeItem(item.id)"><i class="fas fa-trash text-sm text-red-600 ml-3 p-2 px-3 rounded-full bg-gray-300"></i></button>
        </div>
    </div>
</template>

<script>
import Alert from './Alerts/AlertMessage.vue'
export default {
    name: "SingleItem",
    props: {
        item: Object
    },
    data(){
        return {
            success: false,
            failed: false,
            message: "",
        }
    },
    components: {
      Alert
    },
    created(){
        this.quantity = this.item.quantity
    },
    methods: {
        async increment(item){
            if(item.quantity < 10){
                item.quantity++;
                await fetch(`api/cart/${item.id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    quantity: item.quantity,
                    total_price: item.price * item.quantity
                })}).then((response) => {
                    if(response.ok){
                        this.quantity = item.quantity
                        this.$emit("reCalculate", item.id)
                    }
                })
            }else{
                this.failed = true;
                this.message = "Can't go above 10x item quantity"
                setTimeout(() => {
                    this.failed = false;
                    this.message = ""
                }, 2000)
            }
        },
        async decement(item){
            if(item.quantity > 1){
                item.quantity--;
                await fetch(`api/cart/${item.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                    quantity: item.quantity,
                    total_price: item.price * item.quantity
                })}).then((response) => {
                    if(response.ok){
                        this.quantity = item.quantity
                        this.$emit("reCalculate", item.id)
                    }
                })
            }else{
                this.failed = true;
                this.message = "Can't go below 1x item quantity"
                setTimeout(() => {
                    this.failed = false;
                    this.message = ""
                }, 2000)
            }
        },
        removeItem(id){
            this.$emit('deleteItem', id)
        }
    }
}
</script>