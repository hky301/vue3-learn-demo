<script setup lang="ts">
import emitter from "@/utils/eventbus";
import { onUpdated } from "vue";

function emitName() {
  emitter.emit("changeName");
}

const props = defineProps({
  name: String,
});

onUpdated(() => {
  console.log(props.name);
});
</script>
<template>
  <button @click="emitName">emit Name</button>
</template>
