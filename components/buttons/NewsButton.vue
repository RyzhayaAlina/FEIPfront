<script></script>

<template>
  <button class="button_news">Все новости</button>
</template>

<style lang="scss" scoped>
.button_news {
  display: inline-block;
  width: 141px;
  height: 49px;
  //   gap: 10px;
  border-radius: 10px;
  font-family: "Montserrat";
  text-align: center;
  font-size: 14px;
  font-weight: 600;
}

.button_news:default {
  background-color: #2b2f34;
  color: #029f59;
}

.button_news:focus {
  box-shadow: 0 0 0 2px #029f59;
  color: #ffffff;
  background-color: #254741;
}

.button_news:hover {
  background-color: #254741;
  color: #ffffff;
}

.button_news:active {
  border: 1px;
  border-color: #029f59;
  color: #029f59;
  background-color: #ffffff;
}

.button_news:disabled {
  background-color: #ffffff;
  color: #9d9c9c;
  border-color: #9d9c9c;
  border: 1px;
}
</style>

