<template>
    <form @submit="onSubmit">
        <div class="row">
            <div class="col-lg-6">
                <div class="bg-light p-5">
                    <h2 class="h4 mb-4 fw-bolder">Search for Multiple Cat Breeds</h2>
                    <AddMultipleCatsFormFieldArray
                        path="catNames"
                    ></AddMultipleCatsFormFieldArray>
                    <hr>
                    <div class="d-flex justify-content-end">
                        <button id="searchBtn" class="btn btn-primary">Submit</button></div>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { AddMultipleCatsFormFields } from './types';
import { addMultipleCatsFormFieldsSchema } from './schema';
import AddMultipleCatsFormFieldArray from './MultipleCat-field-array.vue';
const {
    handleSubmit,
    values
} = useForm<AddMultipleCatsFormFields>({
    validationSchema: addMultipleCatsFormFieldsSchema
})
const onSubmit = handleSubmit(
    async values => {
        await catsStore.findAndAdd(values.catName);
        resetForm()
    }
)
</script>

<style scoped>

#searchBtn {
    background-color: #000;
    border-color: #000;
    color: #fff;
}

</style>