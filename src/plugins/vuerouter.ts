import Vue from "vue";
import VueRouter from "vue-router";
import InboxPage from "@/pages/Inbox.vue";
import CompletedPage from "@/pages/Completed.vue";
import IncompletedPage from "@/pages/Incomplete.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/inbox", component: InboxPage },
  { path: "*", component: InboxPage },
];

// Create new vue router
export default new VueRouter({
  routes,
});
