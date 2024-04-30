<script setup>
import Slider from "./Slider.vue";
import Slider_add_on from "./Slider_add_on.vue";
import ProjectsAll from "./ProjectsAll.vue";
import NewsAll from "./NewsAll.vue";
</script>

<template>
  <main>
    <div class="slider_container">
      <Slider />
    </div>
    <div class="slider_add_on_container">
      <Slider_add_on />
    </div>
    <!-- <div class="parts"> -->
      <div class="projects_container">
        <ProjectsAll />
      </div>
      <div class="news_container">
        <NewsAll />
      </div>
    <!-- </div> -->
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

// .projects_container {
// margin-left: 88px;
// margin-right: 88px;
// background-color: #F5F7F3;
// }

// .parts {
//   display: flex;
//   flex-direction: column;
//   gap: 1px;
// }

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
