<template>
  <div>
    <div class="flex flex-col mt-10">
      <label class="text-lg text-gray-500 ml-[30px]" for="label">添加标签</label>
      <div class="flex justify-center my-4">
        <input
          class="px-6 h-[50px] w-[300px] rounded-base-radius bg-white shadow-out-shadow"
          type="text"
          id="label"
          v-model="labelValue"
        />
      </div>
    </div>
    <div class="btns flex justify-around items-center mt-8">
      <button
        @click="saveLabel(labelValue)"
        class="w-[120px] h-[40px] rounded-base-radius bg-base-color text-white shadow-out-shadow"
      >
        确定
      </button>
      <button
        @click="cancel"
        class="w-[120px] h-[40px] rounded-base-radius text-base-color bg-white shadow-out-shadow"
      >
        取消
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useDataStore } from "@/stores/data";
const data = useDataStore();
const labelValue = ref("");
const router = useRouter();
const cancel = () => {
  router.go(-1);
};
const saveLabel = (label) => {
  if (labelValue.value.length == 0) {
    alert("请输入标签名后保存");
    return;
  }
  data.addLabel(label);
  alert("已保存标签");
  labelValue.value = "";
};
</script>
