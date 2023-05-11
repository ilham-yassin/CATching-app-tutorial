<template>
        <div class="container">
            <div class="row gy-4">
            <div v-for="(cat, index) in cats" class="col-12 col-md-4 col-xl-3">
                <div class="card h-100">
                    <div class="ratio ratio-4x3">
                        <img :src="cat.image_link" 
                        :alt="'Image of ' + cat.name" 
                        class="card-img object-fit-cover" />
                    </div>
                    <div class="card-body">
                        <h2 class="h4">{{ cat.name }}</h2>
                        <p class="text-muted">{{ cat.description }}</p>
                        <p>Origin: {{ cat.origin }}</p>

                        <button @click="removeCat(index)" class="btn btn-danger" type="button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCatsStore } from '../../store';

const { cats } = storeToRefs(useCatsStore());

const removeCat = (index: number) => {
    cats.value.splice(index, 1);
}

</script>

<style scoped>

</style>