<script setup lang="ts">
import store from "@/stores/vuex/index";

function changeCountWithMutation() {
  store.commit("increment", {
    amount: 1,
  });
}

function changeCountWithAction() {
  store.dispatch("increment", {
    amount: 2,
  });
}
</script>

<template>
  <div>
    <p>{{ store.state.count }}</p>
    <p>{{ store.getters.doubleCount }}</p>
    <button @click="changeCountWithMutation">通过mutation修改count</button>
    <button @click="changeCountWithAction">通过Action修改count</button>

    <p>modules的数据:</p>
    <p>{{ store.state.a.count }}</p>
    <p>{{ store.state.b.count }}</p>
  </div>
</template>
