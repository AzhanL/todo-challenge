<template>
  <v-navigation-drawer app v-model="navbarVisibility" temporary>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "@/plugins/vuex";
import { namespace } from "vuex-class";

// Extract the nav store
const navStore = namespace("nav");

@Component
export default class NavigationDrawer extends Vue {
  @navStore.State("navbarVisible") navVisible;
  @navStore.Action("setNavbarVisibility") setNavbarVisibility;

  // Use computed properties to set navbar visibilty
  get navbarVisibility() {
    return this.navVisible;
  }
  set navbarVisibility(value) {
    this.setNavbarVisibility(value);
  }
}
</script>

<style></style>
