<script setup>
import { ref } from 'vue';
import Ex4 from './components/D4_for.vue';
import Ex5 from './components/D5_events.vue';
import Ex6 from './components/D6_methods.vue';

const pages = { Ex4, Ex5, Ex6 }
const activeComp = ref("Ex6")
</script>

<template>
  <button @click="activeComp = 'Ex4'">v-for</button>
  <button @click="activeComp = 'Ex5'">Events</button>
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
