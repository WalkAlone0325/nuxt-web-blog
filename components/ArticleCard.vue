<template>
  <nuxt-link custom :to="`/article/${item._id}`">
    <div class="article-card">
      <img class="card-img" :src="item.image" :alt="item.title" />
      <div class="card-content">
        <h4 class="card-title">{{ item.title }}</h4>
        <div class="card-desc">
          {{ item.info }}
        </div>
      </div>
      <div class="card-foot">
        <span>创建时间：{{ time }}</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { computed, Data } from '@nuxtjs/composition-api'
import { timeFormat } from '@/plugins/timeFormat'

export default {
  name: 'ArticleCard',
  props: {
    item: {
      type: Object as any,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {},
    },
  },
  setup(props: Data) {
    const time = computed(() => {
      return timeFormat((props.item as any).created)
    })

    return { time }
  },
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.article-card {
  width: 280px;
  height: 350px;
  margin-top: 30px;
  margin-right: 15px;
  margin-left: 15px;
  background: darkcyan;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 0 15px #9d7ac7;
    transition: 0.5s;
    transform: scale(1.04);
  }
  .card-img {
    width: 100%;
    height: 200px;
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
