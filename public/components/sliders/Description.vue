<script setup>
import House from "~/assets/icons/House.svg";
import Calendar from "~/assets/icons/Calendar.svg";
</script>

<template>
  <div class="description-wrapper">
    
    <div class="about-company-block">
      <p class="title">Каждый проект <br />для нас — важный</p>
      <p class="text">Мы строительная компания полного цикла.</p>
      <p class="text">Вникаем во все детали, разрабатываем планировку будущего дома, продумываем конструктивные решения и общую архитектурную концепцию</p>
    </div>

    <div class="statistical-blocks">
      <div class="block">
        <House class="icon" filled />
        <div class="info_part">
          <p class="numbers-info">57 домов</p>
            <p class="text-info">спроектировали и <br />построили “под ключ”</p>
        </div>
      </div>
      
      <div class="block">
        <Calendar class="icon" filled />
        <div class="info_part">
          <p class="numbers-info">14 лет</p>
            <p class="text-info">мы на рынке загородного строительства</p>
        </div>
      </div>
    </div>
  
  </div>
</template>

<style lang="scss" scoped>
.description-wrapper {
  display: flex;
  gap: 16px;
  // margin-left: 80px;
  // margin-right: 80px;
}

.title {
  font-size: 38px;
  font-family: var(--font-title);
  font-weight: 700;
}

.about-company-block {
  max-width: 624px;
}

.statistical-blocks {
  display: flex;
  gap: 16px;
  align-self: flex-end;
}

.block {
  display: flex;
  flex-direction: column;
  background-color: #F5F7F3;
  border: none;
  border-radius: 20px;
  max-width: 304px;
  width: 100%;
}

.icon {
  max-width: 20px;
  width: 100%;
  margin-top: 24px;
  margin-left: 24px;
}

.text {
  font-size: 20px;
  color: #666666;
  margin-top: 32px;
}

.numbers-info {
  font-weight: 400;
  font-size: 24px;
  font-family: var(--font-title);
  margin-top: 24px;
  margin-bottom: 8px;
  margin-left: 24px;
}

.text-info {
  color: #666666;
  font-size: 20px;
  margin: 0px 24px 24px 24px; 
}

@media screen and (max-width: 1300px) {
  .description-wrapper {
    margin-left: 80px;
    margin-right: 80px;
  }
}

@media screen and (max-width: 1100px) {
  .description-wrapper {
    margin-left: 16px;
    margin-right: 16px;
  }
}

@media screen and (max-width: 810px) {
  .description-wrapper,
  .statistical-blocks {
    flex-direction: column;
    width: 100%;
  }
  
  .statistical-blocks {
    align-self: flex-start;
    background-color: red;
  }
  .title {
    font-size: 28px;
  }

  .block,
  .about-company-block {
    width: 100%;
  }

}
</style>
