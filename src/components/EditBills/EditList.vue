<template>
  <div>
    <div class="flex justify-between items-center">
      <span class="text-lg text-gray-500">管理帐目</span>
      <go-back />
    </div>
    <common-list
      v-for="value in record.slice(0, show)"
      :key="value.id"
      :type="value.type"
      :money="value.money"
      :text="value.text"
      :date="value.date"
      :label="value.label"
    >
      <div class="flex justify-end gap-6 text-lg font-semibold text-base-color">
        <span @click="deleteList(value.id)" class="cursor-pointer">删除</span>
      </div>
    </common-list>
  </div>
  <div class="flex justify-center items-center">
    <button
      v-if="record.length > show"
      @click="loadMore"
      class="h-16 w-40 mt-5 bg-base-color text-xl font-semibold text-white rounded-base-radius"
    >
      加载更多
    </button>
  </div>
</template>

<script setup>
import CommonList from "../Common/CommonList.vue";
import GoBack from "../Common/GoBack.vue";
import { useDataStore } from "@/stores/data";
import { ref, computed } from "vue";
const data = useDataStore();
const record = computed(() => data.data);
const show = ref(5);
function loadMore() {
  show.value += 5;
}
function deleteList(id) {
  data.deleteData(id);
}
</script>
