<template>
  <div class="pt-4 px-3 flex flex-col items-center gap-10">
    <div class="flex w-full justify-between h-10">
      <button
        @click="currentTime = 'week'"
        class="w-28 rounded-base-radius"
        :class="
          currentTime === 'week'
            ? ' bg-base-color text-white'
            : 'bg-white text-black border border-black'
        "
      >
        最近一周
      </button>
      <button
        @click="currentTime = 'month'"
        class="w-28 rounded-base-radius"
        :class="
          currentTime === 'month'
            ? ' bg-base-color text-white'
            : 'bg-white text-black border border-black'
        "
      >
        最近一月
      </button>
      <button
        @click="currentTime = 'year'"
        class="w-28 rounded-base-radius"
        :class="
          currentTime === 'year'
            ? ' bg-base-color text-white'
            : 'bg-white text-black border border-black'
        "
      >
        最近一年
      </button>
    </div>
    <chart-area :chartData="filterTime" />
    <div class="flex justify-center">
      <RouterLink to="/read/detail"
        ><button
          class="w-[260px] h-[50px] text-xl font-medium bg-base-color text-white rounded-base-radius"
        >
          查看详细账目
        </button></RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import ChartArea from "@/components/ReadBills/ChartArea.vue";
import { RouterLink } from "vue-router";
import { computed, ref } from "vue";
import { useDataStore } from "@/stores/data";
const data = useDataStore();
const currentTime = ref("week");
const filterTime = computed(() => {
  switch (currentTime.value) {
    case "week":
      return data.weekData;
    case "month":
      return data.monthData;
    case "year":
      return data.yearData;
    default:
      return data.data;
  }
});
</script>
