<script setup>
import DarkEmblem from "assets/icons/DarkEmblem.svg?skipsvgo";
import Button_Apply from "~/components/Button_Apply.vue";
import Drawer from "~/components/Drawer.vue";

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
    <div class="container-header">
      <div class="title">
        <DarkEmblem class="draw-emblem" />
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
          <a class="number" href="tel:88001234567">
            <SvgoPhoneIcon class="icon_number" />+7 (900) 900-90-90</a
          >
        </div>
        <div class="apply-button"><Button_Apply /></div>
        <Drawer class="drawer" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 97px;
  display: flex;
  align-items: center;
}
.container-header {
  display: flex;
  align-items: center;
  margin: 24px 88px 24px 88px;
  justify-content: space-between;
  max-width: 1264px;
  width: 100%;
  padding-inline: 1rem;
}

.draw-emblem {
  width: 160px;
  max-width: 160px;
  min-width: 160px;
}

.title {
  gap: 80px;
  display: flex;
  align-items: center;
}

.names_titles {
  display: flex;
  list-style-type: none;
  padding: 0;
  flex-wrap: wrap;
}

.names_titles a {
  font-family: "Open Sans";
  color: #666666;
  text-decoration: none;
  font-size: 16px;
  white-space: nowrap;
  padding-left: 24px;
}

.data {
  display: flex;
  align-items: center;
  gap: 24px;
}

.box_number {
  gap: 8px;
  display: flex;
  flex-wrap: wrap;
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
  white-space: nowrap;
}

.drawer {
  display: none;
}

@media screen and (max-width: 1100px) {
  .header {
    gap: 40px;
  }
  .title {
    gap: 40px;
  }

  .container-header {
    margin-left: 0px;
    margin-right: 0px;
  }
}
@media screen and (max-width: 900px) {
  .names_titles {
    display: none;
  }

  .drawer {
    display: inline-block;
  }

  .apply-button {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  .number {
    display: none;
  }
}
</style>
