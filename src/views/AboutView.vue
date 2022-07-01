<script setup lang="ts">
import emitter from "@/utils/eventbus";

function emitName() {
  emitter.emit("changeName");
}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="emitName">emit Name From About</button>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
