<script setup>
import House from "assets/icons/House.svg?skipsvgo";
import Calendar from "assets/icons/Calendar.svg?skipsvgo";
</script>

<template>
  <div class="main_info_container">
    <div class="grid_container">
      <div class="grid_container_big">
        <div class="info_part_big">
          <div class="info_title_big">Каждый проект <br>
            для нас — важный</div>
          <div class="info_text_big">
            Мы строительная компания полного цикла.
          </div>
          <div class="info_text_big">
            Вникаем во все детали, разрабатываем планировку будущего дома,
            продумываем конструктивные решения и общую архитектурную концепцию
          </div>
        </div>
      </div>
      <div class="grid_container_small">
        <House class="svg_size"></House>
        <div class="info_part">
          <div class="info_title_small">57 домов</div>
          <div class="info_text_small">
            спроектировали и <br> построили “под ключ”
          </div>
        </div>
      </div>
      <div class="grid_container_small">
        <Calendar class="svg_size"></Calendar>
        <div class="info_part">
          <div class="info_title_small">14 лет</div>
          <div class="info_text_small">
            мы на рынке загородного строительства
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main_info_container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.grid_container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  max-width: 1440px;
  height: 259px;
  margin-bottom: 60px;
  gap: 14px;
}

.svg_size {
  width: 24px;
  height: 24px;
}

.grid_container_big {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  max-width: 624px;
}

.info_title_big {
  font-family: "Montserrat";
  font-size: 38px;
  font-weight: bold;
  line-height: 45.6px;
}

.info_text_big {
  font-family: "Open Sans";
  font-size: 20px;
  line-height: 20px;
  color: #666666;
  width: 570px;
}

.grid_container_small {
  background-color: #f5f7f3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  gap: 24px;
  border-radius: 24px;
  align-self: flex-end;
}

.info_part {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info_part_big {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.info_title_small {
  font-size: 24px;
  font-family: "Montserrat";
  font-weight: bold;
}

.info_text_small {
  color: #666666;
  font-size: 20px;
}
</style>
