<template>
  <Swiper class="swiper">
    <SwiperSlide v-for="slide in slides" class="swiper-slide">
      <figure class="slide_container">
        <picture>
          <source
            :srcset="`${slide.image_landscape.x2} 2x, ${slide.image_landscape.x1}`"
            media="(min-width: 768px)"
          />
          <source
            :srcset="`${slide.image_portrait.x2} 2x, ${slide.image_portrait.x1}`"
            media="(max-width: 767px)"
          />
          <img
            :src="slide.image_landscape.x1"
            :alt="slide.title"
            class="slide_image"
          />
        </picture>
        <figcaption class="slide_text">
            <h3 class="slide_title">{{ slide.title }}</h3>
            <p class="slide_second_title">{{ slide.text }}</p>
        </figcaption>
      </figure>
    </SwiperSlide>
    <div class="slider-controls">
      <SliderControls />
    </div>
  </Swiper>
</template>

<script setup>
import slide1_portrait_1x from "~/assets/img/slide-1-portrait.jpg";
import slide1_portrait_2x from "~/assets/img/slide-1-portrait@2x.jpg";
import slide1_landscape_1x from "~/assets/img/slide-1-landscape.jpg";
import slide1_landscape_2x from "~/assets/img/slide-1-landscape@2x.jpg";

import slide2_portrait_1x from "~/assets/img/slide-2-portrait.jpg";
import slide2_portrait_2x from "~/assets/img/slide-2-portrait@2x.jpg";
import slide2_landscape_1x from "~/assets/img/slide-2-landscape.jpg";
import slide2_landscape_2x from "~/assets/img/slide-2-landscape@2x.jpg";

import slide3_portrait_1x from "~/assets/img/slide-3-portrait.jpg";
import slide3_portrait_2x from "~/assets/img/slide-3-portrait@2x.jpg";
import slide3_landscape_1x from "~/assets/img/slide-3-landscape.jpg";
import slide3_landscape_2x from "~/assets/img/slide-3-landscape@2x.jpg";

const slides = [
  {
    image_portrait: {
      x1: slide1_portrait_1x,
      x2: slide1_portrait_2x,
    },
    image_landscape: {
      x1: slide1_landscape_1x,
      x2: slide1_landscape_2x,
    },
    title: "Проектируем и строим загородные дома",
    text: "Строим дома «под ключ»: от этапа проектирования и до финишной отделки помещений.",
  },
  {
    image_portrait: {
      x1: slide2_portrait_1x,
      x2: slide2_portrait_2x,
    },
    image_landscape: {
      x1: slide2_landscape_1x,
      x2: slide2_landscape_2x,
    },
    title: "Гарантия долговечности и безопасности вашего дома.",
    text: "Мы строим не просто здания, мы создаем пространства, в которых можно реализовывать свои мечты и жить комфортно.",
  },

  {
    image_portrait: {
      x1: slide3_portrait_1x,
      x2: slide3_portrait_2x,
    },
    image_landscape: {
      x1: slide3_landscape_1x,
      x2: slide3_landscape_2x,
    },
    title: "Наша цель - создать уютное и функциональное жилище!",
    text: "Мы создаем не просто красивые строения, мы строим комфорт и уют для наших клиентов.",
  },
];
</script>

<style scoped lang="scss">
.swiper {
  width: 100%;
  min-height: 450px;
  height: 100%;
  border-radius: 30px;
}

.slide_container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgb(123, 121, 121);
}

.slide_image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide_text {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  max-width: 460px;
  width: 100%;
  padding-inline: 144px;
  padding-bottom: 115px;
}

.slide_title {
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 46px;
}

.slide_second_title {
  line-height: 21px;
  font-size: 16px;
  margin-top: 12px;
}

@media screen and (max-width: 1300px) {
  .swiper {
    margin-left: 80px;
    margin-right: 80px;
  }
}

@media screen and (max-width: 1100px) {
  .swiper {
    margin-left: 16px;
    margin-right: 16px;
  }
}

@media screen and (max-width: 768px) {
  .swiper {
    max-height: 391px;
  }

  .slide_text {
    padding-inline: 24px;
    padding-bottom: 30px;
    max-width: 296px;
  }

  .slide_title {
    font-size: 30px;
  }
  .slide_second_title{
    font-size: 16px;
  }

  .slider-controls {
    display: none;
  }
}
</style>
