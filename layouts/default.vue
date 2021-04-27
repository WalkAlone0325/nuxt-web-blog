<template>
  <div>
    <AppHeader />
    <transition name="page">
      <Nuxt
        keep-alive
        :keep-alive-props="{ include: ['Article'], exclude: ['Home'] }"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppHeader from './appHeader.vue'

export default defineComponent({
  name: 'Defalut',
  components: {
    AppHeader,
  },
})
</script>

<style></style>
