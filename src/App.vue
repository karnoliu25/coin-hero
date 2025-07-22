<template>
  <div class="flex flex-col w-srceen min-h-screen h-auto bg-base-bg">
    <header>
      <app-header />
    </header>
    <main class="flex-1 pt-3 pb-28 px-[10px]">
      <router-view />
    </main>
    <footer class="w-srceen">
      <app-nav />
    </footer>
  </div>
</template>

<script setup>
import AppHeader from "./components/Common/AppHeader.vue";
import AppNav from "./components/Common/AppNav.vue";
import { RouterView } from "vue-router";
</script>
