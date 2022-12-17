<template>
  <div id="nav" class="flex items-center justify-between py-2 px-4 bg-black">
    <img alt="Vue logo" src="../assets/logo.png" width="50">
    <div class="text-white">
      <router-link class="mx-4" to="/">Home</router-link>
      <router-link class="ml-4" to="/create-product">CreatePost</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>