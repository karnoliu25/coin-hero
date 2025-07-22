<template>
  <div>
    <!-- 下拉选项区 -->
    <div class="flex gap-4 mt-2">
      <select
        class="flex-1 h-10 bg-white rounded-base-radius shadow-out-shadow px-4 appearance-none text-center tracking-widest"
        v-model="chooseLabel"
      >
        <option value="全部">全部标签</option>
        <option v-for="label in renderLabel" :key="label" :value="label">
          {{ label }}
        </option>
      </select>
      <go-back />
    </div>
    <!-- 列表区 -->
    <div>
      <common-list
        v-for="value in filteredRecords.slice(0, show)"
        :key="value.id"
        :type="value.type"
        :money="value.money"
        :text="value.text"
        :date="value.date"
        :label="value.label"
      />
    </div>
    <div class="flex justify-center items-center">
      <button
        v-if="filteredRecords.length > show"
        @click="loadMore"
        class="h-16 w-40 mt-5 bg-base-color text-xl font-semibold text-white rounded-base-radius"
      >
        加载更多
      </button>
    </div>
  </div>
</template>

<script setup>
import CommonList from "@/components/Common/CommonList.vue";
import GoBack from "../Common/GoBack.vue";
import { useDataStore } from "@/stores/data";
import { ref, computed } from "vue";
const data = useDataStore();
const record = computed(() => data.data);
// 从已保存的数据中获得标签
const renderLabel = computed(() => {
  const labelList = new Set();
  record.value.map((item) => labelList.add(item.label));
  return labelList;
});
// 标签分类
const chooseLabel = ref("全部");
const filteredRecords = computed(() => {
  if (chooseLabel.value === "全部") {
    return record.value;
  } else {
    return record.value.filter((item) => item.label === chooseLabel.value);
  }
});
// 加载更多
const show = ref(5);
function loadMore() {
  show.value += 5;
}
</script>
