import Vue from "vue";
import Vuex from "vuex";
import { StoreOptions } from "vuex";

import { NavStore, NavState } from "../state/navigation";

Vue.use(Vuex);

export interface RootState {
  nav: NavState;
}

const store: StoreOptions<RootState> = {
  modules: {
    nav: NavStore,
  },
};

export default new Vuex.Store<RootState>(store);
