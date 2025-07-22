<template>
  <div class="flex justify-end items-center h-10 w-20">
    <button
      @click.prevent="goBack"
      class="h-full w-full bg-white rounded-base-radius shadow-out-shadow"
    >
      返回
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>
