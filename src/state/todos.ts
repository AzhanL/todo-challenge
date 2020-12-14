import { RootState } from "@/plugins/vuex";
import { Module } from "vuex";

export interface TodosState {
  todos: Todo[];
}

type Todo = {
  title: string;
  description: string;
  dueDate: Date;
};

export const TodosStore: Module<TodosState, RootState> = {
  namespaced: true,
  state: {
      todos: []
  },
  mutations: {},
  actions: {},
};
