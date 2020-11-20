<template>
  <div class="progress">
    <div class="progress-bar">
      <div :style="barClass" class="bar">
        <div class="progress_tag">
          <p>{{ numCorrect }} / {{ totalCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from "../../components/Progress.vue";
export default {
  mixins: [Progress],
};
</script>

<style scoped>
.progress {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  margin-bottom: 20px;
  background: none !important;
  overflow: inherit;
}

.progress-bar {
  display: block;
  box-shadow: 0px 4px 6px 0 rgba(0, 0, 0, 0.18);
  width: 100%;
  height: 8px;
  background-color: #f0f2fb;
  border-radius: 20px;
  overflow: inherit;
}

.bar {
  position: relative;
  height: 8px;
  background-color: #4169f1;
  border-radius: 20px;
  transition: all 0.3s;
}

.progress_tag {
  position: absolute;
  right: -30px;
}

.progress p {
  position: relative;
  top: 20px;
  width: 60px;
  height: 28px;
  border-radius: 4px;
  line-height: 26px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin: 0px;
  background: #12182f;
  color: #fff;
  box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.4);
}

.progress p:after {
  border-top: 0px solid transparent;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #12182f;
  content: "";
  position: absolute;
  top: -6px;
  left: 26px;
}
</style>
