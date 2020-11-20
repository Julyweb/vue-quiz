<template>
    <div>
        <ul v-if="wrongAnswers.length">
            <li v-for="(question, index) in wrongAnswers" :key="index" class="answers">
                <p v-html="question.question"></p>
                <p v-html="question.explanation"></p>
                <h1 v-if="question.answer">o</h1>
                <h1 v-else>x</h1>
            </li>
        </ul>
        <div v-else>
            모든 문제를 맞추셨습니다!
        </div>
    </div>
</template>

<script>
    export default {
        name: "WrongAnswer",
        props: {
            wrongAnswers: Array
        }
    }
</script>

<style scoped>

</style>
