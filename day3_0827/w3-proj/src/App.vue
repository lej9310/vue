<script setup>
import { ref } from 'vue';
import Ex5 from './components/D5_event.vue';

const pages = { Ex6 }
const activeComp = ref("Ex1")
</script>

<template>
  <button @click="activeComp = 'Ex6'">Methods</button>

  <div id="comp_view">
    <KeepAlive>
      <component :is="pages[activeComp]"></component>
    </KeepAlive>
  </div>
</template>

<style scoped>
button {
  margin: 5px;
  filter: drop-shadow(0 0 1.5px grey);
}

#comp_view {
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
