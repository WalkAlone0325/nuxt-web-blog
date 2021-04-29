<template>
  <div class="footer-page">
    <footer>
      <span>
        备案号：
        <a target="_block" href="http://www.beian.gov.cn/">
          晋ICP备19014217号
        </a>
      </span>
      <span>微信：loner-jsw</span>
      <span>独行的博客</span>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/css/variables';

.footer-page {
  width: 100%;
  margin-top: 30px;
  // position: fixed;
  // bottom: 0;
  background: $color-footer;
  footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60px;
    color: $color-white;
    a {
      color: $color-white;
      &:hover {
        color: $color-header;
      }
    }
  }
}
</style>
