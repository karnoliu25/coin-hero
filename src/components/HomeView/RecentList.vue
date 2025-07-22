<template>
  <div class="flex flex-col w-full overflow-auto mt-6 pb-4">
    <div class="recent mb-2 text-xl text-base-color font-semibold">最近记录</div>
    <div class="recent-list" v-if="record && record.length > 0">
      <common-list
        v-for="value in record.slice(0, 5)"
        :key="value.id"
        :type="value.type"
        :money="value.money"
        :text="value.text"
        :date="value.date"
        :label="value.label"
      />
    </div>
  </div>
</template>

<script setup>
import CommonList from "../Common/CommonList.vue";
import { useDataStore } from "@/stores/data";
import { computed } from "vue";
const data = useDataStore();
const record = computed(() => data.data);
</script>
