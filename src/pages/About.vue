<template>
    <div class="aboutpage">
        <h1 id="firstline">About</h1>
        <h1 id="secondline">CATching!</h1>
    </div>
    <div id="about2">
        <h2>So Here's How It All Started</h2>
        <p>Our Adoption Team is one of the largest cat shelter in Brunei-Muara. We offer adoption, foster care, and veterinary support services to homeless cats and kittens, and we provide comprehensive programs that support people in caring for cats.</p>
        <button id="btnexplore" class="btn btn-primary btn-lg" type="submit">Explore Our Programs </button>
    </div>
    <div id="about3">
        <hr>
        <h3>We Care About Cats and People</h3>
        <hr>
        <p style="font-size: 25px;">
            With 10 years of experience and nearly 3,500 adoptions, we know our feline friends pretty well! While in our care, cats and kittens have access to enrichment activities, behaviour modification, medical care, and a variety of housing options to meet their individual needs. What's more, our community support program offer support and resources that strengthen the bond between cats and the people who love them.
        </p>
        <p style="color:rgb(107, 102, 102); font-size: 25px; font-weight: bold;">
            Our doors opened on August 1, 2012, and since that time we've remained dedicated to helping cats and people. 
        </p>
        <p style="font-size: 25px;">
            Our staff and volunteers work tirelessly to care for and find a home for every cat and kitten we take in. Our shelter meets high standards of care established by national expoeerts, and we are committed to providing a Fear Free environment. Through our carefully supervised adoption program, an average of over 300 cats and kittens are adopted into loving homes each year.
        </p>
        <p style="font-size: 25px;">
            The livesaving success is possible because of staff, volunteers, supporters, and all our partners in this work!
        </p>
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

.aboutpage {
    background-image: url("../assets/catabout.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
}

#firstline {
    font-size: 50px;
    font-weight: lighter;
    margin-top: 50px;
    margin-left: 50px;
}

#secondline {
    font-size: 90px;
    font-weight: 900;
    margin-left: 50px;


}

#about2 {
    background-color: #fff;
    text-align: center;
    padding: 50px 150px 100px 150px;
}

h2 {
    font-size: 40px;
    font-weight: bolder;
    margin: 50px 0px;
}

p {
    font-size: 30px;
    font-weight: lighter;
    margin-bottom: 50px;
}

#btnexplore {
    font-size: 20px;
    background-color: #000;
    border-color: #000;
    color: #fff;
}

#btnexplore:hover {
    background-color: #fff;
    color: #000;
}

#about3 {
    text-align: center;
    padding:0px 150px 100px 150px ;
}

h3 {
    font-size: 30px;
    font-weight: bold;
}

hr {
    width: 50%;
    border-top: 10px solid #000;
}

</style>