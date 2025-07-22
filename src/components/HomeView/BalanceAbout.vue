<template>
  <div
    class="relative flex flex-col justify-center items-center w-full h-[220px] mt-8 pt-[30px] px-4 bg-white rounded-base-radius shadow-out-shadow"
  >
    <div class="total px-[10px] h-12">
      <span class="absolute left-[20px] top-[30px] text-[20px] text-base-color font-semibold"
        >余 额 :</span
      >
      <span class="text-4xl font-bold text-base-color">{{ data.total }}</span>
    </div>
    <div
      class="detail flex justify-around items-center w-full h-20 border-t-2 border-black text-xl font-semibold"
    >
      <span class="text-green-500">+ {{ data.totalIncome }}</span>
      <span>|</span>
      <span class="text-red-500">- {{ data.totalSpend }}</span>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from "@/stores/data";
const data = useDataStore();
</script>
