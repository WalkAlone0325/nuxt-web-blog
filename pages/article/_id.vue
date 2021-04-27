<template>
  <div class="detail-page">
    <div class="detail-header bg-img-ani">
      <h1>{{ articleItem.title }}</h1>
      <span class="detail-avatar">作者：{{ articleItem.avatar }}</span>
      <span class="detail-avatar">
        <span v-for="item in articleItem.tags" :key="item._id">
          <span class="detail-tag">标签：{{ item.tag }}</span>
        </span>
      </span>
      <span class="detail-date">发布时间：{{ time }}</span>
    </div>
    <div class="detail-body">
      <div class="detail-left">
        <div class="markdown-body">
          <loading v-if="!articleItem.body" />
          <!-- v-html="code" -->
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-else ref="content" v-html="code"></div>
        </div>
      </div>
      <div class="detail-aside">
        <h3>目录</h3>
        <div v-if="!articleItem.toc">亲，正在加载中。。。</div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-else class="detail-toc" v-html="toc"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  onMounted,
  ref,
  computed,
  useContext,
  Ref,
} from '@nuxtjs/composition-api'
import { tocObj, useTitle } from '@/compositions/usetitle'
import 'highlight.js/styles/atom-one-dark.css'
import '@/assets/css/_highlight.scss'
import { timeFormat } from '@/plugins/timeFormat'
import { Article } from '@/types'
import Loading from '~/components/Loading.vue'

export default {
  name: 'ArticleDetail',
  components: { Loading },
  setup() {
    const articleItem = ref({} as Ref<Article>)
    const code = ref('')
    const toc = ref('')

    const { $axios, params } = useContext()

    onMounted(() => {
      $axios
        .get(`article/${params.value.id}`)
        .then((res) => {
          if (res.status === 200) {
            articleItem.value = res.data
            if (res.data.body) {
              code.value = useTitle(res.data.body)
              res.data.toc = tocObj.toHTML()
              toc.value = res.data.toc
            }
          }
        })
        .catch((err) => {
          throw new Error(err)
        })
    })
    const time = computed(() => {
      return timeFormat(articleItem.value.created)
    })
    return { articleItem, code, toc, time }
  },
}
</script>

<style lang="scss">
// @import '~/assets/css/_highlight.scss';
@import '~/assets/css/_variables.scss';
.detail-page {
  margin: 0 auto;
  .detail-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;
    h1 {
      color: $color-white;
    }
    .detail-avatar {
      margin: 10px;
      color: $color-white;
      font-size: 18px;
      .fa-user {
        margin-right: 10px;
      }
      .detail-tag {
        margin: 0 10px;
      }
    }
    .detail-date {
      color: $color-white;
    }
  }
  .detail-body {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 84%;
    margin: 20px auto;
    .detail-left {
      width: 80%;
      .markdown-body {
        min-height: 600px;
        padding: 50px 40px 20px 40px;
      }
    }
    .detail-aside {
      position: sticky;
      top: 70px;
      width: 20%;
      margin-left: 10px;
      min-height: 200px;
      background: $color-white;
      h3 {
        text-align: center;
        margin: 10px auto;
        padding-bottom: 5px;
        border-bottom: 2px solid $color-pink;
      }
      .detail-toc {
        ul {
          list-style: none;
          li {
            margin: 0px 0 4px -30px;
            padding: 2px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            a {
              text-decoration: none;
              color: #333;
              // margin: 2px 0;
              font-size: 14px;
              &:hover {
                border-bottom: 2px solid $tx-tag;
              }
            }
          }
        }
      }
    }
  }
}
.anchor-fix {
  display: block;
  height: 60px;
  margin-top: -60px;
  visibility: hidden;
}
</style>
