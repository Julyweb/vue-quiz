import Vue from "vue";
import VueRouter from "vue-router";
import Start from "../pages/typeTest/Start.vue";
import Question from "../pages/typeTest/Question.vue";
import Result from "../pages/typeTest/Result.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

export default new VueRouter({
  base: "2020arena-type-test",
  mode: "history",
  routes: [
    { path: "/", component: Start, props: true },
    { path: "/question", component: Question },
    { path: "/result", redirect: "/" },
    { path: "/result/:type", component: Result, props: true },
    { path: "*", component: NotFound },
  ],
});
