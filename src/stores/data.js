import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", () => {
  // 初始化数据
  const data = ref(JSON.parse(localStorage.getItem("data")) || []);
  const labelList = ref(
    JSON.parse(localStorage.getItem("label")) || [
      { id: new Date() + Math.random(), label: "工资" },
      { id: new Date() + Math.random(), label: "出行" },
      { id: new Date() + Math.random(), label: "水电" },
      { id: new Date() + Math.random(), label: "购物" },
    ]
  );
  // 创建总计
  const totalIncome = computed(() =>
    data.value
      .filter((item) => item.type === "收入")
      .reduce((sum, item) => sum + Number(item.money), 0)
  );
  const totalSpend = computed(() =>
    data.value
      .filter((item) => item.type === "支出")
      .reduce((sum, item) => sum + Number(item.money), 0)
  );
  const total = computed(() => totalIncome.value - totalSpend.value);
  // 时间筛选
  const weekData = computed(() => _dateRange("week"));
  const monthData = computed(() => _dateRange("month"));
  const yearData = computed(() => _dateRange("year"));

  // 方法
  function saveData(type, date, money, label, text) {
    if (text.length == 0) {
      text = "无备注";
    }
    const tem_data = {
      id: Date.now(),
      date,
      type,
      money: Number(money),
      label,
      text,
    };
    data.value.unshift(tem_data);

    _update();
  }
  function deleteData(id) {
    data.value = data.value?.filter((item) => item.id !== id);
    _update();
  }
  function addLabel(label) {
    labelList.value.push({ id: Date.now(), label });
    _update();
  }
  function deleteLabel(id) {
    labelList.value = labelList.value.filter((item) => item.id !== id);
    _update();
  }
  // 私有方法
  function _update() {
    localStorage.setItem("data", JSON.stringify(data.value));
    localStorage.setItem("label", JSON.stringify(labelList.value));
  }
  // 筛选日期
  function _dateRange(range) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDay = now.getDate();
    const tem_data = [...data.value];
    return tem_data.filter((item) => {
      const itemDate = new Date(item.date);
      switch (range) {
        case "week":
          return itemDate >= new Date(currentYear, currentMonth, currentDay - 6);
        case "month":
          return itemDate >= new Date(currentYear, currentMonth - 1, currentDay);
        case "year":
          return itemDate >= new Date(currentYear - 1, currentMonth, currentDay);
        default:
          return true;
      }
    });
  }
  return {
    data,
    labelList,
    total,
    totalIncome,
    totalSpend,
    weekData,
    monthData,
    yearData,
    saveData,
    deleteData,
    addLabel,
    deleteLabel,
  };
});
