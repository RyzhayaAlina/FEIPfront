<script>
import ComponentHeader from "~/components/ComponentHeader.vue";
import ComponentFooter from "~/components/ComponentFooter.vue";
// import ComponentBody from "~/components/ComponentBody.vue";
</script>

<template>
  <div class="root">
    <ComponentHeader class="header" />
    <NuxtPage />
    <ComponentFooter class="footer" />
  </div>
</template>

<style>
@import "reset-css";

:root {
  --font-title: Montserrat, sans-serif;
  --font-text: Open Sans, sans-serif;

  font-family: var(--font-text);
}

html,
body {
  margin: 0;
  padding: 0;
}

html,
body,
#__nuxt,
.root {
  height: 100%;
}

.root {
  display: flex;
  flex-flow: column;
}
.header,
.footer {
  flex-shrink: 0;
}
.body {
  flex-grow: 1;
}
</style>