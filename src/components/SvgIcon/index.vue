<template>
  <div>
    <svg width="30px">
      <use :style="{ width, height }" :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'SvgIcon',
})

defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '5px',
  },
})
</script>

<style scoped></style>
