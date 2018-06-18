import Vue from "vue";
import Router from "vue-router";
import construction from "@/components/construction";
import Home from "@/components/Home";
import Designs from "@/components/Designs";
import Projects from "@/components/Projects";
import About from "@/components/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/designs",
      name: "Designs",
      component: Designs
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects
    },
    {
      path: "/construction",
      name: "construction",
      component: construction
    },
    {
      path: "/About",
      name: "About",
      component:About
    }
  ]
});
