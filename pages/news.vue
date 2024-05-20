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
import Pagination from "~/components/controls/Pagination.vue";
import BreadCrumb from '~/components/structures/BreadCrumb.vue';

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
  <div class="news-wrapper">
    <BreadCrumb activePage='Новости' />
    <h1 class="news_title">Новости</h1>
    <div class="news_list">
      <NewsStructure
        v-for="news in news"
        :image="news.image"
        :date="news.date"
        :title="news.title"
        :description="news.description"
      />
    </div>
    <Pagination class="pagination" />
  </div>
</template>

<style scoped lang="scss">

.news-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
}

ul, li, h1 {
  margin: 0;
  padding: 0;
}

.news_title {
    font-size: 38px;
    font-family: 'Montserrat';
    font-weight: bold;
    margin-top: 48px;
    margin-left: 88px;
}

.news_list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
  margin-left: 88px;
  margin-right: 88px;
  padding-bottom: 40px;
}

.all_news_button {
    padding: 16px 24px;
}

.pagination {
  align-self: center;
  margin-top: 40px;
  margin-bottom: 80px;
}

@media screen and (max-width: 1100px) {
  .breadcrumb, 
  .news_title,
  .news_list, 
  .pagination {
    margin-left: 16px;
    margin-right: 16px;
  }
}
</style>
