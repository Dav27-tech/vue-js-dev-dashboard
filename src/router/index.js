// Import the View.js router
import { createRouter, createWebHashHistory } from "vue-router";
// Import the pages
import DashboardView from "../pages/DashboardView.vue";
import ProjectView from "../pages/ProjectView.vue";
import SkillsView from "../pages/SkillsView.vue";

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      component: DashboardView,
    },
    {
      path: "/projects",
      component: ProjectView,
    },
    {
      path: "/skills",
      component: SkillsView,
    },
  ],
});

export default router;
