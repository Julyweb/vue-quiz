<template>
  <div class="progress">
    <div class="progress-bar">
      <div :style="barClass" class="bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: ["numCorrect", "numTotal", "totalCount"],
  computed: {
    barClass() {
      let style = "bar";
      let widthPercent = (this.numTotal / this.totalCount) * 100;
      style = `width:${widthPercent}%`;
      return style;
    }
  }
};
</script>

<style scoped>
.progress {
  display: flex;
  align-items: center;
  background: none !important;
}

.progress-bar {
  display: inline-block;
  width: 60%;
  background-color: rgba(221, 221, 221, 0.3);
  border-radius: 20px;
}

.bar {
  width: 1%;
  height: 6px;
  background-color: #F6A830;
  border-radius: 20px;
  transition: all 0.3s;
}

.progress p {
  display: inline-block;
  font-size: 0.8em;
  font-weight: lighter;
  margin-left: 10px;
}
</style>
