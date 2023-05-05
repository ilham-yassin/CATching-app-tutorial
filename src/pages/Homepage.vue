<template>
    <slot>
        <Landing />
    </slot>
    <slot>
        <Content />
    </slot>

</template>

<script setup lang="ts">
import Landing from "../components/Landing.vue"
import Content from "../components/Content.vue"
</script>


<style scoped></style>