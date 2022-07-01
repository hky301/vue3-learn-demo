<script setup lang="ts">
import { ref } from "vue";

const arr = ref(["a", "b", "c", "f", "e", "d"]);

function changeArr() {
  arr.value = ["a", "c", "b", "g", "e", "d"];
}

// 随机数函数
function getRandomNum(min, max) {
  // 返回[min, max]之间的随机数
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(array) {
  let newArr = array.slice(); // 不改变原数组，将数组剪切一份给newArr
  for (let i = 0; i < newArr.length; i++) {
    const j = getRandomNum(0, i);
    const temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }
  return newArr;
}
</script>

<template>
  <ul>
    <li v-for="item in arr" :key="item">
      {{ item }}
    </li>
  </ul>
  <button @click="changeArr">改变arr</button>
</template>
