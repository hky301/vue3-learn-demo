import { defineStore } from "pinia";
import { ref } from "vue";

export const useDemoStore = defineStore("demo", () => {
  const count = ref(1);

  function increment() {
    count.value++;
  }

  return {
    count,
    increment,
  };
});
