<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
import Ref from "@/components/Ref.vue";
import Diff from "@/components/Diff.vue";
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";

onBeforeMount(() => {
  console.log("before mount");
});

onMounted(() => {
  console.log("mounted");
});

const count = ref(0);
const buttonRef = ref();

onBeforeUpdate(() => {
  console.log("before update");
});

onUpdated(() => {
  // text content should be the same as current `count.value`
  // console.log(buttonRef.value.textContent);
  console.log("updated");
});

onBeforeUnmount(() => {
  console.log("before unmount");
});

onUnmounted(() => {
  console.log("unmounted");
});
</script>

<template>
  <main>
    <!-- <button ref="buttonRef" id="count" @click="count++">{{ count }}</button>

    <Ref />
    <TheWelcome /> -->
    <Diff />
  </main>
</template>
