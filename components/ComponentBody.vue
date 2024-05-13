<script setup>
import Slider from "~/components/sliders/Slider.vue";
import Description from "~/components/sliders/Description.vue";
import ProjectsAll from "~/components/constants/ProjectsAll.vue";
import NewsAll from "~/components/constants/NewsAll.vue";
</script>

<template>
  <main class="main-frame">
    <section class="slider">
      <div class="container">
        <Slider />
      </div>
    </section>
    <section class="description">
      <div class="container">
        <Description />
      </div>
    </section>
    <!-- <section class="projects-section">
      <div class="container">
        <ProjectsAll />
      </div>
    </section>
    <section class="news">
      <div class="container">
        <NewsAll />
      </div> 
    </section>  -->
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
  padding-inline: 1rem;
  padding: 0;
}

.slider,
.description {
  display: flex;
  justify-content: center;
  width: 100%;
}

.slider {
  margin-top: 40px;
  margin-bottom: 120px;
}

@media screen and (max-width: 810px) {
  .slider {
    margin-bottom: 80px;
  }
}

// .description {
//   margin-top: 120px;
//   background-color: red;
// }

// .projects-section {
//   width: 100%;
//   background-color: #F5F7F3;
//   min-height: 541px;
// }

// @media screen and (max-width: 760px) {
//   .container {
//     margin-left: 16px;
//     margin-right: 16px;
//   }
// }
</style>
