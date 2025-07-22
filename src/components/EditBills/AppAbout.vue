<template>
  <div>
    <div class="flex justify-between items-center px-10">
      <span class="text-lg text-gray-500">关于</span>
      <go-back />
    </div>
    <div
      class="mt-4 w-full min-h-[500px] max-h-[700px] overflow-auto rounded-base-radius shadow-out-shadow bg-white px-6 py-10 text-xl"
    >
      <p>
        <span class="font-semibold">关于应用：</span
        >钱包拯救计划是一款记账APP，用户可以记录账目、修改账目、删除帐目、查看账目。
      </p>
      <p>如果您有什么建议，请联系开发者。</p>
      <p><span class="font-semibold">开发者：</span>Karnoliu</p>
      <p><span class="font-semibold">Email：</span>Karnoliu@163.com</p>
    </div>
  </div>
</template>

<script setup>
import GoBack from "../Common/GoBack.vue";
</script>
