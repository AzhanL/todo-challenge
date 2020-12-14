import Vue from "vue";
import VueRouter from "vue-router";
import InboxPage from "@/pages/Inbox.vue";
import TodayPage from "@/pages/Today.vue";
import UpcomingPage from "@/pages/Upcoming.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/inbox", component: InboxPage },
  { path: "/today", component: TodayPage },
  { path: "/upcoming", component: UpcomingPage },
];

// Create new vue router
export default new VueRouter({
  routes,
});
