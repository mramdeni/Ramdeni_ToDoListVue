<template>
    <div id="align">
        <b-jumbotron id="den">
            <h1 class="text-uppercase">to-do list</h1>
            <p><i>Sahabat Newmind</i></p>
        </b-jumbotron>
    </div>
</template>

<script>

export default {
  name: "House-Awal",
}
</script>

<style>
#den{
    background-color: rgb(5, 27, 70);
    padding-top: 4px;
    padding-bottom: 4px;
    /* margin-bottom: 10px; */
}

#den h1{
    color: hsl(47, 92%, 33%);
    font-weight: lighter;
    font-size: 5rem !important;
    font-style: oblique;
}

#den p{
    color: hsl(47, 92%, 33%);
    font-weight: 400 !important;
    font-size: 20px !important;
}

/* #den a{
    font-family: 'TimesNew Roman', cursive;
    text-decoration: none;
    color: #960a0a;
    font-weight: 600 !important;
    font-size: 24px;
} */

#align{
    height: calc(100vh - 56px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: -175px;
}

@media only screen and (max-width: 768px) {
    #den h1{
    color: #FEEDE1;
    font-weight: 700 !important;
    font-size: 5rem !important;
}
}

</style>