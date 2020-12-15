<template>
   <div>
      <v-app-bar class="px-5" dense flat>
        <v-app-bar-nav-icon @click.stop="setNavbarVisibility(true)"></v-app-bar-nav-icon>

        <v-toolbar-title>Todoer</v-toolbar-title>

        <v-spacer></v-spacer>

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