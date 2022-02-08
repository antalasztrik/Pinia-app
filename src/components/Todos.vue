<template>
  <div class="todos">
    <div class="todo" v-for="todo in todosStore.todos" :key="todo.id">
      <p>{{ todo.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";

const todosStore = useTodosStore()
</script>

<style scoped>
.todos {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 8px;
}
.todo {
  border: 1px solid black;
  width: max-content;
  padding: 20px;
}

.todo p {
  margin: 0;
}
</style>