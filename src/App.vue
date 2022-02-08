<script setup lang="ts">
import Counter from "@/components/Counter.vue";
import Todos from "@/components/Todos.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Counter />
      <Todos />
    </div>
  </header>

  <main>
  </main>
</template>

<style>
.wrapper {
  padding: 20px;
}
</style>
