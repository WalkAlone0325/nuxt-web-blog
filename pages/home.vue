<template>
  <div class="home-page">
    <div class="content-box">
      <div class="content-desc">
        <h2>2021 年 重新起航</h2>
        <div>再见 2020，你好 202。</div>
        <div>2021 一切归零，重新起航。</div>
        <div>即便是诸多不顺，但是我相信一切终将安好，归于平静。</div>
        <span class="content-btn" @click="$router.push('/about')">
          继续阅读→
        </span>
      </div>
      <div class="content-img">
        <img src="~/assets/img/微信图片_20201028203827.jpg" alt="" />
      </div>
    </div>
    <ArticleComp />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import ArticleComp from '~/components/ArticleComp.vue'

export default defineComponent({
  name: 'Home',
  components: { ArticleComp },
  setup() {},
})
</script>

<style lang="scss" scoped>
.home-page {
  .content-box {
    width: 100%;
    height: calc(100vh - 64px);
    background: #f1f3f5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .content-desc {
      letter-spacing: 2px;
      line-height: 60px;
      h2 {
        font-size: 30px;
      }
      div {
        font-size: 18px;
      }
      .content-btn {
        padding: 10px;
        cursor: pointer;
        border-radius: 4px;
        font-weight: 500;
        color: darkorange;
        &:hover {
          color: #fff;
          background: darkcyan;
          transition: 0.3s;
        }
      }
    }
    .content-img {
      padding: 10px;
      background: #fff;
      border-radius: 8px;
      // border: mediumblue 1px solid;
      box-shadow: 0px 0px 10px #cacbcd;
    }
  }
}
</style>
