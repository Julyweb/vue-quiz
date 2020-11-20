<template>
  <div class="home-container">
    <div class="content">
      <h3 class="title-set title-type-one">2020 서울시 아동참여정책박람회</h3>
      <h3 class="title-set title-type-two">아동을 위한 서울시 만들기</h3>
      <h3 class="title-set title-type-three title-effect">
        나는<br />
        어떤 정책가일까?
      </h3>
      <h3 class="title-set title-type-foure">아동권리참여 성향테스트</h3>
      <div class="buttons">
        <router-link class="button" to="question">START</router-link>
      </div>

      <div class="center_logo_img">
        <div class="goodneigbors_logo">
          <img src="../../assets/goodneighbors_logo.png" />
        </div>
        <div>
          <img src="../../assets/seoul_logo.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let image = require("../../assets/header_right_img.png");
export default {
  props: ["headerImage"],
  mounted() {
    this.$emit("update", {image: image, height: "200px"});
  },
  destroyed() {
    this.$emit("update", {image: "", height: "100px"});
  },
};
</script>

<style scoped>
h3 {
  margin: 0;
}

.content {
  padding: 0px 40px;
}

.title-set {
  width: 100%;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.5px;
  color: #282828;
}

.title-type-two {
  margin-top: 10px;
  font-size: 28px;
  font-weight: bold;
}

.title-type-three {
  margin-top: 40px;
  font-size: 48px;
  line-height: 1.2;
}

.title-type-foure {
  margin-top: 10px;
  margin-left: 3px;
  font-size: 28px;
  font-weight: bold;
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
  .title-set {
    font-size: 15px;
    margin-top: 10px;
  }
  .title-type-two {
    font-size: 18px;
    font-weight: bold;
  }

  .title-type-three {
    margin-top: 20px;
    font-size: 28px;
    line-height: 1.2;
  }

  .title-type-foure {
    font-size: 18px;
    font-weight: bold;
  }

  .buttons .button {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    border-radius: 40px;
    margin-top: 24px;
  }
  .center_logo_img {
    margin: 20px;
  }

  .center_logo_img div img {
    width: 70px;
  }
}
</style>
