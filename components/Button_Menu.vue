<script setup>
import { ref } from "vue";
const drawer = ref(null);

const nav = [
  {
    url: "/projects",
    label: "Реализованные проекты",
  },
  {
    url: "/news",
    label: "Новости",
  },
  {
    url: "/contacts",
    label: "Контакты",
  },
];
</script>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer v-model="drawer" temporary>
        <v-divider></v-divider>
      </v-navigation-drawer>
      <div class="menu">
        <ul class="names">
          <li v-for="item in nav">
            <a :href="item.url">
              {{ item.label }}
            </a>
          </li>
        </ul>
        <div class="connection">
          <a class="Information_tel_mail_loc" href="tel:88001234567"
            ><SvgoPhoneIcon class="icons_color" />+7 (900) 900-90-90</a
          >
          <a class="Information_tel_mail_loc" href="mailto:info@gmail.com"
            ><SvgoMessageIcon class="icons_color" />info@gmail.com</a
          >
          <span class="Information_tel_mail_loc"
            ><SvgoAdressIcon class="icons_color" />г. Владивосток ул. Выселковая
            49, стр. 3</span
          >
        </div>
      </div>
      <v-main style="height: 250px">
        <v-btn @click.stop="drawer = !drawer">Toggle</v-btn>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style lang="scss">
.menu {
  background-color: #029f59;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

</style>
