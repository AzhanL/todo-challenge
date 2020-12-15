import Vue from "vue";
import Vuex from "vuex";
import { StoreOptions } from "vuex";

import { NavStore, NavState } from "@/state/navigation";
import { TodosStore, TodosState } from "@/state/todos";

Vue.use(Vuex);

export interface RootState {
  nav: NavState;
  todos: TodosState;
}

const store: StoreOptions<RootState> = {
  modules: {
    nav: NavStore,
    todos: TodosStore,
  },
};

export default new Vuex.Store<RootState>(store);
