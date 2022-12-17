<template>
  <div class="h-[85vh] flex items-center justify-center">
    <div class="p-6 bg-gray-100 rounded-lg max-w-lg w-full">
      <h1 class="text-2xl font-bold mb-2">Create Products</h1>
      <form @submit="create">
        <p v-show="success" class="py-2 text-green-600">{{ message }}</p>
        <p v-show="failed" class="py-2 text-red-600">{{ message }}</p>
        <input type="text" placeholder="Product Name" v-model="name"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-2">
        <input type="number" step="0.01" placeholder="Product Price" v-model="price"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-2">
        <input type="url" placeholder="Image Url" v-model="image"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-2">

        <button type="submit" class="bg-indigo-500 text-white py-2 px-5 font-semibold rounded-sm">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: "CreateProduct",
    data(){
      return {
        success: false,
        failed: false,
        message: "",
        image: "",
        name: "",
        price: 1
      }
    },
    methods: {
      async create(e){
        e.preventDefault();
        if(this.name != "" && this.price > 0 && typeof(this.price) == 'number' && this.image != ""){
          await fetch("http://localhost:3004/products", {
            method: "post",
            headers: {
              "Content-type": "application/json"
            },
            body:JSON.stringify ({
              name: this.name,
              price: this.price,
              product_image: this.image
            })
          }).then((response) => {
              if(response.ok){
                this.success = true;
                this.message = "Product successfully created!"
              }
          });
        }else{
            this.failed = true;
            this.message = "Please double check Name & Price!"
        }
      }
    }
}
</script>