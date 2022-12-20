<template>
  <div v-if="success" class="py-4 z-20 transition-all fixed bottom-5 right-5 px-6 bg-white rounded-lg shadow-lg border border-gray-200 max-w-lg w-fit h-fit flex items-center">
    <div class="h-full mr-3">
        <i class="fas fa-check text-white bg-green-600 rounded-lg p-2"></i>
    </div>
    <p class="font-semibold text-gray-600">Product has been added to cart!</p>
  </div>
</template>

<script>
export default {
    name: "CartMessage",
    props: {
        success: Boolean,
    }
}
</script>