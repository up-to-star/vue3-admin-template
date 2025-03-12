<template>
  <div>
    <template v-for="item in menuList" :key="item.path">
      <el-menu-item v-if="!item.children && !item.meta.hidden" :index="item.path">
        <template #title>
          <span>icon</span>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
      <el-menu-item
        v-if="item.children && item.children.length == 1 && !item.meta.hidden"
        :index="item.children[0].path"
      >
        <template #title>
          <span>icon</span>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
      <el-sub-menu
        v-if="item.children && item.children.length > 1 && !item.meta.hidden"
        :index="item.path"
      >
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Menu',
})

defineProps(['menuList'])
</script>

<style lang="scss" scoped></style>
