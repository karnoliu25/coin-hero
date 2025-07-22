<template>
  <div>
    <ul class="mt-6">
      <li
        class="flex flex-col justify-between py-3 px-6 bg-white rounded-base-radius shadow-out-shadow"
      >
        <div class="flex justify-between">
          <span
            class="text-xl font-semibold"
            :class="type == '支出' ? 'text-red-500' : 'text-green-500'"
            >{{ type }}</span
          ><span
            class="text-xl font-semibold"
            :class="type == '支出' ? 'text-red-500' : 'text-green-500'"
            >{{ useMoney }}</span
          >
        </div>
        <div class="flex justify-between mt-1">
          <span class="text-sm text-gray-400">{{ text }}</span>
          <span>{{ date }}</span>
        </div>
        <div v-if="label.length > 0" class="flex justify-start gap-2 mt-1">
          <span class="py-1 px-2 rounded-base-radius bg-red-400 text-white">{{ label }}</span>
        </div>
        <slot></slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  type: {
    type: String,
  },
  money: {
    type: Number,
    default: 0,
  },
  text: {
    type: String,
    default: "无备注",
  },
  date: {
    type: String,
  },
  label: {
    type: String,
  },
});
const useMoney = computed(() => {
  if (props.type == "收入") {
    return "+" + props.money;
  } else {
    return "-" + props.money;
  }
});
</script>
