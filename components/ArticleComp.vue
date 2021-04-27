<template>
  <div class="article-comp">
    <div class="article-header">
      <h3 class="article-title">近期文章</h3>
      <span class="article-desc">留住生活中的点点滴滴，贵在记录和分享</span>
    </div>
    <div class="article-list">
      <Loading v-if="!articleList.length" />
      <ArticleCard
        v-for="item in articleList"
        v-else
        :key="item._id"
        :item="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, Ref, useContext } from '@nuxtjs/composition-api'
import ArticleCard from './ArticleCard.vue'
import Loading from './Loading.vue'

export default {
  name: 'ArticleComp',
  components: {
    ArticleCard,
    Loading,
  },
  setup() {
    const articleList: Ref = ref([])
    const page = ref(1)
    const size = ref(10)
    const { $axios } = useContext()
    // 获取文章列表
    const getArticle = async () => {
      const res = await $axios.get('article', {
        params: {
          page: page.value,
          size: size.value,
        },
      })
      res.data.article.forEach((val: any) => {
        articleList.value = [...articleList.value, val]
      })
    }
    onMounted(() => {
      getArticle()
    })

    return { articleList }
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
