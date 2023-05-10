<template>
    <form @submit="onSubmit" class="vstack gap-3">
        <TextField
            id="txt-catName"
            name="catName"
            placeholder="Search for a Cat Breed"
        ></TextField>
        <button class="btn btn-primary">Search</button>
    </form>
</template>

<script setup lang="ts">
import { useCatsStore } from '../../store';
import { useForm, configure } from 'vee-validate';
import { AddCatSearchFields } from './types'
import { addCatFormFieldsSchema } from './schema';
import { TextField } from '..';

const catsStore = useCatsStore();

configure({
    validateOnBlur: true
})

const { 
    handleSubmit ,
    resetForm
} = useForm<AddCatSearchFields>({
    validationSchema: addCatFormFieldsSchema,
});


const onSubmit = handleSubmit(
    async (values) => {
        await catsStore.findAndAdd(values.catName);
        resetForm()
    },
    context => {
        console.log(context)
    }
)

</script>

<style scoped>
.btn {
    background-color: #000;
    border-color: #000;
    color: #fff;
}
</style>