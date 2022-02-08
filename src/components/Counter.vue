<template>
  <h1>{{ counterStore.counter }}</h1>
  <button @click="counterStore.increment()">Increment Counter</button>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore()
</script>

<style scoped>

</style>