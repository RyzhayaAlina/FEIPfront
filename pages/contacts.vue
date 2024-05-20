<script setup>
import { mockContacts } from '~/mock/contacts';
import BreadCrumb from '~/components/structures/BreadCrumb.vue';
import YandexMap from '~/components/constants/YandexMap.vue';

const { phone, email, address } = mockContacts;
</script>
<template>
  <div class="contacts-wrapper">
    <div class="container">
      <BreadCrumb activePage='Контакты' />
      <section class="contacts">
        <div class="info">
          <h1 class="title">Контакты</h1>
          <div class="Information_connection">
              <a class="phone" :href='`tel:${phone.value}`'
            ><SvgoPhoneIcon class="icons_color" />{{ phone.label }}</a
          >
          <a class="Information_tel_mail_loc" :href='`mailto:${email}`'
            ><SvgoMessageIcon class="icons_color" />{{ email }}</a
          >
          <a class="Information_tel_mail_loc"
            ><SvgoAdressIcon class="icons_color" />{{ address }}</a
          >
          </div>
        </div>
        <div class="map">
          <YandexMap width="100%" height="100%" />
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: 1264px;
  width: 100%;
  flex-grow: 1;
  padding: 0;
}

.contacts-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-grow: 1;
}

.link-to-main {
  text-decoration: none;
  color: #029f59;
  font-size: 20px;
}

.active {
  color: #969595;
  font-size: 20px;
}

.title {
  font-family: var(--font-title);
  font-size: 46px;
  font-weight: 700;
}

.contacts {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 48px;
  margin-bottom: 80px;
  gap: 20px;
}

.phone {
  font-weight: 600;
}

.map {
  max-width: 544px;
  min-height: 496px;
  width: 100%;
  height: 100%;
}

.Information_connection {
  grid-area: information;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 32px;
}

.Information_tel_mail_loc,
.phone {
  font-family: "Montserrat";
  display: flex;
  gap: 8px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  word-wrap: break-word;
}

.icons_color {
  color: #029f59;
  width: 24px;
  max-width: 24px;
  min-width: 24px;
}

@media screen and (max-width: 1030px) {
  .title,
  .Information_connection {
    margin-left: 16px;
  } 
}

@media screen and (max-width: 900px) {
  .contacts {
    flex-direction: column;
  }

  .map {
    margin-top: 32px;
    width: 100%;
  }

  .title {
    font-size: 32px;
  }

  .Information_tel_mail_loc, 
  .phone {
    font-size: 16px;
  }
}
</style>
