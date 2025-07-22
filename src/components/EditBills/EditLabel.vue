<template>
  <div>
    <div class="flex justify-between items-center px-4">
      <span class="text-lg text-gray-500">管理标签</span>
      <go-back />
    </div>
    <ul class="mt-4 h-[500px] overflow-auto pb-4">
      <li
        v-for="item in labelList"
        :key="item.id"
        class="mt-8 flex justify-between items-center px-6 h-20 bg-white rounded-base-radius shadow-out-shadow"
      >
        <span class="text-2xl font-semibold">{{ item.label }}</span>
        <span @click="deleteLabel(item.id)" class="text-lg text-base-color cursor-pointer"
          >删除</span
        >
      </li>
    </ul>
    <RouterLink to="/edit/label/newlabel">
      <div class="flex justify-center items-center mt-6">
        <button class="w-[280px] h-[50px] bg-base-color text-white text-xl rounded-base-radius">
          创建标签
        </button>
      </div>
    </RouterLink>
  </div>
</template>
<script setup>
import GoBack from "../Common/GoBack.vue";
import { RouterLink } from "vue-router";
import { useDataStore } from "@/stores/data";
import { computed } from "vue";
const data = useDataStore();
const labelList = computed(() => data.labelList);
function deleteLabel(id) {
  data.deleteLabel(id);
}
</script>
