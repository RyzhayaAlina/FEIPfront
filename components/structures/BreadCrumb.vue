<script setup>

defineProps({
  activePage: String
})
</script>

<template>
    <ul class="breadcrumb">
      <li><NuxtLink to="/" class="link-to-main">Главная &nbsp;</NuxtLink></li>
      <li class="active">/ {{ activePage }}</li>
    </ul>   
</template>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  margin-top: 40px;
  margin-left: 88px;
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

@media screen and (max-width: 1100px) {
  .breadcrumb {
    margin-left: 16px;
  } 
}
</style>