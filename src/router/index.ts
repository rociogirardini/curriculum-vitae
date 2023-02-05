import { createRouter, createWebHistory } from "vue-router";
import SummaryView from "../views/SummaryView.vue";
import CoverLetterView from "../views/CoverLetterView.vue";
import WorkView from "../views/WorkView.vue";
import StudiesView from "../views/StudiesView.vue";
import ProgrammingView from "../views/ProgrammingView.vue";
import LanguagesView from "../views/LanguagesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: SummaryView,
    },
    {
      path: "/cover-letter",
      name: "cover-letter",
      component: CoverLetterView,
    },
    {
      path: "/work-experience",
      name: "work-experience",
      component: WorkView,
    },
    {
      path: "/school-background",
      name: "school-background",
      component: StudiesView,
    },
    {
      path: "/programming",
      name: "programming",
      component: ProgrammingView,
    },
    {
      path: "/languages",
      name: "languages",
      component: LanguagesView,
    },
  ],
});

export default router;
