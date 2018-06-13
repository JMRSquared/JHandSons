import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Home from "@/components/Home";
import Designs from "@/components/Designs";
import Projects from "@/components/Projects";

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
      path: "/hellow",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});
