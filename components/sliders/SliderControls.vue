<template>
  <button @click="swiper.slidePrev()" class="prev slide_button"><</button>
  <button @click="swiper.slideNext()" class="next slide_button">></button>

  <div class="pagination">
    <button
      v-for="(slide, index) in swiper.slides"
      @click="swiper.slideTo(index)"
      :title="`Открыть ${index + 1} слайд`"
      :disabled="swiper.activeIndex === index"
      class="pag_button"
      :class="{ active: index === swiper.activeIndex }"
    ></button>
  </div>
</template>

<script setup>
const swiper = useSwiper();
</script>

<style scoped lang="scss">
.prev {
  margin-left: 16px;
}

.slide_button {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  z-index: 1;
  border: none;
  padding: 0;
  top: 50%;
  background-color: #029f59;
  color: white;
  cursor: pointer;
}

.next {
  right: 0;
  margin-right: 16px;
}

.pagination {
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-bottom: 40px;
  z-index: 1;
  display: flex;
  gap: 16px;
}

.pag_button {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  border: none;
}

.active {
  background-color: #03b766;
}
</style>
