<script setup>
import router from './router';

</script>

<template>
  <p>경로: {{ $route.fullPath }}</p>

  <nav>
    <ul>
      <li>
        <RouterLink to="/">Go to Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Go to About</RouterLink>
      </li>
      <li>
        <RouterLink to="/study">Go to StudyView</RouterLink>
      </li>
      <li>
        <RouterLink to="/wd">Go to WebDesignView</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
li {
  text-align: left;
}
</style>
