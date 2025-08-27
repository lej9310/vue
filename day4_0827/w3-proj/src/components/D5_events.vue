<template>
    <div>        
        <input type="text" @input="inpCount++">
        <p>{{ inpCount }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inpCount = ref(0)
</script>

<style scoped>
div {
    border: dashed greenyellow 1px;
    width: 90%;
    margin: 5px auto;
    display: flex;
    flex-wrap: wrap;
}
</style>