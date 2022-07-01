<script setup lang="ts">
import { reactive, ref } from "vue";
import { useMouse, useInfiniteScroll } from "@vueuse/core";

// "x" and "y" are refs
// const { x, y } = useMouse()

// console.log(x.value)

// const mouse = useMouse()

// console.log(mouse.x.value)

const mouse = reactive(useMouse());

// "x" and "y" will be auto unwrapped, no `.value` needed
// console.log(mouse.x)

const el = ref<HTMLElement | null>(null);
const data = ref([1, 2, 3, 4, 5, 6]);

// useInfiniteScroll(
//   el,
//   () => {
//     // load more
//     data.value.push(...data)
//   },
//   { distance: 10 }
// )
</script>

<template>
  <p>{{ mouse }}</p>
  <!-- <div ref="el">
    <div v-for="item in data">
      {{ item }}
    </div>
  </div> -->
</template>
