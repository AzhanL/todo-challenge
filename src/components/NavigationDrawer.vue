<template>
  <v-navigation-drawer app v-model="navbarVisibility" temporary>
    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        @click="navigatePage(item.link)"
      >
        <v-list-item-icon>
          <v-icon :color="item.color">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "@/plugins/vuex";
import { namespace } from "vuex-class";
import { mdiInboxOutline } from "@mdi/js";

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

  // Navigation items
  items = [
    {
      title: "Inbox",
      icon: mdiInboxOutline, // inbox-outline not in @mdi/js
      color: "blue darken-1",
      link: "/inbox",
    },
    {
      title: "Today",
      icon: "mdi-calendar-outline",
      color: "green",
      link: "/today",
    },
    {
      title: "Upcoming",
      icon: "mdi-calendar-month-outline",
      color: "purple",
      link: "/upcoming",
    },
  ];

  /**
   * Navigate to different page; router-link messes up styling
   */
  navigatePage(page: string) {
    this.$router.push(page);
  }
}
</script>

<style></style>
