import Vue from "vue";
import VueRouter from "vue-router";
import Start from "../pages/oxQuiz/Start.vue";
import Question from "../pages/oxQuiz/Question.vue";
import Result from "../pages/oxQuiz/Result.vue";
import NotFound from "../components/NotFound.vue";
import Certificate from "../pages/oxQuiz/Certificate";

Vue.use(VueRouter);

export default new VueRouter({
    base: "ox_quiz",
    mode: "history",
    routes: [
        {path: "/", component: Start, prop: true},
        {path: "/question", component: Question, prop: true},
        {path: "/result", component: Result, prop: true},
        {path: "/certificate", component: Certificate, prop: true},
        {path: "*", component: NotFound}
    ]
});
