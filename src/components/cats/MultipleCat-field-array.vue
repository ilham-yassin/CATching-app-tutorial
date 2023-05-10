<template>
    <div>
        <div v-for="(field, index) of fields" class="hstack gap-3 mb-3">
            <TextField
                style="width: 100%;"
                :name="`${path}[${index}]`"
                placeholder="Add Cat Breed Here"
                :id="`txt-${path}-${index}`"
            ></TextField>
            <button
                @click="remove(index)"
                class="btn btn-outline-danger"
                type="button">
                Remove
            </button>
        </div>
        <button
            @click="push('')"
            class="btn btn-primary"
            type="button">
            Add
        </button>
    </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { TextField } from '..';
import { useFieldArray } from 'vee-validate';
interface Props {
    path: string;
}
const props = defineProps<Props>();
const {
    fields,
    push,
    remove,
} = useFieldArray<string>(toRef(props, 'path'));
</script>

<style scoped>
</style>