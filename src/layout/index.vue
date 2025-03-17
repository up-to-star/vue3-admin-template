<template>
  <div class="layout_container">
    <div class="layout_slider" :class="{ fold: layoutSettingStore.fold }">
      <Logo></Logo>
      <!-- 滚动组件，放置菜单组件 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          class="menu"
          background-color="#001529"
          text-color="white"
          :default-active="route.path"
          :collapse="layoutSettingStore.fold"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar" :class="{ fold: layoutSettingStore.fold }">
      <TabBar></TabBar>
    </div>
    <div class="layout_content" :class="{ fold: layoutSettingStore.fold }">
      <Main></Main>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'LayOut',
})
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import TabBar from './tabbar/index.vue'

import useUserStore from '@/store/modules/user'
import { useRoute } from 'vue-router'
import useLayoutSettingStore from '@/store/modules/setting'

const route = useRoute()
const userStore = useUserStore()
const layoutSettingStore = useLayoutSettingStore()
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .menu {
        border-right: none;
      }
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }
  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: white;
    position: fixed;
    top: 0;
    left: $base-menu-width;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_content {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: yellow;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
