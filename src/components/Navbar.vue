<template>
  <div class="bg-black">
    <div id="nav" class="flex items-center justify-between py-2 px-4 max-w-4xl m-auto w-full">
    <img alt="Vue logo" src="../assets/logo.png" width="50">
    <div class="text-white">
      <router-link class="mx-4" to="/">Home</router-link>
      <router-link class="ml-4 py-2 px-6 rounded-md bg-vue-green font-bold" to="/create-product">Create</router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>