<template>
    <div>
        <h1>Programs</h1>
    </div>
    <div>
        <h5>Placeholder for testing local data fetching from a json array</h5>
    </div>
    <div id="fdata">
        <p v-for="catdata in catd " :key="catdata.id">
            {{ catdata.breeds }}
        </p>
    </div>
</template>

<script setup lang="ts">

</script>

<script>

import catData from '../catdata.json'

export default {
    data() {
        return {
            catd: catData,
        };
    },
};

</script>

<style scoped>
h1 {
    text-align: center;
    margin: 50px 100px;
}

h5 {
    text-align: center;
    margin-bottom: 50px;
}

#fdata{
    margin: 0px 100px;
}

</style>