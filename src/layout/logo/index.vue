<template>
  <div class="logo" v-if="!setting.logoHidden">
    <img :src="setting.logo" alt="logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Logo',
})
import setting from '@/setting'
</script>

<style lang="scss" scoped>
.logo {
  height: $base-menu-logo-height;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  padding: 5px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: $base-menu-logo-font-size;
    margin-left: 10px;
  }
}
</style>
