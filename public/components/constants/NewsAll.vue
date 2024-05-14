<script setup>
import news1_1x from "~/assets/img/news1.jpg";
import news1_2x from "~/assets/img/news1@2x.jpg";
import news2_1x from "~/assets/img/news2.jpg";
import news2_2x from "~/assets/img/news2@2x.jpg";
import news3_1x from "~/assets/img/news3.jpg";
import news3_2x from "~/assets/img/news3@2x.jpg";
import news4_1x from "~/assets/img/news4.jpg";
import news4_2x from "~/assets/img/news4@2x.jpg";
import NewsStructure from "~/components/structures/NewsStructure.vue";
import Button_News from "~/components/buttons/NewsButton.vue";

const news = [
  {
    image: {
      x1: news1_1x,
      x2: news1_2x,
    },
    date: new Date("2021-08-20"),
    title: "Как сделать строительство дешевле?",
    description:
      "<p>Строительство дома можно сделать дешевле — выбрав проект, блаблаблаблаблабла</p>",
  },
  {
    image: {
      x1: news2_1x,
      x2: news2_2x,
    },
    date: new Date("2021-08-20"),
    title: "Почему Гуд Вилл строит лучшие дома?",
    description:
      "<p>Хотим обрадовать тех, кто планирует переезд из квартиры в дом блаблаблаблаблабла</p>",
  },
  {
    image: {
      x1: news3_1x,
      x2: news3_2x,
    },
    date: new Date("2021-08-20"),
    title: "Преимущества и недостатки частного дома",
    description:
      "<p>Первое и главное: строим дом индивидуально для вас, по вашим блаблаблаблаблабла</p>",
  },
  {
    image: {
      x1: news4_1x,
      x2: news4_2x,
    },
    date: new Date("2021-08-20"),
    title: "Из чего мы строим дома в ипотеку?",
    description:
      "<p>Самый популярный вопрос наших клиентов касается материалов, которы блаблаблабла</p>",
  },
];
</script>

<template>
  <div class="news_">
    <div class="section_news_title">
      <p class="news_title">Новости</p>
      <div class="all_news_button"><Button_News /></div>
    </div>
    <div class="news_list">
      <NewsStructure
        v-for="news in news"
        :image="news.image"
        :date="news.date"
        :title="news.title"
        :description="news.description"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.news_ {
  position: relative;
  width: 100%;
  top: 10px;
  padding-inline: 88px;
  padding-bottom: 61px;
}

.section_news_title {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  justify-content: space-between;
}

.news_title {
    font-size: 38px;
    font-family: 'Montserrat';
    font-weight: bold;
}

.news_list {
  display: flex;
  flex-flow: row;
  gap: 16px;
  overflow: auto;
  max-height: 343px;
  height: 100%;
}

.all_news_button {
    padding: 16px 24px;
}

@media screen and (max-width: 1299px) {
  .news_ {
    padding-inline: 16px;
  }
}
</style>
