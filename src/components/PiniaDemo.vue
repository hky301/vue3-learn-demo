<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useCounterStore } from '@/stores/pinia/counter'

const store = useCounterStore()
// ❌ This won't work because it breaks reactivity
// it's the same as destructuring from `props`
// const { counter, doubleCount } = store

function changeCounter() {
  store.counter++
}

function changeCounterWithActions() {
  store.increment()
}

store.$subscribe((mutation: any, state: any) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // same as cartStore.$id
  mutation.storeId // 'cart'
  // only available with mutation.type === 'patch object'
  mutation.payload // patch object passed to cartStore.$patch()

  // persist the whole state to the local storage whenever it changes

  localStorage.setItem('cart', JSON.stringify({
    mutation,
    state
  }))
})


</script>

<template>
  <div class="greetings">
    <p>{{ store.counter }}</p>
    <p>{{ store.doubleCount }}</p>
    <button @click="changeCounter">直接修改counter</button>
    <button @click="changeCounterWithActions">调用action修改counter</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
