import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Guide from "../views/About/Guide.vue";
import Reference from "../views/About/Reference.vue";
import Changelog from "../views/About/Changelog.vue";
import GitHub from "../views/About/GitHub.vue";
import AboutHome from "../views/About/index.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    children:[
      {
        path: "/",
        compoment: AboutHome,
      },
      {
        path: "guide",
        compoment: Guide,
      },
      {
        path: "reference",
        compoment: Reference,
      },
      {
        path: "changelog",
        compoment: Changelog,
      },
      {
        path: "gitHub",
        compoment: GitHub,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
