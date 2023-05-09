<template>
    <div>
        <div id="calltoaction">
            <h1>Get Involved With CATching!</h1>
            <p>Join CAT as a volunteer, donor, or foster family and help save lives with your time, love, cash donation,
                supplies. Your worthwhile support and contribution to CAT gives our precious cats a fresh start, essential
                vet
                care, and a chance to find loving homes.
                <br><br>
                Together, we can help homeless cats land on their feet and live happy, healthy lives.</p>
            <button id="btnvolunteer" class="btn btn-primary btn-lg" type="submit">Volunteer </button>
            <button id="btndonate" type="button" class="btn btn-outline-secondary btn-lg">Donate</button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#calltoaction {
    background-color: #000;
    margin-top: 30px;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 150px;
    padding-right: 150px;
    text-align: center;
}

h1 {
    font-size: 30px;
    font-weight: bolder;
    color: #fff;
    margin-bottom: 30px;
    
}

p {
    font-weight: light;
    color: #fff;
    margin-bottom: 30px;
}

#btnvolunteer {
    font-size: 20px;
    background-color: #ffffff;
    border-color: #ffffff;
    color: #000;
}

#btnvolunteer:hover {
    background-color: #000;
    color: #fff;
}

#btndonate {
    font-size: 20px;
    margin-left: 20px;
    border-color: #ffffff;
    color: #ffffff;
}

#btndonate:hover {
    background-color: #ffffff;
    color: #000000;
}
</style>