<template>
  <Navbar />
  <Cart />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cart from './components/Cart.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Cart
  }
}
</script>