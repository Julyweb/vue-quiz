import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
    questions: [],
    numCorrect: 0,
    numTotal: 0,
    wrongAnswers: [],
};
const mutations = {
    UPDATE_QUESTIONS(state, payload) {
        state.questions = payload;
    },
    UPDATE_NUM_CORRECT(state) {
        state.numCorrect++;
    },
    UPDATE_NUM_TOTAL(state) {
        state.numTotal++;
    },
    RESET_DEFAULT(state) {
        state.numTotal = 0;
        state.numCorrect = 0;
    },
    ADD_WRONG_ANSWER(state, payload) {
        state.wrongAnswers.push(payload);
    },
};
const actions = {
    getQuestions({commit}, level) {
        return axios
            .get(
                `https://opentdb.com/api.php?amount=10&category=18&type=multiple&difficulty=${level}`
            )
            .then(reponse => {
                commit("UPDATE_QUESTIONS", reponse.data.results);
            });
    },
    incrementNumCorrect({commit}) {
        commit("UPDATE_NUM_CORRECT");
    },
    incrementNumTotal({commit}) {
        commit("UPDATE_NUM_TOTAL");
    },
    resetDefault({commit}) {
        commit("RESET_DEFAULT");
    },
    userGroupUpdate({commit}, score) {
        return axios
            .post(
                `http://childmakepolicy.com/ox_quiz/user-group-update`,
                score
            )
            .then(reponse => {
                commit("UPDATE_QUESTIONS", reponse.data.results);
            });
    }
};
const getters = {
    questions: state => state.questions,
    numCorrect: state => state.numCorrect,
    numTotal: state => state.numTotal,
    wrongAnswers: state => state.wrongAnswers,
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
