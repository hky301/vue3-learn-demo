<script setup lang="ts">
import { ref } from 'vue';

const objRef = ref({
  a: 1,
  b: 2
})

const changeObjRef = () => {
  objRef.value = {
    a: 1,
    b: 2
  }
}

</script>

<template>
  <p>{{ objRef }}</p>
  <button @click="changeObjRef">改变 ObjRef</button>
</template>

<style>
</style>
