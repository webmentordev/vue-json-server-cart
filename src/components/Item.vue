<template>
    <div class="flex items-center justify-between">
        <div class="py-2">
            <h2 class="font-bold">{{item.product_name}}</h2>
            <strong class="text-vue-green">${{(item.price.toFixed(2)) * item.quantity}}</strong>
        </div>
        <Alert :message="message" :success="success" :failed="failed" />
        <div class="flex items-center">
            <button class="bg-gray-900 text-white p-1 px-3 rounded-md" @click="decement">-</button>
            <span class="px-3">{{item.quantity}}</span>
            <button class="bg-gray-900 text-white p-1 px-3 rounded-md" @click="increment">+</button>
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
            message: ""
        }
    },
    components: {
      Alert
    },
    methods: {
        increment(){
            if(this.quantity < 10){
                this.quantity++
            }else{
                this.failed = true;
                this.message = "Can't add more then 10x items"
                setTimeout(() => {
                    this.failed = false;
                    this.message = ""
                }, 2000)
            }
        },
        decement(){
            if(this.quantity > 1){
                this.quantity--
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