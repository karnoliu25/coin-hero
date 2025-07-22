<template>
  <div class="fixed bottom-0 left-0 flex justify-around items-center w-full h-20 bg-white">
    <router-link
      v-for="item in pages"
      :key="item.name"
      :to="item.to"
      exact
      class="flex justify-center items-center w-20 h-[50px] rounded-base-radius"
      :class="isActive(item.name) ? 'shadow-inner-shadow' : 'shadow-out-shadow'"
    >
      <i class="iconfont text-2xl" :class="`icon-${item.icon}`"></i>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
const pages = ref([
  { to: "/", name: "home", icon: "zhuye" },
  { to: "/create", name: "create", icon: "xinjian" },
  { to: "/read", name: "read", icon: "jilu" },
  { to: "/edit", name: "edit", icon: "bianji" },
]);
const route = useRoute();
const isActive = (name) => {
  return String(route.name).startsWith(name);
};
</script>
