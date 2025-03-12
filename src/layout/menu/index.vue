<template>
  <div>
    <template v-for="item in menuList" :key="item.path">
      <el-menu-item v-if="!item.children && !item.meta.hidden" :index="item.path" @click="goRoute">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
      <el-menu-item
        v-if="item.children && item.children.length == 1 && !item.meta.hidden"
        :index="item.children[0].path"
        @click="goRoute"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
      <el-sub-menu
        v-if="item.children && item.children.length > 1 && !item.meta.hidden"
        :index="item.path"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
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

import { useRouter } from 'vue-router'

defineProps(['menuList'])

const router = useRouter()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const goRoute = (val: any) => {
  router.push(val.indexPath.join('/'))
}
</script>

<style lang="scss" scoped></style>
