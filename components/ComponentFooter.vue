<script setup>
import LightEmblem from "~/assets/icons/LightEmblem.svg?skipsvgo";
import Button_Apply from "~/components/buttons/ApplyButton.vue";
import { mockContacts } from '~/mock/contacts';

const { phone, email, address } = mockContacts;
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
  <footer class="main-footer">
    <div class="container-footer">
      <LightEmblem class="light-emblem" />
      <ul class="names_titles_footer">
        <li v-for="item in nav">
          <NuxtLink :to="item.url">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
      <div class="Information_connection">
        <a class="Information_tel_mail_loc" :href='`tel:${phone.value}`'
          ><SvgoPhoneIcon class="icons_color" />{{ phone.label }}</a
        >
        <a class="Information_tel_mail_loc" :href='`mailto:${email}`'
          ><SvgoMessageIcon class="icons_color" />{{ email }}</a
        >
        <a class="Information_tel_mail_loc"
          ><SvgoAdressIcon class="icons_color" />{{ address }}</a
        >
      </div>
      <div class="apply-footer"><Button_Apply /></div>
      <p class="Information_company">© Загдом, 2021</p>
      <a class="Information_buttom_pol" href="#">Политика конфиденциальности</a>
      <a class="Information_buttom_sogl" href="#"
        >Пользовательское соглашение</a
      >
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.main-footer {
  background: #254741;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  min-height: 264px;
  width: 100%;
}

.container-footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "logo menu information button"
    "company policy agree .";
  grid-gap: 32px;
  max-width: 1264px;
  width: 100%;
  padding-inline: 1rem;
  margin: 37px 88px;
}

.light-emblem {
  grid-area: logo;
  width: 160px;
  max-width: 160px;
  min-width: 160px;
}

.names_titles_footer {
  grid-area: menu;
  gap: 24px;
  display: flex;
  list-style-type: none;
  flex-direction: column;
}

.names_titles_footer a {
  font-family: "Open Sans";
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
}

.Information_connection {
  grid-area: information;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.Information_tel_mail_loc {
  font-family: "Montserrat";
  display: flex;
  gap: 8px;
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
}

.apply-footer {
  grid-area: button;
  justify-self: end;
}

.Information_company {
  grid-area: company;
}

.Information_buttom_pol {
  grid-area: policy;
}

.Information_buttom_sogl {
  grid-area: agree;
}

.icons_color {
  color: #029f59;
  width: 16px;
  max-width: 16px;
  min-width: 16px;
}

.Information_company {
  grid-area: company;
  color: #ffffff;
  opacity: 60%;
  size: 8px;
  font-family: "Open Sans";
  white-space: nowrap;
}

.Information_buttom_pol {
  grid-area: policy;
  color: #ffffff;
  opacity: 60%;
  size: 8px;
  font-family: "Open Sans";
  text-decoration: none;
}

.Information_buttom_sogl {
  grid-area: agree;
  color: #ffffff;
  opacity: 60%;
  size: 8px;
  font-family: "Open Sans";
  text-decoration: none;
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

@media screen and (max-width: 900px) {
  .container-footer {
    grid-template-areas:
    "logo"
    "menu"
    "information"
    "button"
    "company"
    "policy"
    "agree";
    grid-gap: 40px;
  }

  .Information_buttom_pol,
  .Information_buttom_sogl {
    margin-top: -24px;
    white-space: nowrap;
  }

  .apply-footer {
    justify-self: start;
  }
}
</style>
