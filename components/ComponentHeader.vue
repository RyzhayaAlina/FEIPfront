<script setup>
import DarkEmblem from "assets/icons/DarkEmblem.svg?skipsvgo";

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

<template>
  <header class="header">
    <div class="title">
      <DarkEmblem />
      <nav>
        <ul class="names_titles">
          <li v-for="item in nav">
            <a :href="item.url">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="data">
      <div class="box_number">
        <a class="number" href="tel:88001234567"
          ><SvgoPhoneIcon class="icon_number" />+7 (900) 900-90-90</a
        >
      </div>
      <button class="button_apply">Оставить заявку</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: #ffffff;
  height: 97px;
  display: flex;
  align-items: center;
  margin: 0 88px 0;
  justify-content: space-between;
  // background-color: #bbdacc;
}

.title {
  height: 39px;
  gap: 80px;
  display: flex;
  align-items: center;
}

.names_titles {
  gap: 24px;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  padding: 0;
}

.names_titles a {
  font-family: "Open Sans";
  color: #666666;
  text-decoration: none;
  font-size: 16px;
}

.data {
  height: 49px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
}

.box_number {
  gap: 8px;
}

.icon_number {
  color: #029f59;
}

.number {
  font-family: "Montserrat";
  display: flex;
  gap: 8px;
  text-decoration: none;
  color: #254741;
  font-size: 15px;
}

.button_apply {
  background-color: #029f59;
  border: none;
  padding: 16px 40px;
  gap: 10px;
  border-radius: 10px;
  font-family: "Montserrat";
  color: #ffffff;
  font-size: 14px;
  text-align: center;
}
</style>
