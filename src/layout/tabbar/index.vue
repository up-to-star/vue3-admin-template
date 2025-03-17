<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <!-- 左侧的静态 -->
      <el-icon style="margin-right: 10px" @click="changeIcon">
        <component :is="layoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
      </el-icon>
      <!-- 左侧面包屑 -->
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabbar_right">
      <el-button size="small" icon="Refresh" circle></el-button>
      <el-button size="small" icon="FullScreen" circle></el-button>
      <el-button size="small" icon="Setting" circle></el-button>
      <img src="/ustcblue.jpg" style="width: 24px; height: 24px; margin: 0 10px" />
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'TabBar',
})

import useLayoutSettingStore from '@/store/modules/setting'

const layoutSettingStore = useLayoutSettingStore()
const changeIcon = () => {
  layoutSettingStore.changeFold()
}
</script>

<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
</style>
