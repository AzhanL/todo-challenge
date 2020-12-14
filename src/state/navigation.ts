import { RootState } from "@/plugins/vuex";
import { Module } from "vuex";

export interface NavState {
  navbarVisible: boolean;
}

export const NavStore: Module<NavState, RootState> = {
  namespaced: true,
  state: {
    navbarVisible: false,
  },
  mutations: {
    TOGGLE(state) {
      state.navbarVisible = !state.navbarVisible;
    },
    SET_NAVBAR_VISIBILITY(state, payload: boolean) {
      state.navbarVisible = payload;
    },
  },
  actions: {
    toggleNavbar({ commit }) {
      commit("TOGGLE");
    },
    setNavbarVisibility({ commit }, payload: boolean) {
      commit("SET_NAVBAR_VISIBILITY", payload);
    },
  },
};
