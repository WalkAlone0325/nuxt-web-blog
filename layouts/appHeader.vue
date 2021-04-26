<template>
  <div class="header-container">
    <header class="basic-header">
      <div class="logo">
        <h3 class="logo-title">Loner</h3>
        <span class="logo-img">logo</span>
      </div>

      <div class="menu">
        <ul class="menu-list">
          <nuxt-link
            v-for="item in menulist"
            :key="item.path"
            v-slot="{ navigate, isActive, isExactActive }"
            :to="item.path"
            custom
          >
            <li
              :class="[
                'menu-item',
                isActive && 'router-link-active',
                isExactActive && 'router-link-exact-active',
              ]"
              @click="navigate"
            >
              {{ item.title }}
            </li>
          </nuxt-link>
        </ul>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'AppHeader',
  setup() {
    const menulist = ref([
      { title: '首页', path: '/home' },
      { title: '文章', path: '/article' },
      { title: '日记', path: '/diary' },
      { title: '生活', path: '/live' },
      { title: '关于', path: '/about' },
    ])

    return { menulist }
  },
})
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 64px;
  background: rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  z-index: 999;

  .basic-header {
    width: 86%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .logo {
      height: 64px;
      display: flex;
      .logo-title {
        line-height: 64px;
      }
      .logo-img {
        margin-left: 10px;
        line-height: 64px;
      }
    }
    .menu {
      display: flex;
      .menu-list {
        display: flex;
        height: 64px;
        align-items: center;
        .menu-item {
          position: relative;
          display: block;
          margin: 0 6px;
          padding: 0 20px;
          height: 46px;
          line-height: 46px;
          transition: 0.5s;
          &::before {
            content: '';
            position: absolute;
            bottom: 12px;
            left: 12px;
            width: 12px;
            height: 12px;
            border: 3px solid #b351c2;
            border-width: 0 0 3px 3px;
            transition: 0.5s;
            opacity: 0;
          }
          &:hover {
            color: #fff;
            transition: 0.5s;
            background: #b351c2;
            cursor: pointer;
          }
          &:hover::before {
            bottom: -8px;
            left: -8px;
            opacity: 1;
          }
          &::after {
            content: '';
            position: absolute;
            top: 12px;
            right: 12px;
            width: 12px;
            height: 12px;
            border: 3px solid #b351c2;
            border-width: 3px 3px 0 0;
            transition: 0.5s;
            opacity: 0;
          }
          &:hover::after {
            top: -8px;
            right: -8px;
            opacity: 1;
          }
        }
        /*.menu-item {
          position: relative;
          transition: 0.5s;
          span {
            display: block;
            margin: 0 6px;
            // padding: 0 20px;
            height: 46px;
            line-height: 46px;
            transition: 0.5s;
            &::before {
              content: '';
              position: absolute;
              bottom: 12px;
              left: 12px;
              width: 12px;
              height: 12px;
              border: 3px solid #b351c2;
              border-width: 0 0 3px 3px;
              transition: 0.5s;
              opacity: 0;
            }
            &:hover {
              color: #fff;
              transition: 0.5s;
              background: #b351c2;
              cursor: pointer;
            }
            &:hover::before {
              bottom: -8px;
              left: -8px;
              opacity: 1;
            }
            &::after {
              content: '';
              position: absolute;
              top: 12px;
              right: 12px;
              width: 12px;
              height: 12px;
              border: 3px solid #b351c2;
              border-width: 3px 3px 0 0;
              transition: 0.5s;
              opacity: 0;
            }
            &:hover::after {
              top: -8px;
              right: -8px;
              opacity: 1;
            }
          }
        }*/
      }
      .menu-setting {
        line-height: 64px;
      }
    }
  }
}
.router-link-exact-active,
.router-link-active {
  color: #fff;
  transition: 0.5s;
  background: #b351c2;
  cursor: pointer;
}
</style>
