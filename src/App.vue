<template>
  <v-app>
    <NavigationDrawer />
    <AppBar />

    <v-main>
      <v-container class="main-content">
        <router-view />
      </v-container>
    </v-main>

    <v-footer></v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";
import AppBar from "@/components/AppBar.vue";
export default Vue.extend({
  name: "App",
  components: {
    NavigationDrawer,
    AppBar,
  },
});
</script>

<style lang="sass" scoped>
.main-content 
  max-width: 810px

</style>
