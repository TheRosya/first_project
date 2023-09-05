<template>
  <div class="app">
    <nav class='app__navbar'>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/posts">Посты</RouterLink>
      <RouterLink to="/about">О нас</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup lang="ts">

</script>
import { RouterLink, RouterView } from 'vue-router'
<style>

body,
html {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.app__navbar {
  display: flex;
  column-gap: 16px;
}
</style>
