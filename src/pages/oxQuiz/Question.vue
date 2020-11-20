<template>
    <div>
        <div v-if="questions.length">
            <template v-if="!submitted">
                <div class="inner-content pattern-bg">
                    <div class="pattern-bg__point"></div>
                    <div class="pattern-bg__content">
                        <div class="quiz">
                            <div class="quiz__content">
                                <h3 class="quiz__index">{{ index + 1 }}번 문제</h3>
                                <p class="quiz__subject" v-html="currentQuestion.question"></p>
                            </div>

                            <countdown v-if="counting" :time="time" ref="countdown" @end="handleCountdownEnd"
                                       class="time-out">
                                <template slot-scope="props">{{ props.totalSeconds }}</template>
                            </countdown>
                        </div>
                    </div>
                </div>

                <Progress :numTotal="numTotal" :numCorrect="numCorrect" :totalCount="this.questionCount"></Progress>

                <div class="answers">
                    <div @click="submitAnswer(true)"
                         class="answer answer-yes">O
                    </div>
                    <div @click="submitAnswer(false)"
                         class="answer answer-no">X
                    </div>
                </div>

            </template>
            <template v-else>
                <div class="inner-content pattern-bg">
                    <div class="quiz-result">
                        <div class="pattern-bg__point"></div>
                        <div class="pattern-bg__content">
                            <h1 class="quiz__index" v-if="this.selectedAnswer === currentQuestion.answer">정답입니다.</h1>
                            <h1 class="quiz__index" v-else>틀렸습니다.</h1>
                            <p class="quiz__text" v-html="currentQuestion.explanation"></p>
                            <h1 class="quiz__answer" v-if="currentQuestion.answer">o</h1>
                            <h1 class="quiz__answer" v-else>x</h1>
                        </div>
                    </div>
                </div>
                <div class="buttons">
                    <button class="btn btn-white btn-rounded" @click="nextQuestion">N E X T</button>
                </div>
            </template>

        </div>
    </div>
</template>

<script>
    import Progress from "../../components/Progress.vue";
    import {mapGetters} from "vuex";
    import Questions from "../../questions/ox-questions";

    const MILLISECONDS_SECOND = 1000;

    export default {
        name: "Question",
        components: {Progress},
        props: {
            difficulty: String,
            modalStyle: Object
        },
        data() {
            return {
                questions: [],
                index: 0,
                selectedAnswer: null,
                shuffledAnswers: [],
                submitted: false,
                time: MILLISECONDS_SECOND * 30,
                counting: false,
            };
        },
        mounted() {
            this.$emit('modalStyleUpdate', {'backgroundColor': '#6464CF'});
            this.questions = Questions;
            this.$store.dispatch("resetDefault");
            this.startCountdown();
        },
        destroyed() {
            this.$emit('modalStyleUpdate', {'backgroundColor': '#FFF'});
        },
        computed: {
            questionCount() {
                return this.questions.length;
            },
            currentQuestion() {
                return this.questions[this.index];
            },
            ...mapGetters(["numTotal", "numCorrect"])
        },
        watch: {
            currentQuestion: {
                immediate: true,
                handler() {
                    if (this.questions.length) {
                        this.selectedAnswer = null;
                        this.submitted = false;
                    }
                }
            }
        },
        methods: {
            increment(isCorrect) {
                if (isCorrect) {
                    this.$store.dispatch("incrementNumCorrect");
                }
                this.$store.dispatch("incrementNumTotal");
            },
            next() {
                this.index++;
                this.startCountdown();
            },
            submitAnswer(answer) {
                let isCorrect = false;

                if (this.currentQuestion.answer === answer) {
                    isCorrect = true;
                } else {
                    this.$store.commit("ADD_WRONG_ANSWER", this.currentQuestion);
                }
                this.selectedAnswer = answer;
                this.submitted = true;

                this.increment(isCorrect);
            },
            nextQuestion() {
                if (this.index < this.questionCount - 1) {
                    this.next();
                } else {
                    this.$router.push("/result");
                }
            },
            startCountdown: function () {
                this.counting = true;
            },
            handleCountdownEnd: function () {
                this.counting = false;
                this.submitAnswer();
            },
        }
    };
</script>

<style scoped lang="scss">
    .answer {
        font-family: 'Shinhan Card B';
        position: absolute;
        bottom: 20px;
        font-size: 80px;
        line-height: 130px;
        color: #6464CF;
        background: #fff;
        width: 130px;
        height: 130px;
        border-radius: 50%;

        &-yes {
            left: 20px;
            background: #FFD200;
        }

        &-no {
            right: 20px;
        }
    }
</style>
