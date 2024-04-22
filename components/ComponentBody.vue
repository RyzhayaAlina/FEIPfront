<script setup>
import Slider from "./Slider.vue";
import Slider_add_on from "./Slider_add_on.vue";
</script>

<template>
  <main>
    <div class="slider_container">
      <Slider />
    </div>
    <div class="slider_add_on_container">
      <Slider_add_on />
    </div>
  </main>
</template>

<style lang="scss">
.slider_container {
  margin-left: 88px;
  margin-right: 88px;
}

.slider_add_on_container {
  margin-left: 88px;
  margin-right: 88px;
}

@media screen and (max-width: 760px) {
  .slider_container {
    margin-left: 16px;
    margin-right: 16px;
  }

  .slider_add_on_container {
    margin-left: 16px;
    margin-right: 16px;
  }
}
</style>
