<template>
    <form @submit.prevent="onSubmit">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="p-5" style="border: 2px solid lightgray; border-radius: 10px;" >
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
import { useCatsStore } from '../../store';

const catsStore = useCatsStore();

const {
    handleSubmit,
    resetForm
} = useForm<AddMultipleCatsFormFields>({
    validationSchema: addMultipleCatsFormFieldsSchema,
    // initialValues: {
    //     catNames: []
    // }
})

const onSubmit = handleSubmit(
    async (values) => {
        await catsStore.findAndAdd(values.catNames);
        resetForm()

        console.log(values);
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