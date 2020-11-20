<template>
  <div class="container">
    <div v-if="questions.length">
      <h3 class="question_title title-effect">
        나는 어떤 정책가일까?
      </h3>

      <Progress
        :numTotal="numTotal"
        :numCorrect="index + 1"
        :totalCount="questionCount"
      ></Progress>

      <div class="quiz content">
        <!-- <h2 v-html="questionNumberTitle"></h2> -->

        <p class="subject" v-html="currentQuestion.question"></p>
        <div class="answers">
          <button
            v-for="(answer, index) in currentQuestion.answer"
            :key="index"
            @click="submitAnswer(index)"
            class="answer btn-block"
          >
            {{ answer.subject }}
          </button>
        </div>
        <div class="center_logo_img">
          <div>
            <img src="../../assets/goodneighbors_logo.png" />
          </div>
          <div>
            <img src="../../assets/seoul_logo.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from "./Progress.vue";
import {mapGetters} from "vuex";
import Questions from "../../questions/mbti-questions";

const MILLISECONDS_SECOND = 1000;

export default {
  name: "Question",
  components: {Progress},
  data() {
    return {
      index: 0,
      selectedAnswer: null,
      shuffledAnswers: [],
      submitted: false,
      time: MILLISECONDS_SECOND * 30,
      counting: false,
    };
  },
  mounted() {
    this.$store.commit("UPDATE_QUESTIONS", Questions);
    this.$store.dispatch("resetDefault");
  },
  computed: {
    questionCount() {
      return this.questions.length;
    },
    currentQuestion() {
      return this.questions[this.index];
    },
    questionNumberTitle() {
      return "Q" + (this.index + 1);
    },
    ...mapGetters(["questions", "numTotal", "numCorrect"]),
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        if (this.questions.length) {
          this.selectedAnswer = null;
          this.submitted = false;
        }
      },
    },
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
    },
    submitAnswer(answer) {
      let isCorrect = true;

      this.$store.commit(
        "ADD_ANSWER",
        this.currentQuestion.answer[answer].point
      );

      this.selectedAnswer = answer;
      this.submitted = true;

      this.increment(isCorrect);
      this.nextQuestion();
    },
    nextQuestion() {
      if (this.index < this.questionCount - 1) {
        this.next();
      } else {
        this.$router.push("/result/" + this.$store.getters.type);
      }
    },
  },
};
</script>

<style>
.subject {
  font-size: 24px;
  margin: 0px 0px 48px 0px;
}

.subject .subject-bold {
  display: block;
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: -0.7px;
  color: #282828;
}
</style>

<style scoped>
.container {
  padding: 40px;
}

.question_title {
  font-size: 36px;
  text-align: center;
  line-height: 1;
  margin: 0px 0px 32px 0px;
}

.center_logo_img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}

.center_logo_img div {
  height: auto;
  padding: 0 10px;
}
.goodneigbors_logo {
  margin-top: 4px;
}

@media (max-width: 800px) {
  .center_logo_img {
    margin: 20px;
  }

  .center_logo_img div img {
    width: 70px;
  }
}
</style>
