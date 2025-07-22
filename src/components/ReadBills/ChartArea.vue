<template>
  <div
    class="flex justify-center items-center min-w-[340px] h-[360px] w-full rounded-base-radius shadow-out-shadow bg-white"
  >
    <div ref="container" class="w-full h-full"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { ref, computed, defineProps, onMounted, watch } from "vue";
const props = defineProps(["chartData"]);
const container = ref(null);
// 定义收入支出总计
const income = computed(() => total("收入"));
const spend = computed(() => total("支出"));
function total(type) {
  const tem_data = props.chartData?.filter((item) => item.type == type) || [];
  return tem_data.reduce((sum, value) => sum + (value.money || 0), 0);
}
onMounted(() => {
  const myChart = echarts.init(container.value);
  watch(
    [income, spend],
    ([newIncome, newSpend]) => {
      myChart.setOption({
        title: {
          text: "",
        },
        tooltip: {},
        xAxis: {
          data: ["收入", "支出"],
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            data: [newIncome, newSpend],
          },
        ],
      });
    },
    { immediate: true }
  );
});
</script>
