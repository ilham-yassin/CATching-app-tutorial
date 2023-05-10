<template>
    <div class="container">
        <Landing></Landing>
        <div id="headline">
            <h2>Here Are Some Cat Breeds In Our Shelter</h2>
            <p>Please click on the Adopt A Cat button above to find out more.</p>
        </div>
        <div id="cardlist">
            <CatCard></CatCard>
            <AddCatSearch class="py-5"></AddCatSearch>
        </div>
        <MultipleCats></MultipleCats>
    </div>
    <CallToAction></CallToAction>
</template>

<script setup lang="ts">
import Landing from "../components/Landing.vue"
import CallToAction from "../components/CallToAction.vue"
import { useCatsStore } from "../store"
import { CatCard, AddCatSearch, MultipleCats } from "../components"

useCatsStore().load()
</script>


<style scoped>
#headline {
    text-align: center;
}

#cardlist {

    text-align: center;
}

h2 {
    font-size: 30px;
    margin-top: 100px;
}

p {
    font-weight: light;
}
</style>