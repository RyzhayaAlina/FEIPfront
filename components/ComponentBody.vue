<script>

</script>

<template>
    <div class="base">
        <!-- <div class="banner">
            <p class="text_banner">Banner</p>
        </div> -->
        <div class="block_message">
            <p class="hello">Hello, World!</p>
        </div>
        <!-- <div class="block_message">
            <p class="look">Look at my website</p>
        </div> -->
        <!-- <div class="cards">
            <p class="card">Here</p>
            <p class="card">And here</p>
        </div> -->
    </div>
</template>

<style lang='scss'>

.base {
    height: calc(100vh - 160px);
    position: relative;
    align-items: center;
    display: table-cell;
    vertical-align: middle;
}

@mixin card($fill: #adedc2) {
    background: $fill;

}

.banner {
    @include card(#0e802c);
    width: calc(100vw - 100px);
    height: 60px;
    margin-left: 50px;
    margin-right: 50px;
    position: relative;
    align-items: center;
    display: flex;
}

.text_banner {
    font-family: 'Open Sans';
    color: white;
    font-size: 25px;
    text-decoration: normal;
    margin-left: 10px;
}

.block_message {
    display: flex;
    width: calc(100vw - 100px);
    margin-left: 50px;
    margin-right: 50px;
    align-items: center;
}
.hello {
    font-family: 'Montserrat';
    color: black;
    font-size: 30px;
    text-decoration: bolder;
    margin-left: 10px;
}

.look {
    font-family: 'Montserrat';
    color: black;
    font-size: 25px;
    margin-left: 10px;
}

.cards {
    width: calc(100vw - 100px);
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
}

.card {
    @include card();
    font-family: 'Montserrat';
    font-size: 20px;
    height: 50px;
    width: 110px;
    align-items: center;
    display: flex;
    margin-right: 20px;
    padding-left: 10px;
}

</style>