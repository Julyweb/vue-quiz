<template>
    <div>
        <div class="inner-content primary-bg">
            <div class="quiz-results">
                <p class="quiz__index color-white">
                    {{score}}점 (총 100점)을<br> 획득하였습니다.
                </p>

                <div v-if="score >= 80">
                    <h2 class="quiz__subject color-white">참 잘했어요. 당신을 안전 지킴이로 임명합니다.</h2>
                    <p class="quiz__text color-white">아동권리지킴이 인증서 버튼을 클릭하시면 인증서를 출력하실 수 있습니다.</p>

                </div>
                <div v-else>
                    <h2 class="quiz__text color-white">안타깝네요. 점수가 부족합니다.</h2>
                    <p class="quiz__text color-white">아래 버튼을 통해 다시 한번 문제를 풀어주세요!</p>
                </div>
            </div>
        </div>

        <div v-if="score >= 80">
            <div class="buttons">
                <router-link class="btn btn-primary btn-rounded" to="/certificate">아동권리지킴이 인증서 출력하기</router-link>
            </div>
        </div>
        <div v-else>
            <div class="buttons">
                <router-link class="btn btn-primary btn-rounded" to="/" :score="score">A G A I N</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                showCertificate: false
            }
        },
        computed: {
            ...mapGetters(["numCorrect", "numTotal"]),
            score() {
                return (this.numCorrect === 0) ? 0 : (this.numCorrect / this.numTotal) * 100
            },
        },
        mounted() {

        },
        methods: {}
    };
</script>

<style scoped>
    .quiz-results {
        margin: 40px 0;
        padding: 30px;
    }
</style>
