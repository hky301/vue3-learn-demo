<script setup lang="ts">
import { ref } from "vue";

const arr = ref(["a", "b", "c", "d", "e"]);

function changeArr() {
  arr.value = ["a", "c", "b", "d", "e"];
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
