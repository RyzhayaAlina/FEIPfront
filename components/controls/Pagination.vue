<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'radix-vue'
</script>

<template>
  <PaginationRoot :total="100" :sibling-count="0" show-edges :default-page="1">
    <PaginationList v-slot="{ items }" class="PaginationList">
      <PaginationPrev :style="{ marginRight: 16 }" class="Button-arrow">
        <Icon icon="radix-icons:chevron-left" />
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem v-if="page.type === 'page'" :key="index" class="Button-number" :value="page.value">
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis v-else :key="page.type" :index="index" class="PaginationEllipsis">
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext :style="{ marginLeft: 16 }" class="Button-arrow">
        <Icon icon="radix-icons:chevron-right" />
      </PaginationNext>
    </PaginationList>
  </PaginationRoot>
</template>

<style lang="scss" scoped>

/* reset */
button {
  all: unset;
}

.Button-arrow{
  text-align: center;
  font-size: 15px;
  line-height: 1;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border: 1px solid #029F59;
  border-radius: 10px;
  fill: #254741;
  cursor: pointer;
}

.Button-arrow:disabled {
  background-color: #FAFAFA;
  border: 1px solid #D7D7D7;
  fill: #D7D7D7;
}

.Button-arrow:hover{
  background-color: #254741;
  fill: white;
  border: none;
}

.Button-arrow:active{ 
  background-color: #029F59;
  fill: white;
  border: none;
}

.Button-arrow:focus {
  background-color: #EEEEEE;
  border: 1px solid #9D9C9C;
  fill: #BDBDBD;
}

.Button-number {
  text-align: center;
  font-size: 15px;
  line-height: 1;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border: 1px solid #029F59;
  border-radius: 10px;
  fill: #254741;
  cursor: pointer;
}

.PaginationEllipsis{
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  align-items: center;
  justify-content: center;
}

.PaginationList{
  display: flex;
  align-items: center;
  gap: 0.25rem; 
  color: green;
}
</style>