<template>
    <div id="app">
        <section class="quiz-container">
            <div class="quiz-modal" :style="modalStyle">
                <div class="quiz-content">
                    <router-view :modalStyle="modalStyle" @modalStyleUpdate="modalStyleUpdate"></router-view>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modalStyle: {
                    'backgroundColor': '#fff',
                },
            };
        },
        mounted() {

        },
        methods: {
            modalStyleUpdate(styles) {
                this.modalStyle.backgroundColor = styles.backgroundColor
            }
        }
    }
</script>

<style lang="scss">
    $content-width: 500px;
    $content-height: 900px;
    $inner-height: $content-height - 350;

    @font-face {
        font-family: 'Shinhan Card L';
        src: url('../../assets/fonts/ShinhanCardL.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Shinhan Card M';
        src: url('../../assets/fonts/ShinhanCardM.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Shinhan Card B';
        src: url('../../assets/fonts/ShinhanCardB.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Recipekorea';
        src: url('../../assets/fonts/Recipekorea.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body {
        margin: 0;
    }

    .btn {
        font-family: 'Recipekorea';
        display: inline-block;
        border: 0;
        padding: 20px 40px 15px;
        margin: 0;
        background: #31e5ff;
        color: #003aba;
        font-size: 26px;
        cursor: pointer;
        text-align: center;
        transition: background 250ms ease-in-out, transform 150ms ease;
        -webkit-appearance: none;
        -moz-appearance: none;
        text-decoration: none;

        &.btn-primary {
            background-color: #6464CF;
            color: #fff;
        }

        &.btn-white {
            background-color: #fff;
            color: #6464CF;
        }

        &.btn-rounded {
            border-radius: 50px;
        }
    }

    .img-fluid {
        max-width: 100%;
        height: auto;
    }

    .color-white {
        color: #fff !important;
    }

    #app {
        height: 100%;
        background: #F7F6FB;
    }

    .quiz-container {
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .quiz-modal {
        position: relative;
        background: #fff;
        flex: 1 1 auto;
        border-radius: 80px;
        padding: 15px;
        margin: 100px 0 50px;
        max-width: $content-width;
        min-height: 800px;
        box-shadow: 2px 4px 50px 15px rgba(0, 0, 0, 0.05);
        text-align: center;

        &:after {
            content: '';
            position: absolute;
            top: -82px;
            right: 60px;
            width: 200px;
            height: 88px;
            background-image: url('../../assets/images/bear.png');
            background-size: 100%;
            background-repeat: no-repeat;
        }
    }

    .inner-content {
        min-height: $inner-height;
        border-radius: 80px;
        margin-bottom: 30px;
        overflow: hidden;
    }

    .primary-bg {
        background-color: #6464CF;
    }

    .pattern-bg {
        position: relative;
        margin-bottom: 60px;
        z-index: 10;

        &__content {
            position: relative;
            min-height: $inner-height - 40;
            border-radius: 80px;
            overflow: hidden;
            padding: 40px 20px;
            box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.05);
            background-color: #fff;
            background-image: url('../../assets/images/pattern.png');
            z-index: 100;
        }

        &__point {
            &:before {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 20px;
                display: block;
                width: $content-width - 100;
                height: $content-width - 100;
                margin: auto;
                border-radius: 70px;
                background: #E0E0F6;
                z-index: 2;
            }

            &:after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0px;
                display: block;
                width: $content-width - 200;
                height: $content-width - 200;
                margin: auto;
                border-radius: 70px;
                background: #B2B2E7;
                z-index: 1;
            }
        }
    }

    .progress {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 180px;

        &-bar {
            margin-left: auto;
            margin-right: auto;
        }
    }

    .quiz {
        &__content {
            margin-top: 20px;
            margin-bottom: 30px;
        }

        &__index {
            font-family: 'Shinhan Card M';
            margin-top: 0;
            margin-bottom: 80px;
            font-size: 40px;
            color: #6464CF
        }

        &__subject {
            font-family: 'Shinhan Card M';
            font-size: 30px;
            line-height: 1.5
        }

        &__text {
            font-family: 'Shinhan Card M';
            font-size: 30px;
            line-height: 1.5
        }

        &__answer {
            font-family: 'Shinhan Card B';
            font-size: 70px;
            color: #6464CF;
        }

        .time-out {
            font-family: 'Shinhan Card B';
            font-size: 40px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 60px;
        }

        &-answer {

        }
    }
</style>
