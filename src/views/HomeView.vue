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

import emitter from "@/utils/eventbus";
import EmitterDemo from "@/components/emitterDemo.vue";

// TODO:
// FIXME:
onBeforeMount(() => {
  console.log("before mount");
  let a = "啊，${name}";
});

const name = ref("123");

onMounted(() => {
  console.log("mounted");

  emitter.on("changeName", () => {
    console.log("name", name.value);
  });

  setTimeout(() => {
    name.value = "456";
  }, 1000);
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

const name2 = ref("123");
function changeName2() {
  name2.value = "456";
}

const isEditing = ref(false);
</script>

<template>
  <main>
    <!-- <button ref="buttonRef" id="count" @click="count++">{{ count }}</button>

    <Ref />
    <TheWelcome /> -->
    <Diff />

    <div class="container-box"></div>
    <div>
      <button @click="changeName2">修改name</button>
      <EmitterDemo :name="name2" />
    </div>

    <transition>
      <button v-if="isEditing" v-on:click="isEditing = false">Save</button>
      <button v-else v-on:click="isEditing = true">Edit</button>
    </transition>
  </main>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.v-leave-active {
  position: absolute;
}
</style>
