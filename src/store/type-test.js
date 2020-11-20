import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    questions: [],
    numCorrect: 0,
    numTotal: 0,
    answers: {
        'I': 0,
        'E': 0,
        'S': 0,
        'N': 0,
        'T': 0,
        'F': 0,
        'J': 0,
        'P': 0,
    },
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
        state.answers = {
            'I': 0,
            'E': 0,
            'S': 0,
            'N': 0,
            'T': 0,
            'F': 0,
            'J': 0,
            'P': 0,
        }
    },
    ADD_ANSWER(state, payload) {
        state.answers[payload]++;
    },
};
const actions = {
    incrementNumCorrect({ commit }) {
        commit("UPDATE_NUM_CORRECT");
    },
    incrementNumTotal({ commit }) {
        commit("UPDATE_NUM_TOTAL");
    },
    resetDefault({ commit }) {
        commit("RESET_DEFAULT");
    },
};
const getters = {
    questions: state => state.questions,
    numCorrect: state => state.numCorrect,
    numTotal: state => state.numTotal,
    answers: state => state.answers,
    type: state => {
        let type = "";
        type += (state.answers['I'] > state.answers['E']) ? 'I' : 'E';
        type += (state.answers['S'] > state.answers['N']) ? 'S' : 'N';
        type += (state.answers['T'] > state.answers['F']) ? 'T' : 'F';
        type += (state.answers['J'] > state.answers['P']) ? 'J' : 'P';
        return type;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
