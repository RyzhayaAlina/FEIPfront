<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "radix-vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <DialogRoot>
    <DialogTrigger class="button_apply"> Оставить заявку </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="DialogOverlay" />
      <DialogContent class="DialogContent">
        <div class="DialogPartInput">
          <DialogTitle class="DialogTitle">Оставить заявку</DialogTitle>
          <div class="DialogFrames">
            <fieldset class="Fieldset">
              <input id="name" class="Input" placeholder="Имя" />
            </fieldset>
            <fieldset class="Fieldset">
              <input id="phone" class="Input" placeholder="Телефон" />
            </fieldset>
            <fieldset class="Fieldset">
              <input id="message" class="Input" placeholder="Сообщение" />
            </fieldset>
          </div>
        </div>
        <div class="DialogPartSave">
          <DialogClose as-child>
            <button class="button_save">Оставить заявку</button>
          </DialogClose>
          <span class="AfterwordSave">
            Нажимая на кнопку «Отправить», вы принимаете
            <a class="links" href="#">пользовательское соглашение</a> и
            <a class="links" href="#">политику конфиденциальности</a>
          </span>
        </div>
        <DialogClose class="IconButton" aria-label="Close">
          <Icon icon="lucide:x" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style lang="scss" scoped>
/* reset */
button,
fieldset,
input {
  all: unset;
}

.DialogOverlay {
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.DialogContent {
  background-color: #f5f7f3;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 448px;
  max-height: 603px;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
}

.DialogPartInput {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
}

.DialogTitle {
  margin: 15px;
  font-weight: 500;
  color: black;
  font-size: 32px;
  font-family: "Montserrat";
  font-weight: bold;
}

.DialogFrames {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 353px;
}

.Fieldset {
  width: 353px;
  // height: 58px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 15px;
  // overflow-wrap: break-word;
  // white-space: normal;
}

.Fieldset:hover {
  box-shadow: 0 0 0 2px #029f59;
}

.Input {
  width: 353px;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 10px;
  padding-left: 16px;
  font-size: 15px;
  line-height: 1;
  color: black;
  font-family: "Montserrat";
  height: 35px;
  // display: block;
  // overflow-wrap: break-word;
}

.Input:focus {
  background-color: #a4d0bf;
  width: 327px;
}

.DialogPartSave {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
}

.button_save {
  background-color: #029f59;
  border: none;
  padding: 16px 40px;
  border-radius: 10px;
  font-family: "Montserrat";
  color: #ffffff;
  font-size: 14px;
  text-align: center;
}

.button_save:hover {
  background-color: #254741;
  box-shadow: 0 0 0 2px #029f59;
}
.button_save:focus {
  // box-shadow: 0 0 0 2px #029f59;
  background-color: #2B2F34;
}

.AfterwordSave {
  color: #757e8d;
  font-family: "Open Sans";
  font-size: 14px;
  width: 310px;
  text-align: center;
  line-height: 20px;
  gap: 5px;
}

.links {
  color: #029f59;
  text-decoration: none;
}

.DialogContent:focus {
  outline: none;
}

.button_apply {
  display: inline-block;
  background-color: #029f59;
  border: none;
  gap: 10px;
  padding: 16px 40px;
  border-radius: 10px;
  font-family: "Montserrat";
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  width: 120px;
  height: 19px;
}

.button_apply:hover {
  background-color: #254741;
  box-shadow: 0 0 0 2px #029f59;
}
.button_apply:focus {
  // box-shadow: 0 0 0 2px #029f59;
  background-color: #2B2F34;
}

.IconButton {
  font-family: inherit;
  border-radius: 100%;
  height: 32px;
  width: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #a4d0bf;
  color: #029f59;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 6px;
}
.IconButton:hover {
  box-shadow: 0 0 0 2px #029f59;
}
// .IconButton:focus {
//   box-shadow: 0 0 0 2px #029f59;
// }


@keyframes overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes contentShow {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
