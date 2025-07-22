<template>
  <div class="mt-4 px-[10px]">
    <!-- 类型区 -->
    <div>
      <label for="select" class="text-lg text-gray-400 font-medium">类型</label>
      <div
        class="flex justify-center items-center mt-2 rounded-base-radius bg-white h-14 text-3xl overflow-hidden"
      >
        <button
          class="flex-1"
          :class="isIncome ? 'h-full bg-base-color text-white' : ''"
          @click="chooseType('收入')"
        >
          收 入
        </button>
        <button
          class="flex-1"
          :class="isSpend ? 'h-full bg-base-color text-white' : ''"
          @click="chooseType('支出')"
        >
          支 出
        </button>
      </div>
    </div>
    <!-- 金额区 -->
    <div class="flex flex-col gap-1 mt-2">
      <label for="number" class="text-lg text-gray-400 font-medium">金额</label>
      <input
        type="digit"
        id="number"
        placeholder="请输入金额"
        class="pl-5 h-14 rounded-base-radius"
        v-model="money"
        required
      />
    </div>
    <!-- 日期区 -->
    <div class="flex flex-col gap-1 mt-2">
      <label for="date" class="text-lg text-gray-400 font-medium">日期</label>
      <input type="date" id="date" v-model="dateValue" class="px-5 h-14 rounded-base-radius" />
    </div>
    <!-- 标签区 -->
    <div class="flex flex-col gap-1 mt-2">
      <span for="label" class="text-lg text-gray-400 font-medium">标签</span>
      <select name="label" id="label" class="pl-5 h-14 rounded-base-radius" v-model="chooseLabel">
        <option value="其他">其他</option>
        <option v-for="label in data.labelList" :key="label.id" :value="label.label">
          {{ label.label }}
        </option>
      </select>
    </div>
    <!-- 简记区 -->
    <div class="flex flex-col gap-1 mt-2">
      <label for="number" class="text-lg text-gray-400 font-medium">简记</label>
      <input
        type="text"
        id="number"
        placeholder="请输入简要说明"
        class="pl-5 h-14 rounded-base-radius"
        v-model="text"
      />
    </div>
    <!-- 保存按钮 -->
    <div class="flex justify-center items-center mt-4">
      <button
        @click="save"
        class="w-[200px] h-[50px] text-2xl font-bold rounded-base-radius bg-base-color text-white"
      >
        保 存
      </button>
    </div>
  </div>
  <!-- 保存成功 -->
  <div v-show="isSave">
    <save-success />
  </div>
</template>

<script setup>
import SaveSuccess from "@/components/CreateBills/SaveSuccess.vue";
import { ref } from "vue";
import { useDataStore } from "@/stores/data";
const data = useDataStore();
// 获取type
const type = ref("收入");
const isIncome = ref(true);
const isSpend = ref(false);
function chooseType(value) {
  if (value === "收入") {
    type.value = "收入";
    isIncome.value = true;
    isSpend.value = false;
  } else if (value === "支出") {
    type.value = "支出";
    isIncome.value = false;
    isSpend.value = true;
  }
}
// 获取账目
const money = ref(null);
// 获取标签
const chooseLabel = ref("其他");
// 获取简要说明
const text = ref("");

// 动态获取实时日期
const dateValue = ref(today());
function today() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const todayDate = `${year}-${month}-${day}`;
  return todayDate;
}
// save状态
const isSave = ref(false);
function save() {
  const moneyNumber = Number(money.value);
  if (money.value == null) {
    alert("请输入金额");
    return;
  }
  if (isNaN(moneyNumber)) {
    alert("请输入数字类型的金额");
    money.value = "";
    return;
  }
  data.saveData(type.value, dateValue.value, money.value, chooseLabel.value, text.value);
  isSave.value = true;
  type.value = "收入";
  isIncome.value = true;
  isSpend.value = false;
  dateValue.value = today();
  money.value = null;
  chooseLabel.value = "其他";
  text.value = "";
  setTimeout(() => {
    isSave.value = false;
  }, 1500);
}
</script>

<style>
input {
  outline: 0;
  border: 0;
}
</style>
