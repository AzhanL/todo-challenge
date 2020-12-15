import { RootState } from "@/plugins/vuex";
import { Module } from "vuex";

export interface TodosState {
  todos: Todo[];
}

export type Todo = {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
};

export const TodosStore: Module<TodosState, RootState> = {
  namespaced: true,
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, payload: Todo) {
      state.todos.push(payload);
    },
    REMOVE_TODO(state, payload: number) {
      const position = state.todos.findIndex((todo) => todo.id == payload);

      state.todos.splice(position, 1);
    },
  },
  actions: {
    addTodo({commit}, payload: Todo) {
      commit('ADD_TODO', payload)
    },
    removeTodo({commit}, id: number) {
      commit('REMOVE_TODO', id)
    }
  },
};
