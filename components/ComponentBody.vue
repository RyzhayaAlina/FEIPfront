<script setup>
import Slider from "./Slider.vue";
import Slider_add_on from "./Slider_add_on.vue";
import ProjectsAll from "./ProjectsAll.vue";
import NewsAll from "./NewsAll.vue";
</script>

<template>
  <main class="main-frame">
    <section class="slider">
      <div class="container">
        <Slider />
      </div>
    </section>
    <!-- <div class="container">
      <Slider_add_on />
    </div> -->
    <!-- <div class="parts"> -->
      <!-- <div class="container">
        <ProjectsAll />
      </div>
      <div class="container">
        <NewsAll />
      </div> -->
    <!-- </div> -->
  </main>
</template>

<style lang="scss" scoped>
.main-frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
}

.container {
  display: flex;
  justify-content: center;
  max-width: 1264px;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  margin: 40px 88px;
  background-color: blue;
  padding-inline: 1rem;
}

.slider {
  display: flex;
  align-items: center;
  background-color: pink;
  max-height: 450px;
  height: 100%;
  width: 100%;
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
  .container {
    margin-left: 16px;
    margin-right: 16px;
  }
}
</style>
