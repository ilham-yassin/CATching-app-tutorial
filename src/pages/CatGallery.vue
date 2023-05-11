<template>
    <div class="container">
        <h1 class="fw-bold text-center mt-4 mb-0">Cats For Days!</h1>
        <hr class="mt-3 mb-0">
    </div>

    <div class="gallery">
        <div v-for="(image, index) in images" :key="index" class="image">
            <img :src="image.url" :alt="image.id">
        </div>
    </div>
</template>
  
<script lang="ts">
import constants from "../constants";
import { ComponentOptions } from 'vue';
import axios from 'axios';

interface GalleryComponent extends ComponentOptions {
    images: { id: string, url: string }[];
}

export default (await import('vue')).defineComponent({
    name: 'Gallery',
    data(): { images: { id: string; url: string; }[]; } {
        return {
            images: []
        };
    },
    mounted(): void {
        const limit = 32;

        axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}`, {
            headers: {
                'x-api-key': constants.API_KEY_CAT_API
            }
        })
            .then(response => {
                this.images = response.data.map((image: { id: string; url: string; }) => {
                    return {
                        id: image.id,
                        url: image.url
                    };
                });
            })
            .catch(error => console.log(error));
    }
}) as unknown as GalleryComponent;



</script>

<style scoped>
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    padding: 0px 100px;
    margin: 50px 0px;
}

.image {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;
}

img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>