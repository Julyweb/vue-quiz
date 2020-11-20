<template>
    <div id="app">
        <section class="quiz-container">
            <div class="quiz-modal">
                <div class="header" :style="headerStyle">
                    <img src="../../assets/menu_icon.png"/>
                </div>
                <div class="quiz-content">
                    <router-view
                            :headerImage="headerImage"
                            @update="headerImageUpdate"
                    ></router-view>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                headerStyle: {
                    background: "",
                    height: "100px",
                },
                headerImage: "",
            };
        },
        methods: {
            headerImageUpdate(data) {
                this.headerImage = data.image;
                this.headerStyle.height = data.height;
            },
        },
        watch: {
            headerImage() {
                this.headerStyle.backgroundImage = "url('" + this.headerImage + "')";
            },
        },
    };
</script>

<style lang="scss">
    @mixin default-font-family {
        font-family: "AppleSDGothicNeo", "Noto Sans KR", "NanumGothic", sans-serif;
    }

    .title-effect {
        font-family: "TmonMonsori";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/TmonMonsori.woff") format("woff");
        font-weight: normal;
        font-style: normal;
    }

    #app {
        background: #e8e9f5;
        height: 100%;
        color: #333;
        line-height: 1.7;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: -0.02em;
        @include default-font-family;
    }

    .header {
        width: 100%;
        background-repeat: no-repeat;
        background-position-y: -10px;
        background-position-x: 310px;
        background-size: 184px;
        border-radius: 40px;

        img {
            padding: 40px;
        }
    }

    button {
        border: 0;
        padding: 20px;
        margin-bottom: 20px;
        @include default-font-family;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        border-radius: 40px;
        cursor: pointer;
        text-align: center;
        color: #fff;
        background: #008fde;
        transition: background 250ms ease-in-out, transform 150ms ease;
        -webkit-appearance: none;
        -moz-appearance: none;

        &.btn-block {
            display: block;
            width: 100%;
        }

        &:hover {
            background: #ffae00;
        }
    }

    .quiz-container {
        padding: 40px;
    }

    .quiz-modal {
        display: flex;
        flex-direction: column;
        max-width: 480px;
        min-height: 920px;
        margin: 0 auto;
        border-radius: 40px;
        background-color: #ffffff;
        box-shadow: 0px 11px 54px 0 rgba(0, 0, 0, 0.1);
        background-image: url("../../assets/main_bottome_bg.png");
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: 480px;
    }

    .content {
        position: relative;
        overflow: hidden;
        margin-bottom: 20px;
    }

    @media (max-width: 800px) {
        .quiz-modal {
            height: 600px;
            background-image: url("../../assets/main_bottome_bg.png");
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: 280px;
        }

        .header {
            height: 148px;
            background-position-y: -10px;
            background-position-x: 160px;
            background-size: 120px;
            border-radius: 40px;

            img {
                width: 20px;
            }
        }
    }
</style>
