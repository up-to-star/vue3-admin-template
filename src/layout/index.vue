<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 滚动组件，放置菜单组件 -->
      <el-scrollbar class="scrollbar">
        <el-menu class="menu" background-color="#001529" text-color="white">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar">456</div>
    <div class="layout_content">789</div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'LayOut',
})
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'

import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .menu {
        border-right: none;
      }
    }
  }
  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: skyblue;
    position: fixed;
    top: 0;
    left: $base-menu-width;
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
  }
}
</style>
