<template>
  <nuxt-link custom to="/article/123">
    <div class="article-card">
      <img
        class="card-img"
        src="../assets/img/微信图片_20201028203827.jpg"
        alt=""
      />
      <div class="card-content">
        <h4 class="card-title">前端构建新玩法：Vite 上手与思考</h4>
        <div class="card-desc">
          Vite 的定义 Vite 是面向现代浏览器的一个更轻、更快的 Web
          应用开发工具，核心基于 ECMAScript …
        </div>
      </div>
      <div class="card-foot">
        <span>创建时间：2020-11-23</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
export default {
  name: 'ArticleCard',
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.article-card {
  width: 280px;
  height: 450px;
  margin-top: 30px;
  margin-right: 15px;
  margin-left: 15px;
  background: darkcyan;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    box-shadow: 0 0 15px #eee;
    transform: scale(1.04);
    transition: 0.4s;
  }
  .card-img {
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 4px 4px 0 0;
  }
  .card-content {
    color: #f8f9fa;
    margin: 15px;
    .card-title {
      font-size: 20px;
    }
    .card-desc {
      margin-top: 10px;
    }
  }
  .card-foot {
    color: #f8f9fa;
    margin: 10px;
  }
}
</style>
