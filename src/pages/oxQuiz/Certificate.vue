<template>
    <div>
        <div class="inner-content primary-bg">
            <div class="certificate">
                <div class="certificate__content">
                    <h4 class="certificate__title color-white">아동정책참여권리 지킴이 인증서</h4>
                    <h2 class="certificate__name color-white">테스트</h2>
                    <p class="certificate__text color-white">위 아동은 ‘서울시 아동친화도시조성사업’에
                        대해 올바르게 이해하고, 아동의 참여권 증진과 정책 참여에 참여하여 우수한 성정을 거두었으므로
                        이에 ‘아동 정책 참여 권리 지킴이’ 인증서를 수여합니다.</p>
                </div>

                <div class="certificate__partner">
                    <img src="../../assets/images/partner_logo_v.png" alt="">
                </div>
            </div>
        </div>

        <div class="certificate__good">
            <img src="../../assets/images/icon-good.png" alt="">
        </div>

        <div class="buttons">
            <a class="btn btn-primary btn-rounded">출력하기</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Certificate",
        props: {
            Certificates: Array
        }
    }
</script>

<style scoped lang="scss">
    @import url(//fonts.googleapis.com/earlyaccess/nanummyeongjo.css);

    .certificate {
        position: relative;
        padding-bottom: 80px;
        &__content {
            margin-top: 20px;
            padding: 30px;
        }

        &__title {
            font-family: 'Nanum Myeongjo', serif;
            margin-top: 30px;
            margin-bottom: 20px;
            font-size: 30px;
            letter-spacing: -1px;
            color: #6464CF
        }

        &__name {
            font-family: 'Nanum Myeongjo', serif;
            font-size: 60px;
            margin: 20px 0;
            line-height: 1.5;
            letter-spacing: 12px
        }

        &__text {
            font-family: 'Shinhan Card M';
            font-size: 30px;
            text-align: left;
            line-height: 1.5
        }

        &__partner {
            padding: 0 30px;
            text-align: right;
        }

        &__good {
            position: absolute;
            bottom: 70px;
            left: 0;

            > img {
                width: 200px;
            }
        }
    }
</style>
