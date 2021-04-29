<template>
  <div class="article-page">
    <div class="banner-container">
      <!-- <img src="~/assets/img/20170917.jpg" alt="banner" /> -->
      <div class="info">
        <h2 style="font-size: 28px; color: #fff">独行</h2>
        <span style="margin-top: 20px; color: #fff">平时记录的笔记和文章</span>
      </div>
    </div>
    <div class="content-container">
      <div class="article-list-container">
        <Loading v-if="!articleList.length" />
        <ArticleCard
          v-for="item in articleList"
          v-else
          :key="item._id"
          :item="item"
        />
      </div>
      <div class="article-tag">
        <TagSide
          :total="total"
          :tags-list="newTagsList"
          @searchTag="searchTag"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ArticleCard from '@/components/ArticleCard.vue'
import Loading from '@/components/Loading.vue'
import TagSide from '@/components/TagSide.vue'
import {
  onBeforeUnmount,
  onMounted,
  Ref,
  ref,
  useContext,
} from '@nuxtjs/composition-api'
import { Article, TagList } from '~/types'

export default {
  name: 'Article',
  components: { ArticleCard, TagSide, Loading },
  setup() {
    const newTagsList = ref([]) as Ref<TagList[]>
    const articleList = ref([]) as Ref<Article[]>
    const hasMore = ref(false)
    const total = ref(0)
    const tag = ref('')
    const page = ref(1)
    const size = ref(8)
    const isRefreshBool = ref(false)

    const { $axios } = useContext()

    const searchTag = (val: string) => {
      tag.value = val
      page.value = 1
      articleList.value = []
      getArticle()
    }

    // 获取文章列表
    const getArticle = async () => {
      const res = await $axios.get('article', {
        params: {
          tag: tag.value,
          page: page.value,
          size: size.value,
        },
      })
      articleList.value = articleList.value.concat(res.data.article)

      // console.log(articleList.value)
      total.value = res.data.total
      hasMore.value = res.data.hasMore
      page.value += 1
      isRefreshBool.value = true
    }

    const getTag = async () => {
      const res = await $axios.get('tag')
      // 处理数据，将两个数组合并并加入标签的文章数
      const tagsList = res.data.data.tag_lists
      const numList = res.data.data.num_list
      tagsList.forEach((item: TagList) => {
        const temp = numList.find((i: any) => {
          return i._id === item._id
        })
        item.numList = temp == null ? 0 : temp.count
      })
      res.data = tagsList.sort((a: TagList, b: TagList) => {
        return a.numList - b.numList
      })
      newTagsList.value = tagsList
    }

    // 判断滚动条是否到底部，请求新的数据
    const isRefresh = () => {
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight是可视区的高度
      const windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight

      // 滚动条到底部的条件
      if (
        scrollTop + windowHeight >= scrollHeight - 200 &&
        isRefreshBool.value
      ) {
        if (hasMore.value) {
          isRefreshBool.value = false
          getArticle()
        }
      }
      // console.log(scrollTop, windowHeight, scrollHeight)
    }

    onMounted(() => {
      getArticle()
      getTag()
      window.addEventListener('scroll', isRefresh, true)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', isRefresh)
    })

    return { articleList, searchTag, newTagsList, total }
  },
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
    justify-content: center;
    .article-list-container {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
    }
    .article-tag {
      position: sticky;
      margin-top: 50px;
      width: 300px;
    }
  }
}
</style>
