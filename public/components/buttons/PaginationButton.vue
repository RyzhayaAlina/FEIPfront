<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'radix-vue'
</script>

<template>
  <PaginationRoot :total="100" :sibling-count="1" show-edges :default-page="2">
    <PaginationList v-slot="{ items }" class="PaginationList">
      <PaginationFirst class="Button">
        <Icon icon="radix-icons:double-arrow-left" />
      </PaginationFirst>
      <PaginationPrev :style="{ marginRight: 16 }" class="Button">
        <Icon icon="radix-icons:chevron-left" />
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem v-if="page.type === 'page'" :key="index" class="Button" :value="page.value">
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis v-else :key="page.type" :index="index" class="PaginationEllipsis">
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext :style="{ marginLeft: 16 }" class="Button">
        <Icon icon="radix-icons:chevron-right" />
      </PaginationNext>
      <PaginationLast class="Button">
        <Icon icon="radix-icons:double-arrow-right" />
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>

<style lang="scss" scoped>

/* reset */
button {
  all: unset;
}

.Button{
  text-align: center;
  font-size: 15px;
  line-height: 1;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 0.25rem; 
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.Button:disabled {
  opacity: .5
}

.Button:hover{
  background-color: rgb(255 255 255 / 0.1)
}

.Button[data-selected]{ 
  background-color: rgb(255 255 255);
  color: black;
}

.PaginationEllipsis{
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  align-items: center;
  justify-content: center
}

.PaginationList{
  display: flex;
  align-items: center;
  gap: 0.25rem; 
  color: rgb(255 255 255)
}

</style>