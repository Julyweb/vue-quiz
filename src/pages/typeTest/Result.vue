<template>
  <div>
    <div class="result-container">
      <div v-if="currentType" class="content">
        <h4 class="question_title title-effect">
          <span>나의 아동권리참여 성향은</span>
          <h2>{{ currentType.type_summary }}</h2>
        </h4>
        <img :src="imageSrc" :alt="currentType.type" />
        <h4 class="feature">{{ currentType.feature }}</h4>
        <p class="comment">{{ currentType.comment }}</p>
        <div class="buttons">
          <router-link class="button" to="/">테스트 다시하기</router-link>
        </div>

        <div class="icon_content">
          <div class="box">
            <a href="javascript:;" class="share-item" :data-url="pageShareUrl" data-type="copy"><img src="../../assets/lingk_icon.png"/></a>
          </div>
          <div class="box">
            <a href="javascript:;" class="share-item" :data-url="facebookShareUrl"><img src="../../assets/facebook_icon.png"/></a>
          </div>
          <div class="box">
            <a href="javascript:;" id="kakao-link-btn"><img src="../../assets/kakao_icon.png"/></a>
          </div>
          <div class="box">
            <a href="javascript:;" class="share-item" :data-url="twitterShareUrl"><img src="../../assets/twiter_icon.png"/></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import types from "../../resource/types";

export default {
  props: ["type"],
  data() {
    return {
      types: types,
      showWrongAnswer: false,
    };
  },
  computed: {
    ...mapGetters(["numCorrect", "numTotal", "answers"]),
    score() {
      return this.numCorrect === 0
        ? 0
        : (this.numCorrect / this.numTotal) * 100;
    },
    currentType() {
      return this.types.find((item) => {
        return item.type.toUpperCase() === this.type.toUpperCase();
      });
    },
    imageSrc() {
      return "../../assets/character_" + this.type.toLowerCase() + ".png";
    },
    pageShareUrl() {
      return 'http://childmakepolicy.com/2020arena-type-test/result/' + this.type;
    },
    facebookShareUrl() {
      return 'http://www.facebook.com/sharer/sharer.php?u=' + this.pageShareUrl;
    },
    twitterShareUrl() {
      return 'https://twitter.com/intent/tweet?url=' + this.pageShareUrl;
    }
  },
  mounted() {
    if (!this.currentType) {
      this.$router.push("/");
    }

    this.kaKaoShare();
  },
  methods: {
    kaKaoShare() {
      //<![CDATA[
      // // 사용할 앱의 JavaScript 키를 설정해 주세요.
      Kakao.init('dd65d559707ccface7ff6ae16ad0fabe');
      // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
      Kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',  // 컨테이너는 아까 위에 버튼이 쓰여진 부분 id
        objectType: 'feed',
        content: {  // 여기부터 실제 내용이 들어갑니다.
          title: '아동권리참여 성향테스트 결과', // 본문 제목
          description: '#아동 #아동정책 #아동참여 #아동참여아레나 #아동권리 #성향테스트 #아동권리참여성향테스트 #MBTI',  // 본문 바로 아래 들어가는 영역?
          imageUrl: 'http://childmakepolicy.com/plugins/petitions/src/themes/petition/assets/images/logo_thumbnail.png', // 이미지
          link: {
            mobileWebUrl: this.pageShareUrl,
            webUrl: this.pageShareUrl
          }
        },
      });
      //]]>
    }
  },
};
</script>

<style scoped>
.result-container {
  padding: 40px;
}

.question_title {
  font-size: 24px;
  line-height: 1.2;
  margin: 0 0 32px 0;
}

.question_title span {
}

.question_title h2 {
  font-size: 28px;
  font-weight: normal;
  margin: 10px 0 0 1px;
}
.feature {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.04em;
  margin: 20px 0 0 0;
}
.comment {
  color: #282828;
  margin: 10px 0;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
}

.result-container p span {
  font-weight: bolder;
}

.buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: none !important;
  justify-content: center;
  align-items: center;
}

.buttons .button {
  margin-top: 40px;
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-decoration: none;
  text-align: center;
  color: #fff;
  background-color: #082a5a;
  font-size: 24px;
  border-radius: 40px;
}

.button:hover {
  background: #a7aac9;
}

.icon_content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
}
.icon_content .box {
  text-align: center;
  padding: 8px;
  line-height: 1;
}

.icon_content .box img {
  width: 48px;
}
</style>
