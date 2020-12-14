<template>
  <v-app>
    <NavigationDrawer />
    <AppBar />

    <v-main>
      <router-view />
    </v-main>

    <v-footer></v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SampleComponent from "./components/SampleComponent.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";
import AppBar from "@/components/AppBar.vue";
export default Vue.extend({
  name: "App",
  components: {
    NavigationDrawer,
    AppBar
  },
});
</script>
