<template>
    <slot>
        <Landing />
    </slot>
    <slot>
        <Content />
    </slot>
    <slot>
        <Footer />
    </slot>
</template>

<script setup lang="ts">
import Landing from "../components/Landing.vue"
import Content from "../components/Content.vue"
import Footer from "../components/Footer.vue"

</script>


<style scoped></style>