import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";

export const useTodosStore = defineStore('todos', () => {
    const todos: Ref<Array<{ id: number, text: string }>> = ref([])

    function addTodo () {
        todos.value.push({ id: todos.value.length, text: 'New todo' })
    }

    return { todos, addTodo }
})