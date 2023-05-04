<template>
    <div id="textcontent">
        <h1>CAT-CHING!</h1>
        <p>Cat + Kuching, or the sound of money, Kaching! because our cats are all gold! We're a cat adoption shelter aiming to protect, heal and find forever homes for our feline companions!</p>
        <button id="btnadopt" class="btn btn-primary btn-lg" type="submit">Adopt A Cat </button>
        <button id="btnsignin" type="button" class="btn btn-outline-secondary btn-lg">Sign In</button>
    </div>
    <div id="imgcontent">
        <img src="../assets/catlanding.png">
    </div>
    <div class="clear"> </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
h1 {
    font-size: 100px;
    font-weight: bold;
    margin-top: 250px;
    margin-left: 50px;
}

p {
    margin-left: 50px;
    margin-right: 50px;
    font-size: 30px;
    font-weight: lighter;
}

img {
    width: 100%;
}

.clear {
    clear: both;
}

#textcontent {
    /* background-color: bisque; */
    width: 50%;
    margin-left: 1%;
    text-align: left;
    float: left;
}

#imgcontent {
    /* background-color: blue; */
    width: 35%;
    margin-right: 1%;
    text-align: right;
    float: left;
}

#btnadopt {
    font-size: 20px;
    background-color: #363333;
    border-color: #363333;
    margin-left: 50px;
}

#btnadopt:hover {
    background-color: #000;
}

#btnsignin {
    font-size: 20px;
    margin-left: 20px;
}

#btnsignin:hover {
    color:#000;
}

</style>