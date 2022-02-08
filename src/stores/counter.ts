import { defineStore } from 'pinia'
import {useTodosStore} from "@/stores/todos";

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      const todosStore = useTodosStore()
      this.counter++
      todosStore.addTodo()
    }
  }
})
