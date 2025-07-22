<template>
  <div>
    <router-link v-for="item in pages" :key="item.title" :to="item.to"
      ><div
        class="flex items-center h-20 w-full mt-6 bg-white rounded-base-radius shadow-out-shadow text-2xl font-semibold pl-6 text-base-color"
      >
        <span>{{ item.title }}</span>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const pages = ref([
  { to: "/edit/list", name: "edit/list", title: "管理账目" },
  { to: "/edit/label", name: "edit/label", title: "管理标签" },
  { to: "/edit/about", name: "edit/about", title: "关于" },
]);
</script>
