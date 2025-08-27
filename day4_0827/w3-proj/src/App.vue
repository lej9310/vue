<script setup>
import { ref } from 'vue';
import Ex4 from './components/D4_for.vue';
import Ex5 from './components/D5_events.vue';
import Ex6 from './components/D6_methods.vue';
import Ex7 from './components/D7_model.vue';
import Ex8 from './components/D8_computed.vue';
import Ex9 from './components/D9_watchers.vue';
import Ex10 from './components/D10_Props.vue';
import Ex11 from './components/D11_Forms.vue';

const pages = { Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Ex10, Ex11}
const activeComp = ref("Ex10")
</script>

<template>
  <button @click="activeComp = 'Ex4'">v-for</button>
  <button @click="activeComp = 'Ex5'">Events</button>
  <button @click="activeComp = 'Ex6'">Methods</button>
  <button @click="activeComp = 'Ex7'">v-model</button>
  <button @click="activeComp = 'Ex8'">Computed Properties</button>
  <button @click="activeComp = 'Ex9'">Watchers</button>
  <button @click="activeComp = 'Ex10'">Props</button>
  <button @click="activeComp = 'Ex11'">폼 입력 바인딩</button>

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
