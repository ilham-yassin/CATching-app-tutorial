<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <img src="../assets/cat_logo.png" alt="cat_logo">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link" aria-current="page" to="catgallery">Cats!</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" aria-current="page" to="home">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" aria-current="page" to="about">About</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" aria-current="page" to="contactus">Contact Us</RouterLink>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
img {
    width: 45px;
    margin: 5px 5px;
}

li {
    font-size: 20px;
    font-weight: bold;
    margin: 0px 20px;
}

li:hover {
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-underline-offset: 5px;
}

#navbar {
    background: transparent;
}

.btn {
    background-color: #000;
    border-color: #000;
    color:#fff;
}
</style>