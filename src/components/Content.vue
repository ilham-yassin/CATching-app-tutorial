<template>
    <div id="headline">
        <h2>Here Are Some Cats In Our Shelter</h2>
        <p>Please click on the Adopt A Cat button above to find out their availability.</p>
        <CatCard  />
    </div>
</template>

<script setup lang="ts">
    import CatCard from "./CatCard.vue"
</script>

<style scoped>

#headline {
    text-align: center;
}

h2 {
    font-size: 30px;
    margin-top: 70px;
}

p {
    font-weight: light;
}

</style>