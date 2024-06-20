<script setup>

import truncate from 'truncate-html'

defineProps({
  image: {
    x1: String,
    x2: String,
  },
  date: Date,
  title: String,
  description: String,
});
</script>
<template>
  <div class="news_structure">
    <picture class="picture">
      <source :srcset="`${image.x2} 2x, ${image.x1}`" />
      <img :src="image.x1" :alt="title" class="image" />
    </picture>
    <p class="date">
      {{
        date.toLocaleDateString("ru", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      }}
    </p>
    <div class="block_description_news">
      <h4 class="title">{{ title }}</h4>
      <span class="description" v-html='truncate(description, 58)'></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news_structure {
  display: flex;
  flex-flow: column;
  gap: 16px;
  max-width: 304px;
  width: 100%;
  max-height: 343px;
  height: 100%;
}

.picture {
  width: 100%;
}

.image {
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0px 0px;
}

.block_description_news {
  display: flex;
  flex-flow: column;
  gap: 8px;
}

.date {
  font-family: 'Montserrat';
}

.title {
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: 600;
  margin: 0px;
}

.description {
    font-family: 'Open Sans';
    font-size: 16px;
    color: #666666;
}

@media screen and (max-width: 814px) {
  .news_structure {
    min-width: 344px;
  }
  .block_description_news {
    padding-right: 40px;
  }
}
</style>
