<template>
    <div>
        <label v-if="label" class="form-label" :for="id">{{ label }}</label>
        <input
            :type="type"
            class="form-control"
            :name="name"
            :id="id"
            :placeholder="placeholder"
            @change="onChange"
            @blur="handleBlur"
            :value="value"
            :class="{ 'is-invalid': !!errorMessage }">

        <span v-if="errorMessage" class="small text-danger">{{ errorMessage }}</span>
    </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef } from 'vue';

interface Props {
    name: string;
    id: string;
    label?: string;
    placeholder?: string;
    type?: 'text'|'email'|'password'|'tel';
}

const props = withDefaults(defineProps<Props>(), {
    type: 'text'
});

const {
    errorMessage,
    handleBlur,
    value,
    setValue
} = useField(toRef(props, 'name'));

const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value)
}
</script>

<style scoped>

</style>