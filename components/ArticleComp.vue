<template>
  <div class="article-comp">
    <div class="article-header">
      <h3 class="article-title">近期文章</h3>
      <span class="article-desc">留住生活中的点点滴滴，贵在记录和分享</span>
    </div>
    <div class="article-list">
      <ArticleCard v-for="i in 8" :key="i" />
    </div>
  </div>
</template>

<script lang="ts">
import ArticleCard from './ArticleCard.vue'

export default {
  name: 'ArticleComp',
  components: {
    ArticleCard,
  },
}
</script>

<style lang="scss" scoped>
.article-comp {
  width: 100%;
  .article-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    .article-title {
      font-size: 40px;
      font-weight: normal;
    }
    .article-desc {
      font-size: 18px;
      color: #877a82;
    }
  }
  .article-list {
    width: 80%;
    margin: 0 auto;
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
