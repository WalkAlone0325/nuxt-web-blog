<template>
  <div class="about-page">
    <h1 class="l-title">关于我</h1>
    <div class="l-img">
      <img src="~/assets/img/20170909.jpg" alt="titleimg" />
    </div>
    <div class="about-content">
      <p>我是独行</p>
      <p>一个普普通通的程序员</p>
      <p>喜欢编程。蛮有成就感</p>
      <span>
        github:
        <a target="_blank" href="https://www.github.com/WalkAlone0325">
          WalkAlone0325
        </a>
      </span>
      <span> 微信: <span>loner-jsw</span> </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.about-page {
  width: 80%;
  margin: 0 auto;
  .l-title {
    text-align: center;
  }
  .l-img {
    width: 80%;
    height: 500px;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  .about-content {
    width: 50%;
    margin: 0 auto;
    font-size: 20px;
    p {
      padding: 10px 0;
    }
    span {
      padding-top: 20px;
      margin: 20px 20px 10px 0;
    }
  }
}
</style>
