<script setup lang="ts">

</script>

<template>
  <div>
    <div role="navigation">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link active" aria-current="page" to="home">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link active" aria-current="page" to="about">About</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link active" aria-current="page" to="contactus">Contact Us</RouterLink>
                        </li>  
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <slot>
      <router-view :key="$route.path" />
    </slot>
  </div>
</template>

<style scoped>

</style>
