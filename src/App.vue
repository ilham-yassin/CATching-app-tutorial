<script setup lang="ts">
import Footer from "./components/Footer.vue"
import Navbar from "./components/Navbar.vue"

</script>

<script lang="ts">
</script>

<template>
  <div id="mainhome">
    <slot>
      <Navbar />
    </slot>
    <slot>
      <router-view :key="$route.path" />
    </slot>
  </div>
  <slot>
    <Footer />
  </slot>
</template>

<style scoped>
</style>
