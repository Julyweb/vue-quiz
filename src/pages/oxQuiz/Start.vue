<template>
    <div class="home-container">
        <img src="../../assets/images/ox_quiz_banner.png" alt="" class="img-fluid">
        <div class="quiz-start">
            <h4 class="quiz-start__subtitle">아동 정책 참여 권리 지킴이</h4>
            <h3 class="quiz-start__title"><span>OX</span>퀴즈</h3>
        </div>

        <div class="buttons">
            <router-link class="btn btn-primary btn-rounded" to="question">S T A R T</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .home-container {
        margin-bottom: 30px;
    }

    .quiz-start {
        margin: 50px 0 30px;

        &__title {
            font-family: 'Shinhan Card L';
            font-size: 70px;
            margin: 0;

            > span {
                font-family: 'Shinhan Card B';
                font-size: 76px
            }
        }

        &__subtitle {
            font-family: 'Shinhan Card L';
            font-size: 25px;
            margin: 0;
        }
    }

</style>
