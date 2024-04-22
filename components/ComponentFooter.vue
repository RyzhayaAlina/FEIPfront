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
  <footer class="footer">
    <div class="container-footer">
      <div class="main-part">
        <LightEmblem class="light-emblem" />
        <ul class="names_titles_footer">
          <li v-for="item in nav">
            <a :href="item.url">
              {{ item.label }}
            </a>
          </li>
        </ul>
        <div class="Information_connection">
          <a class="Information_tel_mail_loc" href="tel:88001234567"
            ><SvgoPhoneIcon class="icons_color" />+7 (900) 900-90-90</a
          >
          <a class="Information_tel_mail_loc" href="mailto:info@gmail.com"
            ><SvgoMessageIcon class="icons_color" />info@gmail.com</a
          >
          <a class="Information_tel_mail_loc"
            ><SvgoAdressIcon class="icons_color" />г. Владивосток ул. Выселковая
            49, стр. 3</a
          >
        </div>
        <div class="apply-footer"><Button_Apply /></div>
      </div>
      <div class="additional_part">
        <p class="Information_company"> © Загдом, 2021</p>
        <a class="Information_buttom_pol" href="#">Политика конфиденциальности</a>
        <a class="Information_buttom_sogl" href="#">Пользовательское соглашение</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background: #254741;
  display: flex;
  height: 264px;
  width: 100%;
}

.container-footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1264px;
  width: 100%;
  padding-inline: 1rem;
  margin: 37px 88px;
}

.light-emblem {
  width: 160px;
  max-width: 160px;
  min-width: 160px;
}

.main-part {
  display: flex;
  justify-content: space-between;
}

.additional_part {
  display: flex;
  gap: 75px;
}

.apply-footer {
  display: inline-block;
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
  width: 16px;
  max-width: 16px;
  min-width: 16px;
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

.Information_company {
  color: #ffffff;
  opacity: 60%;
  size: 8px;
  font-family: "Open Sans";
  white-space: nowrap;
  padding-left: 5px;

}

.Information_buttom_pol {
  color: #ffffff;
  opacity: 60%;
  size: 8px;
  font-family: "Open Sans";
  text-decoration: none;
  white-space: nowrap;
  padding-left: 95px;
}

.Information_buttom_sogl {
  color: #ffffff;
  opacity: 60%;
  size: 8px;
  font-family: "Open Sans";
  text-decoration: none;
  white-space: nowrap;
}

@media screen and (max-width: 1100px) {
  .footer {
    gap: 40px;
  }

  .container-footer {
    margin-left: 0px;
    margin-right: 0px;
  }
}

@media screen and (max-width: 1130px) {
  
  .light-emblem, 
  .names_titles_footer, 
  .Information_connection {
    margin-right: 25px;
  }
}

@media screen and (max-width: 800px) {
  .main-part, .additional-part {
    flex-direction: column;
  }

  .main-part {
    gap: 40px;
  }

  .additional_part {
    margin-top: 0px;
    gap: 16px;
    display: flex;
    flex-direction: column;
  }

  .Information_buttom_pol {
    padding-left: 0;
  }

  .footer {
    height: 633px;
  }

  .container-footer {
    margin: 40px;
    gap: 40px;
  }
}
</style>
