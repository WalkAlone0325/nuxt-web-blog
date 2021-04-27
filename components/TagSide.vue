<template>
  <div class="aside-page">
    <div class="aside-tag">
      <h3 class="tag-title">标签分类</h3>
      <hr />
      <ul>
        <li class="pointer">
          <span class="tag-name" @click="searchTag('')">全部</span>
          <span class="article-count">【{{ total }}】篇</span>
        </li>
        <li
          v-for="item in tagsList"
          :key="item._id"
          class="pointer"
          @click="searchTag(item._id)"
        >
          <span class="tag-name">{{ item.tag }}</span>
          <span class="article-count">【{{ item.numList }}】篇</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Data, PropType, SetupContext } from '@nuxtjs/composition-api'

export default {
  // props: { tagsList: Array, total: Number },
  props: {
    tagsList: {
      type: Array,
      default: [] as PropType<any>,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  setup(_props: Data, { emit }: SetupContext) {
    // 过滤得到标签文章
    const searchTag = (val: any) => {
      emit('searchTag', val)
    }
    return {
      searchTag,
    }
  },
}
</script>

<style lang="scss" scoped>
.aside-page {
  position: sticky;
  top: 80px;
  margin-right: 10px;
  padding-bottom: 10px;
  border-radius: 6px;
  background: #f1f1f1;
  width: 100%;
  &:hover {
    transition: 1s ease;
    box-shadow: 0 0 5px 5px #9974c4;
  }
  .aside-tag {
    .tag-title {
      padding: 10px 0px 10px 10px;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        display: flex;
        font-size: 16px;
        &:hover {
          background: #3495db;
        }
        .tag-name {
          flex: 1;
          margin: 5px;
          padding: 5px 10px;
        }
        .article-count {
          margin: 5px;
          padding: 5px 10px;
        }
      }
    }
  }
}
</style>
