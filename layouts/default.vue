<template>
  <div class="main">
    <AppHeader />
    <div class="app-main">
      <transition name="page">
        <Nuxt
          keep-alive
          :keep-alive-props="{ include: ['Article'], exclude: ['Home'] }"
        />
      </transition>
    </div>
    <BackTop />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppHeader from './appHeader.vue'
import AppFooter from './appFooter.vue'
import BackTop from './backTop.vue'

export default defineComponent({
  name: 'Defalut',
  components: {
    AppHeader,
    AppFooter,
    BackTop,
  },
})
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .app-main {
    min-height: calc(100vh - 124px);
  }
}
</style>
