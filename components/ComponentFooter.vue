<script setup>
import LightEmblem from "assets/icons/LightEmblem.svg?skipsvgo";
import Button_Apply from "~/components/Button_Apply.vue";
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
  <footer class="footer_style">
    <LightEmblem />
    <ul class="names_titles_footer">
      <li v-for="item in nav">
        <a :href="item.url">
          {{ item.label }}
        </a>
      </li>
    </ul>
    <div class="Information_connection">
      <a class="Information_tel_mail_loc" href="tel:88001234567"
        ><SvgoPhoneIcon class="icons_color" />+7 (900) 900-90-90</a>
      <a class="Information_tel_mail_loc" href="mailto:info@gmail.com"
        ><SvgoMessageIcon class="icons_color" />info@gmail.com</a>
      <span class="Information_tel_mail_loc"
        ><SvgoAdressIcon class="icons_color" />г. Владивосток ул. Выселковая 49,
        стр. 3</span>
    </div>
    <Button_Apply class = "apply_footer" />
    <span class="Information_buttom"> © Загдом, 2021</span>
    <span class="Information_buttom">Политика конфиденциальности</span>
    <span class="Information_buttom">Пользовательское соглашение</span>
  </footer>
</template>

<style lang="scss">
.footer_style {
  background: #254741;
  display: grid;
  padding: 24px 88px;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  min-width: 1245px;
}

.names_titles_footer {
  gap: 24px;
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  flex-direction: column;
}

.names_titles_footer a {
  font-family: "Open Sans";
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
}

.icons_color {
  color: #029f59;
}

.Information_connection {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 10px;
}

.Information_tel_mail_loc {
  font-family: "Montserrat";
  display: flex;
  gap: 8px;
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
}

.Information_buttom {
  color: #ffffffa8;
  size: 8px;
  font-family: "Open Sans";
}

</style>
