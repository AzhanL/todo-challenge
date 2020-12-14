<template>
   <div>
      <v-app-bar color="px-5" dense dark flat>
        <v-app-bar-nav-icon @click.stop="setNavbarVisibility(true)"></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
    </div>

</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { namespace } from "vuex-class";
const navStore = namespace("nav");

@Component
export default class AppBar extends Vue{
    @navStore.Action('setNavbarVisibility') setNavbarVisibility;
}
</script>