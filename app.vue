<template>
  <div>
    <h1 class="title">Hello, world!</h1>
  </div>
</template>

<script>
console.log("Hello, world!");
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Open+Sans:ital,wdth@0,75..100;1,75..100&display=swap');

.montserrat {
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.open-sans {
  font-family: 'Open Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'wdth';
}

.title {
  font-family: Montserrat;
  color: rgb(255, 80, 214);
  font-size: 50px;
  text-decoration: line-through;
  text-shadow: 2px 2px 2px rgb(80, 133, 255);
}
</style>