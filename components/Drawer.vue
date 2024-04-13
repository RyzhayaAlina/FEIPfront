<script setup>
  import Bars from '~/assets/icons/bars.svg'
</script>

<template>
  <button class="burger">
    <Bars class="bars" filled/>
  </button>
</template>

<style>
.burger {
  position: relative;
  display: inline-block;
  align-items: center;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  border-color: #029f58;
  width: 56px;
  height: 46px;
  background-color: #029f58;
  border: none;
}

.bars {
  width: 24px;
  height: 14px;
  margin-left: 0px;
}

</style>