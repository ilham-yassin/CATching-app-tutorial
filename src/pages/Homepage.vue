<template>
    <div class="container">
        <header>
            <slot name="header">
                <h1>Cat-ching!</h1>
                <p>Cat + Kuching, we're a cat adoption shelter aiming to protect, heal and find forever homes for our feline
                overlords!</p>
            </slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
h1 {
    margin-top: 30px;
    margin-left: 50px;
}

p {
    margin-left: 50px;
}
</style>