<template>
  <div class="article-page">
    <div class="banner-container">
      <!-- <img src="~/assets/img/20170917.jpg" alt="banner" /> -->
      <div class="info">
        <h2>独行</h2>
        <span>平时记录的笔记和文章</span>
      </div>
    </div>
    <div class="content-container">
      <div class="article-list-container">
        <ArticleCard v-for="i in 8" :key="i" />
      </div>
      <div class="article-tag">123</div>
    </div>
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue'

export default {
  name: 'Article',
  components: { ArticleCard },
}
</script>

<style lang="scss" scoped>
.article-page {
  .banner-container {
    width: 100%;
    height: 300px;
    background: url('~/assets/img/20170917.jpg') no-repeat;
    background-size: cover;
    background-position: center center;

    .info {
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  .content-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .article-list-container {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
    }
    .article-tag {
      width: 300px;
      height: 500px;
      margin-top: 50px;
      background-color: aquamarine;
    }
  }
}
</style>
